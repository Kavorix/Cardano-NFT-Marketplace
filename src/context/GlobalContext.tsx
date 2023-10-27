import { createContext, PropsWithChildren, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { getUserDatabyAddress, updateUserProfile } from 'api/api';
import { useWalletConnect } from './WalletConnect';
import { governanceDetailsScript } from 'constants/script.constants';
import { COLLECTION_DATA } from 'constants/document';
import { getAllListing } from 'api/marketplace';
import { DEFAULT_AVATAR_ICONS } from 'constants/image.constants';

interface GlobalContextValues {
  getUserData: (name: string) => Promise<void> | void;
  userData: UserDataType;
  setUserData?: any;
  myTokens: any;
  raffleData: any;
  getRaffleData: () => Promise<void> | void;
  myRaffleData: any;
  getMyRaffleData: () => Promise<void> | void;
  floorPriceList: any;
  featuredRaffles: any;
  winRaffles: any;
  myRaffleEntries: any;
  utxosData: any;
  myNFTs: any;
  setMyRaffleEntries?: any;
  myBalance?: any;
  votingData?: any;
  setMyNFTs?: (data: NFTDataProps[] | []) => void;
  listedAllNFTs?: ListedNFTList;
}

export const GlobalContext = createContext<GlobalContextValues>({
  userData: null,
  getUserData: () => { },
  myTokens: [],
  raffleData: {},
  getRaffleData: () => { },
  myRaffleData: [],
  getMyRaffleData: () => { },
  floorPriceList: {},
  featuredRaffles: [],
  winRaffles: {},
  myRaffleEntries: {},
  utxosData: [],
  myNFTs: [],
});

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const { myWalletAddress } = useWalletConnect()
  const [raffleData, setRaffleData] = useState({});
  const [userData, setUserData] = useState<UserDataType>({
    username: '',
    avatar: '',
    points: 0,
    bomber_username: '',
    bomber_avatar: '',
    crashr: '',
    twitter: '',
    discord: '',
    wallet: '', // Make sure to include the 'wallet' property.
    friends: [],
    user_location: '',
    user_bio: ''
  });

  const [myTokens, setMyTokens] = useState();
  const [myRaffleData, setMyRaffleData] = useState([]);

  const [featuredRaffles, setFeaturedRaffles] = useState()
  const [winRaffles, setWinRaffles] = useState({})
  const [floorPriceList, setFloorPriceList] = useState<FloorPricesType>()
  const [myRaffleEntries, setMyRaffleEntries] = useState({})
  const [utxosData, setUtxosData] = useState([]);
  const [votingData, setVotingData] = useState({});

  const [myNFTs, setMyNFTs] = useState<NFTDataProps[] | []>([]);
  const [myCategorizedNfts, setMyCategorizedNfts] = useState({});
  const [listedAllNFTs, setListedAllNFTs] = useState<ListedNFTList>();
  const [myBalance, setMyBalance] = useState({
    ADA: '',
    USD: '',
    loading: true
  });


  /* The above code is a TypeScript React function component. It defines a function called
  `getActiveVoting` using the `useCallback` hook. This function makes an asynchronous HTTP GET request
  to the specified URL using the `axios` library. It then logs the response data to the console. */
  const getActiveVoting = useCallback(async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_GET_ACTIVE_VOTING_URL);

      const filteredObj = Object.entries(data)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      setVotingData(filteredObj);
    } catch (err) {
      console.log("Error getActiveVoting", err)
    }
  }, [])

  /**
   * The function `getUserData` fetches user data based on a wallet address and updates the user profile
   * if necessary.
   */
  const getUserData = async () => {
    try {
      const _userData = await getUserDatabyAddress(myWalletAddress);
      if (!_userData) {
        const reqData = {
          id: myWalletAddress,
          username: myWalletAddress,
          bomber_username: myWalletAddress,
          avatar: DEFAULT_AVATAR_ICONS[Math.floor(Math.random() * 4)],
          bomber_avatar: DEFAULT_AVATAR_ICONS[Math.floor(Math.random() * 4)],
          points: 0,
          wallet: myWalletAddress, // Provide the wallet address here.
        };
        const response = await updateUserProfile(reqData)
        if (response) {
          setUserData(reqData);
        }

      } else {
        setUserData(_userData);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  }

  /**
   * The function `getMyNFTsData` retrieves NFT data from an API endpoint and categorizes it based on
   * policy ID.
   */
  const getMyNFTsData = async () => {
    const url_get_nft = `${process.env.REACT_APP_GET_MY_NFTS_URL}?address=`

    await axios
      .get(
        url_get_nft + myWalletAddress,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        const nftData = res.data
        // setIsMyNftLoading(false);
        let myPolicyIdList = Object.keys(nftData);
        const allCateNfts = {
          allnfts: {
            name: "All NFTs",
            // @ts-ignore
            data: []
          }
        };
        const allNfts = [];
        for (const policy of myPolicyIdList) {
          let _policy = policy.substring(0, 56);
          let every_nft = {
            asset: nftData[policy].asset ? nftData[policy].asset : '',
            name: nftData[policy].name ? nftData[policy].name : 'Anonymous',
            image: nftData[policy].image ? nftData[policy].image : 'Anonymous',
            isSelected: false
          }
          allNfts.push(every_nft)

          if (!Object.keys(allCateNfts).includes(_policy)) {
            allCateNfts[_policy] = {
              name: COLLECTION_DATA[_policy] ? COLLECTION_DATA[_policy].name : "Anonymous Collection",
              data: [
                nftData[policy]
              ]
            }
          } else {
            allCateNfts[_policy].data.push(nftData[policy])
          }
          // @ts-ignore
          setMyCategorizedNfts(allCateNfts);
        }
        console.log("allNfts", allNfts)
        setMyNFTs(allNfts)
      })
      .catch((err) => {
        console.log("Error getMyNFTsData", err)
      });
  }


  /**
   * The function `getMyTokens` retrieves wallet information and exchange rates for a specific wallet
   * address and updates the state with the retrieved data.
   */
  const getMyTokens = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GET_MY_TOKENS_URL}?address=${myWalletAddress}`
      );

      const result = await axios.get(process.env.REACT_APP_ADA_USD_EXCHANGE_RATE);
      let exchangeRate = result.data.cardano.usd
      // console.log("result.data.cardano.usd", exchangeRate)
      let obj = {};

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (element.name) {
          obj[element.name.value] = parseInt(element.quantity);
        }
      }

      obj['ADA'] = parseInt(data[data.length - 1].lovelace);
      obj['loading'] = false;
      obj['USD'] = (parseInt(data[data.length - 1].lovelace) / 1000000 * parseFloat(exchangeRate)).toFixed(0).toString()

      // @ts-ignore
      setMyBalance(obj)
      //console.log("token data", Object.values(data))
      // @ts-ignore
      setMyTokens(Object.values(data).slice(0, -1))
    } catch (err) {
      // console.log("err", err)
    }
  }

  /**
   * The function `getWinRaffles` makes an asynchronous request to an API endpoint to retrieve data about
   * winners of raffles, processes the data, and sets the processed data in the state variable
   * `winRaffles`.
   */
  const getWinRaffles = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_WINNER_HISTORY_URL)
      // console.log("win raffle data", data)


      if (data) {
        let newObj = {};
        for (let key in data) {
          if (data[key].uniqueid) {
            newObj[data[key].uniqueid] = data[key];
          } else if (data[key].timestamp) {
            newObj[data[key].tx] = data[key];
          }
        }

        setWinRaffles(newObj)
      }
    } catch (err) {
      console.log("err");
    }
  }

  /* The above code is a TypeScript React function component that defines a function called
  `getRaffleData`. This function uses the `useCallback` hook to memoize the function and prevent
  unnecessary re-renders. */
  const getRaffleData = useCallback(async () => {
    try {
      const [response1, response2] = await Promise.all([
        axios.get(process.env.REACT_APP_WINNER_HISTORY_URL),
        axios.get(process.env.REACT_APP_GET_ACTIVE_RAFFLES_URL)
      ]);

      const data1 = response1.data;
      const data2 = response2.data;

      const newObj = {};
      const newObj2 = {};

      if (data1) {
        for (const key in data1) {
          const id = data1[key].uniqueid || data1[key].tx;
          newObj[id] = data1[key];
        }
      }

      if (data2) {
        for (const key in data2) {
          newObj2[data2[key].uniqueid] = data2[key];
        }
      }

      const joinedData = { ...newObj, ...newObj2 };
      setRaffleData(joinedData)

      // Use the joined data as needed
    } catch (error) {
      console.log("Error:", error);
    }
  }, [])

  /**
   * The function `getMyRaffleData` is an asynchronous function that makes an HTTP GET request to a
   * specific API endpoint and retrieves data related to a user's raffles, then sets the retrieved data
   * in the state variable `myRaffleData`.
   */
  const getMyRaffleData = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_GET_MY_RAFFLE_URL}?address=${myWalletAddress}`);

      setMyRaffleData(Object.values(data).slice().reverse())

    } catch (err) {
      console.log("getMyRaffle err", err)
    }
  };

  /**
   * The function `getFloorPriceList` retrieves data from an API, filters and sorts the data, and sets
   * the result in state variables.
   */
  const getFloorPriceList = async () => {
    const { data } = await axios.get(process.env.REACT_APP_GET_FLOOR_PRICE_LIST_URL)

    const result = data.reduce((acc, obj) => {
      acc[obj.id] = obj;
      return acc;
    }, {});

    const filteredItems = data.filter(obj => obj.expired > Date.now()).filter(obj => !Object.values(raffleData).includes(obj.id));

    const sortedItems = filteredItems.sort((a, b) => b.floorprice - a.floorprice);
    const sixBiggestFloorPrices = sortedItems.slice(0, 6);
    setFeaturedRaffles(sixBiggestFloorPrices)
    setFloorPriceList(result)
  }

  /**
   * The function `getMyRaffleEntries` retrieves raffle entries for a given wallet address using an API
   * call and updates the state with the retrieved data.
   */
  const getMyRaffleEntries = async () => {
    const res = await axios.get(process.env.REACT_APP_GET_MY_RAFFLE_ENTRIES_URL + myWalletAddress);
    if (res.data !== '') {
      setMyRaffleEntries(JSON.parse(res.data.transactions))
    }
  }
  /**
   * The function `getUtxosData` is an asynchronous function that retrieves UTXO data from a governance
   * address and sets it in the `utxosData` state variable.
   */

  const getUtxosData = async () => {
    try {
      // @ts-ignore
      const governanceAddress = await lucid.utils.validatorToAddress(governanceDetailsScript);
      // @ts-ignore
      let utxos = await lucid.utxosAt(governanceAddress);
      // console.log("utxos", utxos)
      setUtxosData(utxos)
    } catch (err) {
      // console.log("err", err)
    }
  }

  const getAllNFTListing = async () => {
    try {
      const nftData = await getAllListing();
      setListedAllNFTs(nftData)
    } catch (err) {
      console.log("Error getAllNFTListing", err)
    }
  }

  useEffect(() => {
    if (myWalletAddress && myWalletAddress.length > 0) {
      // first immediate call
      getUserData();
      getMyTokens();
      getMyRaffleData();
      getMyRaffleEntries();
      getMyNFTsData();
      getUtxosData();

      // subsequent calls every 60 seconds
      // const intervalId = setInterval(() => {
      //   getUserData();
      //   getMyTokens();
      //   getMyRaffleData();
      //   getMyRaffleEntries();
      //   getMyNFTsData();
      //   getUtxosData();
      // }, 60000);

      // clearing interval
      // return () => clearInterval(intervalId);
    }
  }, [myWalletAddress]);

  useEffect(() => {
    getAllNFTListing()
    getRaffleData();
    getFloorPriceList();
    getActiveVoting();
    getWinRaffles();
    getAllNFTListing()

    // subsequent calls every 60 seconds
    // const intervalId = setInterval(() => {
    //   getRaffleData();
    //   getFloorPriceList();
    //   getActiveVoting();
    //   getWinRaffles();
    // }, 60000);

    // clearing interval
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        getUserData,
        myTokens,
        getRaffleData,
        raffleData,
        getMyRaffleData,
        myRaffleData,
        floorPriceList,
        featuredRaffles,
        winRaffles,
        myRaffleEntries,
        utxosData,
        myNFTs,
        setMyRaffleEntries,
        myBalance,
        votingData,
        setMyNFTs,
        listedAllNFTs
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);