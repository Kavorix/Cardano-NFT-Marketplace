import { cancelNFT, editListedNFT, getMyNFTListing, listNFTByAddress } from 'api/marketplace'
import MyListedNFTCard from 'components/card/MyListedNFTCard'
import NFTCard from 'components/card/NFTCard'
import CustomButton from 'components/common/CustomButton'
import CustomImage from 'components/common/CustomImage'
import CustomInput from 'components/common/CustomInput'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import SellNFTBundleModal from 'components/modal/SellNFTBundleModal'
import SellNFTModal from 'components/modal/SellNFTModal'
import SuccessModal from 'components/modal/SuccessModal'
import { BLACK_DOWN_ICON, BLACK_UP_ICON, DOWN_FILTER_ICON_IMAGE, UP_FILTER_ICON_IMAGE } from 'constants/image.constants'
import { useGlobalContext } from 'context/GlobalContext'
import { useWalletConnect } from 'context/WalletConnect'
import { infoAlert } from 'hooks/alert'
import { getExactImageFormat } from 'hooks/function'
import { useEffect, useState } from 'react'
import RemoveConfirmModal from 'components/modal/RemoveConfirmModal'
import EditListingModal from 'components/modal/EditListingModal'
import { useMedia } from 'react-use'
import { getMyListedNFTsFromJPGStore } from 'api/marketplace/getMyListedNFTsFromJPGStore'
import MyJpgStoreNFTCard from 'components/card/MyJpgStoreNFTCard'

const filterCategories = {
  "Rewards": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
  "PFP": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
  "Music": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
}

