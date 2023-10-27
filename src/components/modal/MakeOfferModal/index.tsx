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
import CustomInput from 'components/common/CustomInput';
import { useState } from 'react';
import { COLLECTION_DATA } from 'constants/document';
import SelectCurrencyBox from 'components/select/SelectCurrencyBox';
import SelectNFTBox from 'components/select/SelectNFTBox';
import CustomBorderButton from 'components/common/CustomBorderButton';

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

const Radio = styled.input`
    border: 1px solid #6073F6;
    width: 24px;
    height: 24px;
    
`

interface Props {
    show: boolean;
    onClose: () => void;
    nftData: NFTDataProps;
    listedData: ListedData;
    submitOffer: (price: number, policyId: string, asset: string) => Promise<void>;
}
const MakeOfferModal = ({ show, onClose, nftData, listedData, submitOffer }: Props) => {
    const [inputPrice, setInputPrice] = useState<number>(3)
    const [step, setStep] = useState<number>(1)
    const [formData, setFormData] = useState({
        currency: 'ADA',
        selectedNFTs: []
    })
    const [offerOption, setOfferOption] = useState<number>(0);
    const handleOfferTypeChange = (e) => {
        setOfferOption(Number(e.target.value));
    };
    return (
        <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
            <Modal.Header closeButton>
            </Modal.Header>
            <ModalBody>
                <FlexBox direction='column' gap='12px' borderBottom='1px #cecece solid'
                    padding='12px 25px'
                >
                    <H3>Make an offer</H3>
                    <H8>
                        Please review all information before submitting.
                    </H8>
                </FlexBox>
                <FlexBox marginTop='32px' paddingLeft='25px' paddingRight='25px' direction='column'>
                    {
                        step === 2 &&
                        <CustomText
                            text={`Item`}
                            fontFamily='Open Sans'
                            fontWeight='600'
                            fontSize='16px'
                            marginBottom='23px'
                        />
                    }
                    <FlexBox justifyContent='start' gap='28px' alignItems='center'>
                        <CustomImage
                            image={
                                nftData && getExactImageFormat(nftData.image)}
                            width='100px'
                            height='100px'
                            borderRadius='2.4px'
                        />
                        <FlexBox direction='column' gap='8px'>
                            <CustomText
                                text={
                                    nftData && nftData.name
                                }
                                fontWeight='700'
                                fontSize='21px'
                                maxWidth='250px'
                                display='block'
                                className='three-dots'
                            />
                            <FlexBox justifyContent='start' gap='10px' alignItems='center'>

                                <CustomText
                                    fontSize='14px'
                                    fontWeight='400'
                                    color='#f73737'
                                    maxWidth='250px'
                                    className='three-dots'
                                    display='block'
                                    text={COLLECTION_DATA.hasOwnProperty(nftData.asset.slice(0, 56)) ? COLLECTION_DATA[nftData.asset.slice(0, 56)].name : nftData.asset.slice(0, 56)}
                                />
                                {
                                    COLLECTION_DATA.hasOwnProperty(nftData.asset.slice(0, 56)) &&
                                    <CustomImage
                                        image={VERIFIED_ICON_IMAGE}
                                        width='22px'
                                        height='21px'
                                    />
                                }
                            </FlexBox>
                            <CustomText
                                text={`Owned by: ${listedData && listedData.seller ? listedData.seller : ''}`}
                                fontWeight='400'
                                fontSize='14px'
                                maxWidth='250px'
                                display='block'
                                className='three-dots'
                            />
                        </FlexBox>
                    </FlexBox>
                    {
                        step === 1 &&
                        <>
                            <FlexBox marginTop='36px' smDirection='row' gap='12px'>
                                <Radio
                                    type="radio"
                                    name="offerType"
                                    value={0}
                                    checked={offerOption === 0}
                                    onChange={handleOfferTypeChange}
                                />
                                <FlexBox direction='column' gap="12px" className={
                                    offerOption !== 0 && 'disabled'
                                }>
                                    <CustomText
                                        text={`Select Currency`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                    />
                                    <SelectCurrencyBox
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                    <CustomText
                                        text={`Offer Amount`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                    />
                                    <CustomInput
                                        placeholder='Enter offer price'
                                        value={inputPrice}
                                        type='number'
                                        min={3}
                                        onChange={(e) => {
                                            setInputPrice(parseFloat(e.target.value));
                                        }}
                                    />
                                </FlexBox>
                            </FlexBox>
                            <FlexBox marginTop='12px' smDirection='row' gap='12px'>
                                <Radio
                                    type="radio"
                                    name="offerType"
                                    value={1}
                                    checked={offerOption === 1}
                                    onChange={handleOfferTypeChange}
                                />
                                <FlexBox
                                    direction='column' gap="12px" className={
                                        offerOption !== 1 && 'disabled'
                                    }
                                >
                                    <CustomText
                                        text={`Offer NFT`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                    />
                                    <SelectNFTBox
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                </FlexBox>
                            </FlexBox>
                            <FlexBox marginTop='56px'>
                                <CustomButton
                                    text='Next'
                                    width='286px'
                                    height='48px'
                                    // disabled={!inputPrice || inputPrice < 3 || !nftData}
                                    onClick={() => {
                                        setStep(2)
                                    }}
                                />
                            </FlexBox>
                        </>
                    }
                    {
                        step === 2 &&
                        <>
                            <FlexBox marginTop='32.5px' paddingTop='32.5px' paddingBottom='30px' direction='column' borderTop='#cecece 1px solid' gap="12px">
                                <FlexBox justifyContent='start' alignItems='center'>
                                    <CustomText
                                        text={`Offer Type:`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                    />
                                    &nbsp;
                                    <CustomText
                                        text={` Currency(₳)`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                        color='#6073F6'
                                    />
                                </FlexBox>
                                <FlexBox justifyContent='space-between' alignItems='center'>
                                    <CustomText
                                        text={`Offer Amount:`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                    />
                                    <CustomText
                                        text={`₳${inputPrice ? inputPrice : 0}`}
                                        fontFamily='Open Sans'
                                        fontWeight='600'
                                        fontSize='16px'
                                        color='#6073F6'
                                    />
                                </FlexBox>
                            </FlexBox>

                            <FlexBox justifyContent='space-between' alignItems='center' gap="12px" paddingTop='12px'
                                borderTop='#cecece 1px solid'
                            >
                                <CustomText
                                    text={`Total Cost:`}
                                    fontFamily='Open Sans'
                                    fontWeight='600'
                                    fontSize='16px'
                                />
                                <CustomText
                                    text={`₳${inputPrice ? inputPrice : 0}`}
                                    fontFamily='Open Sans'
                                    fontWeight='700'
                                    fontSize='28px'
                                    color='#6073F6'
                                />
                            </FlexBox>
                            <FlexBox marginTop='56px' justifyContent='space-between' smJustifyContent='space-between'>
                                <CustomBorderButton
                                    text="Back"
                                    onClick={() => {
                                        setStep(1)
                                    }}
                                />
                                <CustomButton
                                    text='Make Offer'
                                    width='268px'
                                    height='48px'
                                    disabled={!inputPrice || inputPrice < 3 || !nftData}
                                    onClick={() => {
                                        submitOffer(inputPrice, nftData.asset.slice(0, 56), nftData.asset.slice(56))
                                    }}
                                />
                            </FlexBox>
                        </>
                    }

                </FlexBox>
            </ModalBody>
        </StyledModal>
    )
}

export default MakeOfferModal