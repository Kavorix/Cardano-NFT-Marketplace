import { getNFTDetailByAsset } from 'api/api'
import { buyNFT, getAllListing, makeAnOfferForNFT } from 'api/marketplace'
import CopyBoard from 'components/CopyBoard'
import CustomBorderButton from 'components/common/CustomBorderButton'
import CustomButton from 'components/common/CustomButton'
import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import BuyNFTModal from 'components/modal/BuyNFTModal'
import SuccessModal from 'components/modal/SuccessModal'
import { COLLECTION_DATA } from 'constants/document'
import { DROPDOWN_ICON, SLICK_LEFT_ICON, SLICK_RIGHT_ICON, VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import { useWalletConnect } from 'context/WalletConnect'
import { getExactImageFormat } from 'hooks/function'
import { useCallback, useEffect, useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import { SelectButton, SelectButtonGroup } from './index.styled'
import { useGlobalContext } from 'context/GlobalContext'
import MakeOfferModal from 'components/modal/MakeOfferModal'
import VERIFIED_COLLECTIONS from 'constants/verified.collections.constant'
import { useCart } from 'context/CartContext'
import { floor } from 'lodash'
import { ThreeDots } from 'react-loader-spinner'


const selectButtons = [
  "Purchase Now",
  "Make an Offer",
  // "Buy with Credit Card",
  // "Buy with ETH",
]
let count = 0;
const SpecNFT = () => {
  const nftAsset = window.location.href.split("/nfts/")[1];

  const [listedData, setListedData] = useState<ListedData>()
  const [NFTData, setNFTData] = useState<NFTDataProps[]>()
  const [listedNFTUtxo, setListedNFTUtxo] = useState<string>()
  const [isListed, setIsListed] = useState<boolean>();

  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [noteMessage, setNoteMessage] = useState<string>()
  const [buttonSelected, setButtonSelected] = useState('Purchase Now');
  const [isBundle, setIsBundle] = useState<boolean>()

  const [activeNFT, setActiveNFT] = useState(0);
  const [imageNFTs, setImageNFTs] = useState([])

  const [loading, setLoading] = useState<boolean>(false)

  const { myWalletAddress, lucid } = useWalletConnect()
  const { listedAllNFTs, myBalance } = useGlobalContext()
  const { cartData, addToCart } = useCart()

  const addCart = (newData) => {
    // Append newData to the existing array and update it in local storage
    console.log("newData", newData)
    addToCart(newData)
  };

  const isAssetInListing = (data: ListedNFTList, asset: string) => {
    for (let key in data) {
      if (data[key].nfts.hasOwnProperty(asset)) {
        return true;
      }
    }
    return false;
  }

  function getUtxoByAsset(data: ListedNFTList, asset: string) {
    for (let key in data) {
      if (data[key].nfts.hasOwnProperty(asset)) {
        return key;
      }
    }
    return null; // return null if tokenId does not exist in any nft object
  }

  useEffect(() => {
    setLoading(true)
    if (nftAsset && listedAllNFTs && count < 1) {
      const isListed: boolean = isAssetInListing(listedAllNFTs, nftAsset)
      setIsListed(isListed)
      if (isListed) {
        const utxo = getUtxoByAsset(listedAllNFTs, nftAsset)
        if (Object.keys(listedAllNFTs[utxo].nfts).length > 1) {
          setIsBundle(true)
          setImageNFTs(Object.values(listedAllNFTs[utxo].nfts))
        }
        setListedNFTUtxo(utxo)
        setListedData(listedAllNFTs[utxo])
        getNFTData(Object.keys(listedAllNFTs[utxo].nfts))
        count++;
      } else {
        getNFTData([nftAsset])
        count++;

      }
    }
  }, [listedAllNFTs, nftAsset])


  const submitBuyNFT = async () => {
    // submit tx to buy nft
    const response = await buyNFT(myWalletAddress, lucid, listedNFTUtxo)
    if (response) {
      // close modal for buying nft(s)
      setShowBuyModal(false)
      setNoteMessage('You have successfully made your purchase.')
      // show success modal
      setShowSuccessModal(true)
    } else {
    }
  }

  const submitOffer = async (price: number, policyId: string, asset: string) => {
    const response = await makeAnOfferForNFT(myWalletAddress, lucid, price, policyId, asset)
    if (response) {
      // close modal for buying nft(s)
      setShowOfferModal(false)
      setNoteMessage('You have successfully made your offer.')
      // show success modal
      setShowSuccessModal(true)
    } else {
    }
  }


  const getNFTData = async (assets: string[]) => {
    let arr = [];
    console.log("assets.length", assets.length)
    for (let i = 0; i < assets.length; i++) {
      const data = await getNFTDetailByAsset(assets[i]);
      console.log("data", data)
      const object: CollectionType = VERIFIED_COLLECTIONS.find(item => item.policyId === data.policy_id);
      arr.push({
        asset: data.asset,
        name: data.onchain_metadata.name,
        image: data.onchain_metadata.image,
        policyId: data.policy_id,
        description: object ? object.description : 'MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS'
      })
    }
    setLoading(false)

    setNFTData(arr)
  }

  return (
    <PageWrapper>
      <Container paddingTop='100px'>
        {
          // loading ?
          //   <FlexBox smJustifyContent='center' smAlignItems='center'>
          //     <ThreeDots
          //       height="80"
          //       width="80"
          //       radius="9"
          //       color="#f73737"
          //       ariaLabel="three-dots-loading"
          //       wrapperStyle={{}}
          //       visible={true}
          //     />
          //   </FlexBox>
          //   :
            <>
              {
                NFTData &&
                <FlexBox
                  justifyContent='space-between'
                  smGap='16px'
                >

                  {
                    !isBundle &&
                    <CustomImage
                      image={getExactImageFormat(NFTData[activeNFT].image)}
                      width='502px'
                      height='502px'
                      borderRadius='3px'
                      smWidth='358px'
                      smHeight='358px'
                    />
                  }
                  {
                    isBundle &&
                    <FlexBox maxWidth='502px' direction='column' smWidth='100%'>
                      <FlexBox alignItems='center' gap='25px' smDirection='row'>
                        <CustomImage
                          image={SLICK_LEFT_ICON}
                          width='18.6px'
                          height='37.8px'
                          smWidth='10px'
                          smHeight='18.6px'
                          cursor='pointer'
                          onClick={() => {
                            if (activeNFT !== 0)
                              setActiveNFT(activeNFT => activeNFT - 1)
                          }}
                        />
                        <CustomImage
                          image={
                            NFTData && NFTData.length > 0 &&
                            getExactImageFormat(NFTData[activeNFT].image)
                          }
                          width='380px'
                          height='380px'
                          borderRadius='3px'
                          smWidth='250px'
                          smHeight='250px'
                        />
                        <CustomImage
                          image={SLICK_RIGHT_ICON}
                          width='18.6px'
                          height='37.8px'
                          smWidth='10px'
                          smHeight='18.6px'
                          cursor='pointer'
                          onClick={() => {
                            if (activeNFT < imageNFTs.length - 1) setActiveNFT(activeNFT => activeNFT + 1)
                          }}
                        />
                      </FlexBox>

                      <FlexBox
                        bgColor='white'
                        padding='12px 24px'
                        smDirection='row'
                        smPadding='6px 12px'
                        gap="12px"
                        alignItems='center'
                        borderRadius='3px'
                        marginTop='24px'
                        smGap='8px'
                      >
                        {
                          NFTData && NFTData.length > 0 && NFTData.slice(floor(activeNFT / 6) * 6, floor(activeNFT / 6) * 6 + 6).map((item, j) => {
                            return (
                              <CustomImage
                                image={
                                  NFTData && NFTData.length > 0 &&
                                  getExactImageFormat(item.image)
                                }
                                key={j}
                                alt={`img-slick-nft` + j}
                                width={(j + floor(activeNFT / 6) * 6) === activeNFT ? '80px' : '64px'}

                                height={(j + floor(activeNFT / 6) * 6) === activeNFT ? '80px' : '64px'}
                                smWidth={(j + floor(activeNFT / 6) * 6) === activeNFT ? '50px' : '36px'}
                                smHeight={(j + floor(activeNFT / 6) * 6) === activeNFT ? '50px' : '36px'}
                                onClick={() => {
                                  setActiveNFT(j + floor(activeNFT / 5) * 5)
                                }}
                                cursor='pointer'
                                borderRadius='3px'
                              />
                            )
                          })
                        }
                      </FlexBox>
                    </FlexBox>
                  }
                  <FlexBox direction='column' width='default' maxWidth='670px'>
                    <FlexBox direction='column' marginBottom='50px' gap='10px'>
                      <CustomText
                        text={
                          NFTData[activeNFT].name
                        }
                        maxWidth='665px'
                        display='block'
                        smDisplay='block'
                        className='three-dots'
                        fontFamily='Inconsolata'
                        fontSize='50px'
                        fontWeight='700'
                        smFontSize='38px'
                        smMaxWidth='358px'
                      />
                      <FlexBox
                        smDirection='row'
                        gap='10px'
                        alignItems='center'
                        justifyContent='start'
                        smJustifyContent='start'
                      >
                        {
                          <CustomText
                            text={
                              COLLECTION_DATA.hasOwnProperty(NFTData[activeNFT].policyId)
                                ?
                                COLLECTION_DATA[NFTData[activeNFT].policyId].name
                                :
                                NFTData[activeNFT].policyId
                            }
                            color='#F73737'
                            fontSize='21px'
                            fontWeight='400'
                            maxWidth='600px'
                            display='block'
                            className='three-dots'
                            smDisplay='block'
                            smMaxWidth='350px'
                          />
                        }
                        {
                          Object.keys(COLLECTION_DATA).includes(NFTData[activeNFT].policyId) &&
                          <CustomImage
                            image={VERIFIED_ICON_IMAGE}
                            width='22px'
                            height='22px'
                          />
                        }

                      </FlexBox>
                      {
                        isListed &&
                        <CustomText
                          text={`Owned by: ${listedData && listedData.seller ? listedData.seller : ''}`}
                          fontSize='21px'
                          fontWeight='400'
                          maxWidth='440px'
                          className="three-dots"
                          display='block'
                          smDisplay='block'
                          smMaxWidth='350px'
                        />
                      }
                    </FlexBox>
                    <CustomText
                      text={NFTData && NFTData[activeNFT].description}
                      maxWidth='665px'
                      fontSize='16px'
                      fontWeight='400'
                      fontFamily='Open Sans'
                      marginBottom='16px'
                      smMaxWidth='100%'
                      smFontSize='14px'
                    />
                    <FlexBox
                      smDirection='row'
                      gap='11px'
                      justifyContent='start'
                      marginBottom='48px'
                      alignItems='center'
                    >
                      <FlexBox alignItems='center' smAlignItems='center' smGap='8.5px'>
                        <CustomText
                          text={`Policy ID: `}
                          fontWeight='400'
                          fontFamily='Inconsolata'
                          fontSize='21px'
                          className='no-wrap'
                          letterSpacing='-1.155px'
                          smFontSize='18pxF'
                        />
                        <CopyBoard addr={NFTData[activeNFT].policyId} maxWidth='139px' />
                      </FlexBox>
                      <FlexBox alignItems='center' smAlignItems='center' smGap='8.5px'>
                        <CustomText
                          text={`Asset ID: `}
                          fontWeight='400'
                          fontFamily='Inconsolata'
                          fontSize='21px'
                          className='no-wrap'
                          letterSpacing='-1.155px'
                          smFontSize='18px'
                        />
                        <CopyBoard addr={NFTData[activeNFT].asset} maxWidth='139px' />
                      </FlexBox>

                    </FlexBox>
                    <FlexBox
                      bgColor='white'
                      padding='15px 24px 30px 36px'
                      borderRadius='3px'
                      justifyContent='start'
                      direction='column'
                      gap='16px'
                      smPadding='16px 32px'
                    >
                      {
                        listedData &&
                        <CustomText
                          text={`₳${parseInt(listedData.amount) / 1000000}`}
                          fontSize='50px'
                          fontWeight='700'
                          fontFamily='Open Sans'
                          smFontSize='28px'
                          color={(listedData.seller === myWalletAddress || myWalletAddress === undefined || myBalance.ADA < parseInt(listedData.amount)) ? '#9e9e9e' : 'black'}
                        />
                      }
                      {isListed
                        ?
                        <FlexBox justifyContent='start' gap='16px'>
                          <CustomBorderButton
                            width='300px'
                            height='48px'
                            text='Add to Cart'
                            disabled={listedData.seller === myWalletAddress || myWalletAddress === undefined ||
                              cartData.some(item => item.utxo === listedData.utxo)}
                            onClick={() => {
                              addCart(listedData)
                            }}
                            smWidth='100%'
                          />
                          <FlexBox width='auto' smWidth='100%' smDirection='row' gap="16px" smGap="16px">

                            <FlexBox direction='column' width='240px' smWidth='100%'>
                              {
                                buttonSelected === "Purchase Now" &&
                                <CustomButton
                                  text='Purchase Now'
                                  width='240px'
                                  height='48px'
                                  disabled={listedData.seller === myWalletAddress || myWalletAddress === undefined || myBalance.ADA < parseInt(listedData.amount)}
                                  onClick={() => {
                                    setShowBuyModal(true);
                                  }}
                                  smWidth='100%'
                                  smHeight='42px'
                                />
                              }
                              {
                                buttonSelected === "Make an Offer" &&
                                <CustomButton
                                  text='Make an Offer'
                                  width='100%'
                                  height='48px'
                                  onClick={() => {
                                    setShowOfferModal(true);
                                  }}
                                  disabled={
                                    myWalletAddress === undefined || isBundle
                                  }
                                  smWidth='100%'
                                  smHeight='42px'
                                />
                              }
                              {
                                buttonSelected === "Buy with Credit Card" &&

                                <CustomButton
                                  text='Buy with Credit Card'
                                  width='100%'
                                  height='48px'
                                  disabled={true}
                                />
                              }
                              {
                                buttonSelected === "Buy with ETH" &&

                                <CustomButton
                                  text='Buy with ETH'
                                  width='100%'
                                  height='48px'
                                  disabled={true}
                                />
                              }
                              {
                                showDropdown &&
                                <SelectButtonGroup>
                                  {
                                    selectButtons.map((button: string, index: number) => {
                                      if (button === buttonSelected) {
                                        return;
                                      }
                                      return (
                                        <SelectButton key={index} onClick={() => {
                                          setButtonSelected(button)
                                        }}>
                                          {button}
                                        </SelectButton>
                                      )
                                    })

                                  }

                                </SelectButtonGroup>
                              }
                              {

                                <>
                                  {
                                    myWalletAddress === undefined &&
                                    <CustomText
                                      text={`Please connect your wallet.`}
                                      marginTop='8px'
                                      fontFamily='Open Sans'
                                      fontSize='16px'
                                      fontWeight='400'
                                      color='#F73737'
                                      width='100%'
                                      justifyContent='end'
                                    />
                                  }

                                  {
                                    myWalletAddress !== undefined && myBalance.ADA < parseInt(listedData.amount) &&
                                    <CustomText
                                      text={`Insufficient funds in wallet.`}
                                      marginTop='8px'
                                      fontFamily='Open Sans'
                                      fontSize='16px'
                                      fontWeight='400'
                                      color='#F73737'
                                      width='100%'
                                      justifyContent='end'
                                    />
                                  }

                                </>
                              }

                            </FlexBox>

                            <CustomImage
                              image={DROPDOWN_ICON}
                              width='20.5px'
                              height='12px'
                              smWidth='19px'
                              smHeight='11px'
                              cursor='pointer'
                              marginTop='18px'
                              smMarginTop='15px'
                              onClick={
                                () => {
                                  setShowDropdown(!showDropdown)
                                }
                              }
                            />
                          </FlexBox>
                        </FlexBox>
                        :
                        <FlexBox direction='column'>
                          <CustomText
                            text={`Not Listed`}
                            fontSize='38px'
                            fontWeight='700'
                            fontFamily='Inconsolata'
                            color='#9e9e9e'
                          />
                          <CustomButton
                            marginTop='16px'
                            text='Make an Offer'
                            width='100%'
                            height='48px'
                            onClick={() => {
                              setShowOfferModal(true);
                            }}
                            disabled={myWalletAddress === undefined}
                          />
                          {
                            myWalletAddress === undefined &&
                            <CustomText
                              text={`Please connect your wallet.`}
                              marginTop='8px'
                              fontFamily='Open Sans'
                              fontSize='16px'
                              fontWeight='400'
                              color='#F73737'
                              width='100%'
                              justifyContent='end'
                            />
                          }
                        </FlexBox>
                      }


                    </FlexBox>
                  </FlexBox>
                </FlexBox>
              }
              <FlexBox
                direction='column'
                marginTop='91px'
              >
                <CustomText
                  text={`Trade History`}
                  fontSize='28px'
                  fontWeight='700'
                  smFontSize='21px'
                />
                {/* <FlexBox direction='column' alignItems='center' justifyContent='center'>
            <HistoryTableHeader className='mx-auto'>
              <div>TRADE TYPE</div>
              <div>PRICE</div>
              <div>FROM</div>
              <div>TO</div>
              <div>TIME</div>
            </HistoryTableHeader>
            {
              history.map((item, index) => {
                return (
                  <HistoryTableRow key={index}>
                    <div>Listing</div>
                    <div>₳80</div>
                    <div>addr1qxcr..mlqdj2hql</div>
                    <div>addr1qxcr..mlqdj2hql</div>
                    <div>a minute ago</div>
                  </HistoryTableRow>
                )
              })
            }

          </FlexBox> */}
              </FlexBox>
            </>
        }
      </Container>
      {
        showBuyModal &&
        <BuyNFTModal
          show={showBuyModal}
          onClose={() => { setShowBuyModal(false) }}
          submitBuyNFT={submitBuyNFT}
          nftData={NFTData[0]}
          price={parseInt(listedData.amount) / 1000000}
        />
      }
      {
        showSuccessModal &&
        <SuccessModal
          show={showSuccessModal}
          onClose={() => {
            setShowSuccessModal(false)
          }}
          message={noteMessage}
        />
      }
      {
        showOfferModal &&
        <MakeOfferModal
          show={showOfferModal}
          onClose={() => { setShowOfferModal(false) }}
          submitOffer={submitOffer}
          nftData={NFTData[0]}
          listedData={listedData}
        />
      }

    </PageWrapper>
  )
}

export default SpecNFT