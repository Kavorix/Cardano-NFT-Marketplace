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
import { H2 } from 'components/typography'
import { COLLECTION_DATA } from 'constants/document'
import { DROPDOWN_ICON, VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import { useWalletConnect } from 'context/WalletConnect'
import { getExactImageFormat } from 'hooks/function'
import { useCallback, useEffect, useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import { HistoryTableHeader, HistoryTableRow, SelectButton, SelectButtonGroup } from './index.styled'
import { useGlobalContext } from 'context/GlobalContext'
import MakeOfferModal from 'components/modal/MakeOfferModal'
import VERIFIED_COLLECTIONS from 'constants/verified.collections.constant'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useCart } from 'context/CartContext'

const history = [
  "", "", "", "", "", "", "", "", "", "", "", "",
]

const selectButtons = [
  "Purchase Now",
  "Make an Offer",
  // "Buy with Credit Card",
  // "Buy with ETH",
]

const SpecNFT = () => {
  const nftAsset = window.location.href.split("/nfts/")[1];

  const [listedData, setListedData] = useState<ListedData>()
  const [NFTData, setNFTData] = useState<NFTDataProps>()
  const [listedNFTUtxo, setListedNFTUtxo] = useState<string>()
  const [isListed, setIsListed] = useState<boolean>();

  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [noteMessage, setNoteMessage] = useState<string>()
  const [buttonSelected, setButtonSelected] = useState('Purchase Now');
  const [isBundle, setIsBundle] = useState<boolean>()

  const { myWalletAddress, lucid } = useWalletConnect()
  const { listedAllNFTs, myBalance } = useGlobalContext()
  const { cartData, addToCart, removeFromCart } = useCart()

  // const [cartData, setCartData] = useLocalStorage('cart-data', []);

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
    if (nftAsset && listedAllNFTs) {
      const isListed: boolean = isAssetInListing(listedAllNFTs, nftAsset)
      setIsListed(isListed)
      if (isListed) {
        const utxo = getUtxoByAsset(listedAllNFTs, nftAsset)
        if (Object.keys(listedAllNFTs[utxo].nfts).length > 1) {
          setIsBundle(true)
        }
        setListedNFTUtxo(utxo)
        setListedData(listedAllNFTs[utxo])
        getNFTData(Object.keys(listedAllNFTs[utxo].nfts)[0])
      } else {
        getNFTData(nftAsset)
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


  const getNFTData = async (asset: string) => {
    const data = await getNFTDetailByAsset(asset);
    console.log("data", data.image, data)
    const object: CollectionType = VERIFIED_COLLECTIONS.find(item => item.policyId === data.policy_id);

    setNFTData({
      asset: data.asset,
      name: data.onchain_metadata.name,
      image: data.onchain_metadata.image,
      policyId: data.policy_id,
      description: object ? object.description : 'MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS MINERS'
    })
  }

  return (
    <PageWrapper>
      <Container paddingTop='100px'>
        {
          NFTData &&
          <FlexBox justifyContent='space-between' >
            <CustomImage
              image={getExactImageFormat(NFTData.image)}
              width='502px'
              height='502px'
              borderRadius='3px'
            />
            <FlexBox direction='column' width='default' maxWidth='670px'>
              <FlexBox direction='column' marginBottom='50px' gap='10px'>
                <H2>
                  {
                    NFTData.name
                  }
                </H2>
                <FlexBox
                  smDirection='row'
                  gap='10px'
                  alignItems='center'
                  justifyContent='start'
                >
                  {
                    <CustomText
                      text={
                        COLLECTION_DATA.hasOwnProperty(NFTData.policyId)
                          ?
                          COLLECTION_DATA[NFTData.policyId].name
                          :
                          NFTData.policyId
                      }
                      color='#F73737'
                      fontSize='21px'
                      fontWeight='400'
                      maxWidth='600px'
                      display='block'
                      className='three-dots'
                    />
                  }
                  {
                    Object.keys(COLLECTION_DATA).includes(NFTData.policyId) &&
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
                  />
                }
              </FlexBox>
              <CustomText
                text={NFTData && NFTData.description}
                maxWidth='665px'
                fontSize='16px'
                fontWeight='400'
                fontFamily='Open Sans'
                marginBottom='16px'
              />
              <FlexBox
                smDirection='row'
                gap='11px'
                justifyContent='start'
                marginBottom='48px'
                alignItems='center'
              >
                <CustomText
                  text={`Policy ID:`}
                  fontWeight='600'
                  fontFamily='Open Sans'
                  fontSize='16px'
                  className='no-wrap'
                />
                <CopyBoard addr={NFTData.policyId} maxWidth='139px' />
                <CustomText
                  text={`Asset ID:`}
                  fontWeight='600'
                  fontFamily='Open Sans'
                  fontSize='16px'
                />
                <CopyBoard addr={NFTData.asset} maxWidth='139px' />
              </FlexBox>
              <FlexBox
                bgColor='white'
                padding='15px 24px 30px 36px'
                borderRadius='3px'
                justifyContent='start'
                direction='column'
                gap='16px'
              >
                {
                  listedData &&
                  <CustomText
                    text={`₳${parseInt(listedData.amount) / 1000000}`}
                    fontSize='50px'
                    fontWeight='700'
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
                    />
                    <FlexBox direction='column' width='240px'>
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

                    <FlexBox paddingTop='18px' width='auto'>
                      <CustomImage
                        image={DROPDOWN_ICON}
                        width='20.5px'
                        height='12px'
                        cursor='pointer'
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
          />
          <FlexBox direction='column' alignItems='center' justifyContent='center'>
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

          </FlexBox>
        </FlexBox>
      </Container>
      {
        showBuyModal &&
        <BuyNFTModal
          show={showBuyModal}
          onClose={() => { setShowBuyModal(false) }}
          submitBuyNFT={submitBuyNFT}
          nftData={NFTData}
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
          nftData={NFTData}
          listedData={listedData}
        />
      }

    </PageWrapper>
  )
}

export default SpecNFT