const MyNFTs = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('');
  const [search2, setSearch2] = useState<string>('');
  const [selectedNFTs, setSelectedNFTs] = useState<NFTDataProps[] | []>([])
  const [myListedData, setMyListedData] = useState<ListedNFTList>();
  const [activeShowingData, setActiveShowingData] = useState([])
  const [showSellModal, setShowSellModal] = useState(false)
  const [activeSelectNFT, setActiveSelectNFT] = useState<NFTDataProps>()
  const [activeEditData, setActiveEditData] = useState()
  const [subFiltersOpen, setSubFiltersOpen] = useState<boolean[]>(
    [false, false, false]
  )
  const [activeRemoveListingID, setActiveRemoveListingID] = useState<string>()

  const [showSellSuccessModal, setShowSellSuccessModal] = useState(false)
  const [showRemoveSuccessModal, setShowRemoveSuccessModal] = useState(false)
  const [showSellBundleModal, setShowSellBundleModal] = useState(false)
  const [showRemoveListingModal, setShowRemoveListingModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)
  const [showRemoveBundleModal, setShowRemoveBundleModal] = useState(false)
  const [myJPGStoreData, setMyJPGStoreData] = useState<any>()
  const { myNFTs, setMyNFTs } = useGlobalContext()
  const { myWalletAddress, lucid } = useWalletConnect()

  const isMobile = useMedia('(max-width: 768px)');

  // const getJpgStoreListedData = async () => {
  //   const jpgStoreListedData = await getMyListedNFTsFromJPGStore(myWalletAddress)
  //   setMyJPGStoreData(jpgStoreListedData)
  // }

  // get my listed nft data
  const getListedData = async () => {
    const listedData = await getMyNFTListing(myWalletAddress);
    setMyListedData(listedData);
  }

  // submit nfts to sell 
  const submitSellNFT = async (assets: string[], price: number) => {
    const response = await listNFTByAddress(myWalletAddress, lucid, assets, price)
    if (response) {
      setShowSellModal(false)
      setShowSellBundleModal(false)
      setShowSellSuccessModal(true)
    } else {
    }
  }

  // edit nfts to list 
  const editNFT = async (price: number, assets: string[], utxoValue) => {
    const response = await editListedNFT(myWalletAddress, lucid, price, assets, utxoValue)
    if (response) {
      setShowEditModal(false)
      setShowSellSuccessModal(true)
    } else {
    }
  }

  // submit nfts to remove
  const submitRemoveNFTs = async () => {
    const response = await cancelNFT(lucid, myWalletAddress, activeRemoveListingID)
    if (response) {
      setShowRemoveSuccessModal(true)
    }
  }

  const toggleSelected = (assetToToggle) => {
    // update state of selected nfts' selected status
    const updatedState = myNFTs.map(item =>
      item.asset === assetToToggle
        ? { ...item, isSelected: !item.isSelected }
        : item
    );
    setMyNFTs(updatedState);
  };

  // select first 10 NFTs for bundle selling
  const selectFirst10NFTs = () => {
    let updatedData = myNFTs.map((item, index) => {
      if (index < 10) {
        return {
          ...item,
          isSelected: true
        };
      }
      return item;
    });
    // console.log("updatedData", updatedData)
    setMyNFTs(updatedData)
  }

  // select first 10 NFTs for bundle selling
  const unSelectFirst10NFTs = () => {
    let updatedData = myNFTs.map((item, index) => {
      if (index < 10) {
        return {
          ...item,
          isSelected: false
        };
      }
      return item;
    });
    // console.log("updatedData", updatedData)
    setMyNFTs(updatedData)
  }

  useEffect(() => {
    if (isChecked) {
      selectFirst10NFTs()
    } else {
      unSelectFirst10NFTs()
    }
  }, [isChecked])

  useEffect(() => {
    // store selected nfts as state
    const _selected_nfts = myNFTs.filter(item => item.isSelected === true);
    setSelectedNFTs(_selected_nfts);
  }, [myNFTs])

  useEffect(() => {
    if (myNFTs && myNFTs.length > 0) {
      // filter nft data by input search
      let filtered_arr = myNFTs.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
      setActiveShowingData(filtered_arr)
    }
  }, [search, myNFTs])

  useEffect(() => {
    // call getListedData if myWalletAddress is set
    if (myWalletAddress) {
      getListedData();
      // getJpgStoreListedData();
    }
  }, [myWalletAddress]);

  return (
    <>
      <FlexBox marginBottom='32px' smDirection='row' gap="20px" justifyContent='start'>
        {
          isFilter
            ?
            <CustomImage
              image={UP_FILTER_ICON_IMAGE}
              width='40px'
              height='40px'
              onClick={() => setIsFilter(false)}
              cursor='pointer'
            />
            :
            <CustomImage
              image={DOWN_FILTER_ICON_IMAGE}
              width='40px'
              height='40px'
              onClick={() => setIsFilter(true)}
              cursor='pointer'
            />
        }
        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search NFTs'
        />
      </FlexBox>

      <FlexBox gap="20px">
        {
          isFilter &&
          <FlexBox
            bgColor='#F3F3F3'
            borderRadius='8px'
            border="1px solid #9E9E9E"
            width='392px'
            padding='32px 32px 454px 32px'
            direction='column'
            justifyContent='start'
            smWidth='320px'
            smPadding='20px 20px 136px 20px'
          >
            <CustomSearchInput
              input={search2}
              setInput={setSearch2}
              placeholder='Search properties'
              bgColor='#E7E7E7'
            />
            <FlexBox marginTop='24px' direction='column'>

              {
                Object.keys(filterCategories).map((filter, index) => {
                  return (
                    <FlexBox direction='column' key={index}>
                      <FlexBox
                        padding='16px'
                        justifyContent='space-between'
                        smDirection='row'
                        borderBottom='#C2C2C2 1px solid'
                        alignItems='center'
                        smPadding='16px'
                      >
                        <CustomText
                          fontSize='14px'
                          fontWeight='600'
                          fontFamily='Open Sans'
                          text={filter}
                          width='100%'
                        />
                        {
                          subFiltersOpen[index]
                            ?
                            <CustomImage
                              image={BLACK_DOWN_ICON}
                              width='10px'
                              height='6px'
                              cursor='pointer'
                              onClick={() => {
                                setSubFiltersOpen(subFiltersOpen.map((item, j) => j === index && false));
                              }}
                            />
                            :
                            <CustomImage
                              image={BLACK_UP_ICON}
                              width='10px'
                              height='6px'
                              cursor='pointer'
                              onClick={() => {
                                setSubFiltersOpen(subFiltersOpen.map((item, j) => j === index && true));
                              }}
                            />
                        }
                      </FlexBox>
                      {
                        subFiltersOpen[index] && filterCategories[filter].map((item, j) => {
                          return (
                            <FlexBox
                              padding='8px 24px'
                              gap="12px"
                              justifyContent='start'
                              key={j} marginBottom='8px'
                              smDirection='row'
                              smAlignItems='center'
                              smJustifyContent='start'
                              smPadding='8px 24px'
                            >
                              <CustomInput
                                type='checkbox'
                                maxWidth='22px'
                                height='22px'
                              />
                              <CustomText
                                text={`Bombers`}
                                fontSize='14px'
                                fontWeight='400'
                                fontFamily='Open Sans'
                              />
                            </FlexBox>
                          )
                        })
                      }
                    </FlexBox>
                  )
                })
              }
            </FlexBox>
          </FlexBox>
        }
        <FlexBox justifyContent='start' direction='column'>
          {
            !isMobile &&
            <>
              <CustomText
                text={`To make an NFT bundle to sell, select NFTs below. Maximum 10 NFTs.`}
                fontFamily='Open Sans'
                fontSize='16px'
                fontWeight='400'
                width='100%'
                marginBottom='12px'
              />
              <FlexBox alignItems='center'>
                <FlexBox padding='0px 16px' gap='8px' justifyContent='start' alignItems='center' smDirection='row' smJustifyContent='start'>
                  <input type="checkbox"
                    checked={isChecked}
                    onClick={() => {
                      setIsChecked(!isChecked);

                    }}
                  />
                  <CustomText
                    text={`Select All`}
                    fontFamily='Open Sans'
                    fontSize='16px'
                    fontWeight='400'
                    width='100%'
                  />
                </FlexBox>
                <CustomButton
                  text='Make NFT Bundle'
                  width='185px'
                  height='42px'
                  disabled={selectedNFTs.length < 2}
                  onClick={() => {
                    setShowSellBundleModal(true)
                  }}
                />
              </FlexBox>
            </>
          }
          <FlexBox
            marginTop='32px'
            flexWrap='wrap'
            gap={`${isFilter ? '52px 70px' : '52px 98px'}`}
            justifyContent='start'
            smJustifyContent='center'
            smAlignItems='center'
          >
            {
              myListedData && Object.values(myListedData).length > 0 && Object.values(myListedData).map((nft, index) => {
                const isBundle = Object.values(nft.nfts).length > 1 ? true : false;
                return (
                  <MyListedNFTCard
                    key={index}
                    isBundle={isBundle}
                    isListed={true}
                    data={nft}
                    setActiveRemoveListingID={setActiveRemoveListingID}
                    setShowRemoveListingModal={setShowRemoveListingModal}
                    setActiveEditData={setActiveEditData}
                    setShowEditModal={setShowEditModal}
                  />
                );
              })
            }
            {
              myJPGStoreData && myJPGStoreData.listings && myJPGStoreData.listings.length > 0 &&
              myJPGStoreData.listings.map((item, j) => {
                return (
                  <MyJpgStoreNFTCard
                    key={j}
                    data={item}
                  />
                )
              })
            }
            {
              activeShowingData && activeShowingData.length > 0 &&
              activeShowingData.map((nft: NFTDataProps, j) => {

                const imageId = getExactImageFormat(nft.image)
                return (
                  <NFTCard
                    key={j}
                    image={imageId}
                    name={nft.name}
                    isSelected={nft.isSelected}
                    onClick={() => {
                      setActiveSelectNFT(nft)
                      setShowSellModal(true)
                    }}
                    setSelect={
                      () => {
                        if (selectedNFTs.length === 10) {
                          infoAlert("You already selected 10 NFTs.")
                        } else {
                          toggleSelected(nft.asset)
                        }
                      }
                    }
                  />
                );
              })}

          </FlexBox>
        </FlexBox>
      </FlexBox>
      {
        showSellModal &&
        <SellNFTModal
          show={showSellModal}
          onClose={() => {
            setShowSellModal(false)
          }}
          nftData={activeSelectNFT}
          submitSellNFT={submitSellNFT}
        />
      }
      {
        showSellBundleModal &&
        <SellNFTBundleModal
          show={showSellBundleModal}
          onClose={() => {
            setShowSellBundleModal(false)
          }}
          nftData={selectedNFTs}
          submitSellNFT={submitSellNFT}
        />
      }
      {
        showSellSuccessModal &&
        <SuccessModal
          show={showSellSuccessModal}
          onClose={() => { setShowSellSuccessModal(false) }}
          message='You have successfully listed your NFT(s).' />
      }
      {
        showRemoveSuccessModal &&
        <SuccessModal
          show={showRemoveSuccessModal}
          onClose={() => { setShowRemoveSuccessModal(false) }}
          message='You have successfully removed this listing.' />
      }
      {
        showRemoveListingModal &&
        <RemoveConfirmModal
          show={showRemoveListingModal}
          onClose={() => { setShowRemoveListingModal(false) }}
          confirmText={`Are you sure you want to remove this listing?`}
          confirm={() => {
            setShowRemoveListingModal(false)
            submitRemoveNFTs()
          }}
        />
      }
      {
        showEditModal &&
        <EditListingModal
          show={showEditModal}
          onClose={() => { setShowEditModal(false) }}
          editNFT={editNFT}
          activeEditData={activeEditData}
        />
      }
    </>
  )
}

export default MyNFTs