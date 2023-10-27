import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import CustomImage from 'components/common/CustomImage';
import { LINK_ICON, SUCCESS_ICON, VERIFIED_ICON_IMAGE } from 'constants/image.constants';
import { device } from 'styles/Breakpoints';
import { FlexBox } from 'components/common/FlexBox';
import CustomButton from 'components/common/CustomButton';
import CustomText from 'components/common/CustomText';
import { H3, H8 } from 'components/typography';
import { getExactImageFormat } from 'hooks/function';
import CustomInput from 'components/common/CustomInput';
import { useState } from 'react';
import { useWalletConnect } from 'context/WalletConnect';
import { COLLECTION_DATA } from 'constants/document';


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

interface Props {
  show: boolean;
  onClose: () => void;
  activeEditData: any;
  editNFT?: (price: number, assets: string[], utxoValue) => Promise<void>;
}
const EditListingModal = ({ show, onClose, activeEditData, editNFT }: Props) => {
  console.log("activeEditData", activeEditData)
  const [inputPrice, setInputPrice] = useState<number>(
    parseInt(activeEditData.data.amount) / 1000000
  )
  const [feeAmount, setFeeAmount] = useState<number>(1);
  const { myWalletAddress, lucid } = useWalletConnect();
  return (

    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">


      <Modal.Header closeButton>

      </Modal.Header>
      <ModalBody>
        <FlexBox direction='column' gap='12px' borderBottom='1px #cecece solid'
          padding='12px 25px'
        >
          <H3>Sell NFT</H3>
          <H8>
            Please review all information before submitting.
          </H8>
        </FlexBox>
        <FlexBox marginTop='32px' paddingLeft='25px' paddingRight='25px' direction='column'>
          <FlexBox justifyContent='start' gap='28px' alignItems='center'>
            <CustomImage
              image={activeEditData && getExactImageFormat(activeEditData.assets[0].image)}
              width='100px'
              height='100px'
              borderRadius='2.4px'
            />
            <FlexBox direction='column' gap='8px'>
              <CustomText
                text={activeEditData && activeEditData.assets[0].name}
                fontWeight='700'
                fontSize='21px'
              />
              <FlexBox justifyContent='start' gap='10px' alignItems='center'>

                <CustomText
                  fontSize='14px'
                  fontWeight='400'
                  color='#f73737'
                  maxWidth='310px'
                  className='three-dots'
                  display='block'
                  text={COLLECTION_DATA.hasOwnProperty(activeEditData.assets[0].asset.slice(0, 56)) ? COLLECTION_DATA[activeEditData.assets[0].asset.slice(0, 56)].name : activeEditData.assets[0].asset.slice(0, 56)}
                />
                {
                  COLLECTION_DATA.hasOwnProperty(activeEditData.assets[0].asset.slice(0, 56)) &&
                  <CustomImage
                    image={VERIFIED_ICON_IMAGE}
                    width='22px'
                    height='21px'
                  />
                }
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox direction='column' gap="12px" marginTop='12px'>
            <CustomText
              text={`Price`}
              fontFamily='Open Sans'
              fontWeight='600'
              fontSize='16px'
            />


            <CustomInput
              placeholder='Enter listing price'
              value={inputPrice}
              type='number'
              min={3}
              onChange={(e) => {
                setInputPrice(parseFloat(e.target.value));
              }}
            />
          </FlexBox>
          <FlexBox justifyContent='space-between' marginTop='24px'>
            <CustomText
              text={`Service Fee (1.99%)`}
              fontFamily='Open Sans'
              fontWeight='600'
              fontSize='16px'
            />
           
            <CustomText
              text={`₳ ${inputPrice ? feeAmount.toFixed(2) : 0}`}
              fontFamily='Open Sans'
              fontWeight='600'
              fontSize='16px'
              color='#9e9e9e'
            />
          </FlexBox>
          <FlexBox justifyContent='space-between' marginTop='24px'>
            <CustomText
              text={`Total Earnings:`}
              fontFamily='Open Sans'
              fontWeight='600'
              fontSize='16px'
            />
            <CustomText
              text={`~₳${inputPrice ? (inputPrice - feeAmount).toFixed(2) : 0}`}
              fontFamily='Open Sans'
              fontWeight='700'
              fontSize='28px'
              color='#6073F6'
            />
          </FlexBox>

          <FlexBox marginTop='56px'>
            <CustomButton
              text='Submit Listing'
              width='286px'
              height='48px'
              disabled={!inputPrice || inputPrice < 3 || !activeEditData || myWalletAddress === undefined}
              onClick={() => {
                editNFT(inputPrice, activeEditData.assets.map(item => item.asset), activeEditData.data.utxo)
              }}
            />
          </FlexBox>
        </FlexBox>
      </ModalBody>
    </StyledModal>
  )
}

export default EditListingModal