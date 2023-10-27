import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import CustomImage from 'components/common/CustomImage';
import { VERIFIED_ICON_IMAGE } from 'constants/image.constants';
import { device } from 'styles/Breakpoints';
import { FlexBox } from 'components/common/FlexBox';
import CustomButton from 'components/common/CustomButton';
import CustomText from 'components/common/CustomText';
import { H3, H8 } from 'components/typography';
import { getExactImageFormat } from 'hooks/function';
import { useCallback, useEffect, useState } from 'react';
import { COLLECTION_DATA } from 'constants/document';
import { useWalletConnect } from 'context/WalletConnect';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { getNFTDetailByAsset } from 'api/api';
import { useCart } from 'context/CartContext';

const StyledModal = styled(Modal)`
  .modal-dialog{
    margin: auto;
    max-width: 620px;
    width: 100%;
    
    background: transparent;
    border-radius: 16px;
    @media screen and (max-width: 550px) {
      max-width: 100%;
      height: 100vh;
    }
  }
  .modal-header{
    border-bottom: none;
  }
  .connect-success-content {
    background: #e7e7e7;
    border-radius: 3px;
    width: 100%;
    overflow: hidden;
    border: none;
    @media screen and (max-width: 550px) {
      height: 100%;
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 66px;
  padding-right: 66px;
  padding-bottom: 72px;
  @media ${device.sm} {
    padding-top: 148px;
  }
  &.modal-body{
  }
`
const ScrollFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 23px;
  max-height: 350px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px; /* set width of scrollbar */
    height: 150px;
  }
  
  &::-webkit-scrollbar-track {
    background:none; /* set background color of track */
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #9e9e9e; /* set background color of thumb */
    border-radius: 6px; /* set border radius of thumb */
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* set background color of thumb on hover */
  }
`

const RemoveButton = styled.div`
    color: #F73737;
    text-align: center;
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
        color: #a71717;
    }
`

interface Props {
    show: boolean;
    onClose: () => void;
    purchaseCarts: () => Promise<void>;
}
const PurchaseCartModal = ({ show, onClose, purchaseCarts }: Props) => {
    // const [cartData, setCartData] = useLocalStorage('cart-data', []);
    const [nftData, setNFTData] = useState([])
    const [totalPrice, setTotalPrice] = useState<number>()
    const { myWalletAddress } = useWalletConnect()
    const { cartData, addToCart, removeFromCart } = useCart()
    console.log("cartData", cartData)
    useEffect(() => {
        if (cartData.length > 0) {
            getNFTData()
        }
    }, [cartData])

    const getNFTData = useCallback(async () => {
        const nfts = [];
        let price = 0;
        for (let i = 0; i < cartData.length; i++) {
            // get detail data of one specific nft
            const response = await getNFTDetailByAsset(Object.keys(cartData[i].nfts)[0])
            price += parseInt(cartData[i].amount) / 1000000
            nfts.push({
                name: response.onchain_metadata.name,
                asset: response.asset,
                image: response.onchain_metadata.image,
                price: parseInt(cartData[i].amount) / 1000000,
                utxo: cartData[i].utxo
            })
        }
        setNFTData(nfts)
        setTotalPrice(price)
    }, [cartData])

    return (
        <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
            <Modal.Header closeButton>
            </Modal.Header>
            <ModalBody>
                <FlexBox direction='column' gap='12px' borderBottom='1px #cecece solid'
                    padding='12px 25px'
                >
                    <H3>Your cart</H3>
                    <H8>
                        Please review all information before submitting.
                    </H8>
                </FlexBox>
                <FlexBox marginTop='32px' paddingLeft='25px' paddingRight='25px' direction='column'>
                    <CustomText
                        text={`${nftData.length} items`}
                        fontSize='16px'
                        fontWeight='600'
                        fontFamily='Open Sans'
                        marginBottom='23px'
                    />
                    <ScrollFlex>
                        {
                            nftData && nftData.map((nft, index) => {
                                return (
                                    <FlexBox justifyContent='start' gap='28px' alignItems='center'
                                        key={index}
                                    >
                                        <CustomImage
                                            image={getExactImageFormat(nft.image)}
                                            width='100px'
                                            height='100px'
                                            borderRadius='2.4px'
                                        />
                                        <FlexBox justifyContent='space-between'>
                                            <FlexBox direction='column' gap='8px' maxWidth='150px'>
                                                <CustomText
                                                    text={
                                                        nft.name
                                                    }
                                                    fontWeight='700'
                                                    fontSize='21px'
                                                    maxWidth='149px'
                                                    className='three-dots'
                                                    display='block'
                                                />
                                                <FlexBox justifyContent='start' gap='10px' alignItems='center'>

                                                    <CustomText
                                                        fontSize='14px'
                                                        fontWeight='400'
                                                        color='#f73737'
                                                        maxWidth='310px'
                                                        className='three-dots'
                                                        display='block'
                                                        text={COLLECTION_DATA.hasOwnProperty(nft.asset.slice(0, 56)) ? COLLECTION_DATA[nft.asset.slice(0, 56)].name : nft.asset.slice(0, 56)}
                                                    />
                                                    {
                                                        COLLECTION_DATA.hasOwnProperty(nft.asset.slice(0, 56)) &&
                                                        <CustomImage
                                                            image={VERIFIED_ICON_IMAGE}
                                                            width='22px'
                                                            height='21px'
                                                        />
                                                    }

                                                </FlexBox>
                                            </FlexBox>
                                            <FlexBox direction='column' width='auto' gap="4px" paddingRight='10px'>
                                                <CustomText
                                                    text={`₳${nft.price}`}
                                                    color='#6073F6'
                                                    fontFamily='Inconsolata'
                                                    fontSize='21px'
                                                    fontWeight='700'
                                                    width='100%'
                                                    justifyContent='end'
                                                />
                                                <RemoveButton onClick={() => {
                                                    removeFromCart(nft)
                                                }}>
                                                    Remove
                                                </RemoveButton>
                                            </FlexBox>
                                        </FlexBox>
                                    </FlexBox>
                                )
                            })
                        }
                    </ScrollFlex>


                    <FlexBox justifyContent='space-between' marginTop='24px' alignItems='center'>
                        <CustomText
                            text={`Total Price:`}
                            fontFamily='Open Sans'
                            fontWeight='600'
                            fontSize='16px'
                        />
                        {
                            totalPrice &&
                            <CustomText
                                text={`₳ ${totalPrice}`}
                                fontFamily='Open Sans'
                                fontWeight='700'
                                fontSize='28px'
                                color='#6073F6'
                            />
                        }


                    </FlexBox>

                    <FlexBox marginTop='56px'>
                        <CustomButton
                            text='Purchase Now'
                            width='286px'
                            height='48px'
                            disabled={myWalletAddress === undefined}
                            onClick={() => {
                                purchaseCarts()
                            }}
                        />
                    </FlexBox>
                </FlexBox>
            </ModalBody>
        </StyledModal>
    )
}

export default PurchaseCartModal