import axios from 'axios'
import HeaderBanner from 'components/HeaderBanner'
import RaffleCard from 'components/card/RaffleCard'
import CustomButton from 'components/common/CustomButton'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import CreateRaffleModal from 'components/modal/CreateRaffleModal'
import RaffleDetailModal from 'components/modal/RaffleDetailModal'
import RaffleSuccessModal from 'components/modal/RaffleSuccesModal'
import { H1 } from 'components/typography'
import { COLLECTION_DATA, POLICYID_ASSET_LIST } from 'constants/document'
import { RAFFLE_HEADER_IMAGE } from 'constants/image.constants'
import { raffleDetailsScript } from 'constants/script.constants'
import { useGlobalContext } from 'context/GlobalContext'
import { useWalletConnect } from 'context/WalletConnect'
import { generateRandomString, getExactImageFormat, outputEndTimeRemaining } from 'hooks/function'
import { floor } from 'lodash'
import { Data, fromHex } from 'lucid-cardano'
import React, { useEffect, useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'

const restrictedRaffles = [
  "303189669e160382697aa27802560f7977e680eabcee32cabe6ebabc6822acbd",
  "822a519ab508a464e96d41a03e2783bd3bc480357db30096500d884610c7c6b2",
  "e9d639124d9166783c3fcea234f1e0a7f9a773e82d67e6caa7328bd352b9e954",
  "43fc196b9b9274d6d955de81d73baf4fb7b5c9c6da6d9be4a9ae6df262969d59",
  "7e9c57ddc12793330e3773b0bdad76d61433e0bade5ad77e89b3f7cde4618fdb",
  "f442ed75e1701a4ed77e354eac26609e60732a80707a2f4d64dc4c64a6129111",
  "0ebd6c84bc2e7a8fd5d1ed79f4ca6c23ed01f9c89d4297745a3b3c62aa48c96a",
  "018ffb14d16f75564c12b0111bd1fc407d1573e1e8061b67b45d497cdc59fbce",
  "aa855882a8e78d72efbe8c8d0acb30d02992c8c33b5b49a995a113bf69ec8e85",
  "71f89c4446c22f95bc102eedc745afcf61a7ea901d0b902600d5d4bbd1c27647",
  "73c3d8f8db1e7278bff4e4cd34ecbd5fbed30e1d9c402847f1b756da481d3eea",
  "4fba799c498c783efa80c4d310f5dc0cde0debd6fdfa783e4e9a6d8cf99ac08b"
]

const today = new Date();
// const today_10_min_later = new Date(today);
const today_12_hours_later = new Date(today);
const today_48_hours_later = new Date(today);
const today_24_hours_later = new Date(today);
const endTime = new Date(today);
// today_10_min_later.setMinutes(today.getMinutes() + 10);
today_12_hours_later.setMinutes(today.getMinutes() + 15);
// today_12_hours_later.setHours(today.getHours() + 12);
today_48_hours_later.setHours(today.getHours() + 48);
today_24_hours_later.setHours(today.getHours() + 24);
endTime.setDate(today.getDate() + 14);


const formInitialValues = {
  title: '',
  description: '',
  currency: '',
  amount: 0,
  price: 1,
  attachedImage: '',
  minTicket: 1,
  maxTicket: 1,
  endDate: today_24_hours_later, //today_24_hours_later
  endTimeRemaining: outputEndTimeRemaining(today_24_hours_later),
  agree1: false,
  agree2: false,
  selectedNFTs: [],
  raffleID: ''
}

const Raffle = () => {
  const [search, setSearch] = useState("")
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false)
  const [activeShowRaffleData, setActiveShowRaffleData] = useState([])

  const [formData, setFormData] = useState<RaffleFormDataType>(formInitialValues);
  const [raffleDetailData, setRaffleDetailData] = useState({})
  const { myWalletAddress, lucid } = useWalletConnect()

  const { raffleData, floorPriceList, winRaffles } = useGlobalContext()

  // filter raffle array data according to win raffles, search value
  useEffect(() => {
    if (raffleData && Object.values(raffleData).length > 0 && winRaffles) {
      // @ts-ignore
      let filter_arr1 = Object.values(raffleData).filter((item) => (item.status) === 'active')

      // @ts-ignore
      let filtered_arr2 = filter_arr1.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
      setActiveShowRaffleData(filtered_arr2)
    }
  }, [raffleData, winRaffles, search])


  // submit creating raffle
  const submit = async () => {
    if (formData.selectedNFTs.length === 0) {
      return;
    } else {
      // price of raffle
      let amount = floor(formData.price)
      let posix = Math.floor(new Date(formData.endDate).getTime());
      // console.log('posix', posix);
      let exclusiveFlag = 0
      // console.log("myWalletAddress", myWalletAddress)
      // @ts-ignore
      const { paymentCredential, stakeCredential } = lucid.utils.getAddressDetails(
        myWalletAddress
      );

      const assetValues = formData.selectedNFTs.map(item => item.asset);

      let _floorprice: number = 0;

      const axiosRequests = assetValues.map((assetValue) => {
        let _policyID = assetValue.slice(0, 56)
        if (COLLECTION_DATA[_policyID]) {
          // console.log("COLLECTION_DATA[_policyID].floorprice", COLLECTION_DATA[_policyID].floorprice)
          return {
            data: {
              "floor_price": COLLECTION_DATA[_policyID].floorprice * 1000000
            }
          };
        } else {
          // console.log("calling api")

          return axios.get(
            "https://api.opencnft.io/2/collection/" + _policyID + "/floor_price",
            {
              headers: {
                'X-Api-Key': process.env.REACT_APP_OPENCNFT_API_KEY,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Max-Age": "3600",
              }
            }
          );
        }

      });

      try {
        const responses = await Promise.all(axiosRequests);
        // console.log("responses", responses)
        // @ts-ignore
        const totalFloorPrice = responses.reduce((sum, { data }) => sum + data.floor_price, 0);
        _floorprice = totalFloorPrice / 1000000;
        console.log("Average floor price:", _floorprice);
      } catch (err) {
        console.log("Error:", err);
      }

      console.log("_floorPrice", _floorprice)

      const policyId = POLICYID_ASSET_LIST[formData.currency].policyId;
      const asset = POLICYID_ASSET_LIST[formData.currency].asset;
      let decimals = POLICYID_ASSET_LIST[formData.currency].decimals;
      if (
        decimals === 6
      ) {
        amount = amount * 1000000;
        // @ts-ignore
        // tokens['lovelace'] = amount;
      } else {
        if (
          decimals === 8
        ) {
          amount = amount * 100000000;
          // @ts-ignore
          // tokens[unit] = amount;
        } else {
          if (decimals === 4) {
            amount = amount * 10000;
            // @ts-ignore
            // tokens[unit] = amount;
          } else {
            if (decimals === 3) {
              amount = amount * 1000;
              // @ts-ignore
              // tokens[unit] = amount;
            } else {
              amount = amount * 1;
              // @ts-ignore
              // tokens[unit] = amount;
            }
          }
        }
      }

      // @ts-ignore
      let _raffleId = fromHex(formData.title + "-" + floor(formData.minTicket) + "/" + floor(formData.maxTicket)) + posix;
      console.log("hey", _raffleId, myWalletAddress, posix, formData.maxTicket, formData.minTicket, formData.price)



      console.log("token policy, asset", policyId, asset, amount)
      let datumRaffle = Data.to(
        [
          "",//winner
          "",
          policyId,//ADA byte array vuoto
          asset,//amount
          // @ts-ignore
          BigInt(amount), //amount
          fromHex(formData.title + "-" + floor(formData.minTicket) + "/" + floor(formData.maxTicket)),
          fromHex(getExactImageFormat(formData.selectedNFTs[0].image)),
          fromHex(formData.description),//hours in ms
          // @ts-ignore
          BigInt(posix),
          // @ts-ignore
          BigInt(0),//here is always 0. no more drafts
          // @ts-ignore
          exclusiveFlag,
          // @ts-ignore
          paymentCredential.hash,
          // @ts-ignore
          stakeCredential.hash
        ]
      );



      // @ts-ignore
      const rafflePrizeAddress = lucid.utils.validatorToAddress(raffleDetailsScript);
      console.log("raffleprizeAddr", rafflePrizeAddress)


      console.log("datumRaffle", datumRaffle)
      let nfts = {};
      for (let i = 0; i < formData.selectedNFTs.length; i++) {
        nfts[formData.selectedNFTs[i].asset] = 1;
      }
      console.log("nfts", nfts)


      try {
        // @ts-ignore
        const tx = await lucid
          .newTx()
          // @ts-ignore
          .payToContract(rafflePrizeAddress, { inline: datumRaffle }, nfts)
          .complete();
        console.log("tx", tx)
        // @ts-ignore
        const signedTx = await tx.sign().complete();
        console.log("signedTx", signedTx)


        // add notification
        // let uuid = generateRandomString();
        // let current_waiting = { ...txWaitingList }; // Use spread operator or Object.assign() to create a new object
        // current_waiting[uuid] = {
        //   success: false,
        //   actionTime: Date.now(),
        //   actionTitle: "Create New Raffle",
        //   txAddr: "",
        // };
        // setTxWaitingList(current_waiting)

        // setShowWaitingList(true)




        // @ts-ignore
        const txHash = await signedTx.submit();
        // toast(txHash);
        if (txHash) {

          // current_waiting[uuid].txAddr = txHash;
          // setTxWaitingList(current_waiting);
          // localStorage.setItem("crashr_tarnsaction_list", JSON.stringify(current_waiting))

          const response = await axios.post("https://l3wkfagy4g.execute-api.us-west-2.amazonaws.com/test", JSON.stringify({
            // @ts-ignore
            id: _raffleId,
            floorprice: _floorprice,
            // @ts-ignore
            expired: posix,
            txHash: txHash
          }));
          // @ts-ignore
          if (response.status === 200) {
            console.log("success");
            if (formData.currency === "ADA") {
              try {
                const response2 = await axios.post("https://sobxamwtp2.execute-api.us-west-2.amazonaws.com/test", JSON.stringify({
                  uniqueid: _raffleId,
                  creator: myWalletAddress,
                  endtime: posix,
                  handled: false,
                  maxTicket: formData.maxTicket,
                  minTicket: formData.minTicket,
                  price: formData.price,
                  totalTicket: 0,
                }));
                console.log("respond2", response2)
              } catch (err) {
                console.log("err", err)
              }
            }

            setFormData((prevFormData) => ({
              ...prevFormData,
              raffleID: _raffleId
            }));

            setShowCreateModal(false)
            setShowSuccessModal(true)
          }
          console.log("formData.currency", formData.currency);



        } else {
          // delete current_waiting[uuid];
          // setTxWaitingList(current_waiting);
        }
        console.log('txHash', txHash);

      } catch (err) {
        console.log("err", err)
      }

    }
  };


  return (
    <PageWrapper>
      <HeaderBanner
        image={RAFFLE_HEADER_IMAGE}
      />
      <Container paddingTop='12px' smMarginTop='-30px'>
        <H1>
          Raffles
        </H1>
        <CustomText
          text={`<span>With Crashr’s On-Chain Raffle System, you can discover raffles, purchase raffle tickets, and create your own raffles. <b>No limitations</b>. </span>`}
          fontSize='21px'
          fontWeight='400'
          marginTop='25px'
          marginBottom='40px'
          maxWidth='832px'
          fontFamily='Open Sans'
          smMarginBottom='15px'
          smMarginTop='15px'
        />
        <FlexBox justifyContent='start' marginBottom='80px' gap='13px' smMarginBottom='28px'>
          <CustomButton
            text="Create Your Own"
            fontFamily='Open Sans'
            fontSize='21px'
            fontWeight='600'
            width='205px'
            height='64px'
            smWidth='171px'
            smHeight='42px'
            onClick={() => setShowCreateModal(true)}

          />
        </FlexBox>

        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search'
        />

        <FlexBox marginTop='28px' flexWrap='wrap' gap='50px 90px' smGap='14px 29px' smJustifyContent='center' smAlignItems='center'>
          {activeShowRaffleData &&
            activeShowRaffleData.length > 0 && floorPriceList && activeShowRaffleData.map((item, index) => {
              let txAddr = item.uniqueid || item.tx;
              if (!restrictedRaffles.includes(txAddr)) {
                return (
                  <RaffleCard
                    key={index}
                    item={item}
                    onClick={() => {
                      setRaffleDetailData(raffleData[txAddr]);
                      setShowDetailModal(true);
                    }}
                    floorPrice={floorPriceList[txAddr]?.floorprice ?? -1}
                  />
                );
              }

              return null;
            })}
        </FlexBox>
      </Container>
      {
        showSuccessModal &&
        <RaffleSuccessModal
          show={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          raffleID={formData.raffleID}
          message={`We have received your submission.`}
        />
      }

      {
        showCreateModal &&
        <CreateRaffleModal
          show={showCreateModal}
          onClose={() => { setShowCreateModal(false) }}
          formData={formData}
          setFormData={setFormData}
          submit={submit}
        />
      }
      {
        showDetailModal &&
        <RaffleDetailModal
          show={showDetailModal}
          onClose={() => { setShowDetailModal(false) }}
          raffleDetailData={raffleDetailData}
        />
      }
    </PageWrapper>
  )
}

export default Raffle