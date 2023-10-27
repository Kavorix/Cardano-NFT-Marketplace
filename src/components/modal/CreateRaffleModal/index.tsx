import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import CustomInput from 'components/common/CustomInput';
import CustomTextArea from 'components/common/CustomTextarea';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { H2, H7 } from 'components/typography';
import SelectCurrencyBox from 'components/select/SelectCurrencyBox';
import SelectNFTBox from 'components/select/SelectNFTBox';



import { getExactImageFormat, outputEndTimeRemaining } from 'hooks/function';
import CustomBorderButton from 'components/common/CustomBorderButton';
import CustomImage from 'components/common/CustomImage';
import { SLICK_LEFT_ICON, SLICK_RIGHT_ICON } from 'constants/image.constants';
import { floor } from 'lodash';
import { device } from 'styles/Breakpoints';
import { FlexBox } from 'components/common/FlexBox';
import CustomText from 'components/common/CustomText';
import CustomButton from 'components/common/CustomButton';
import { AcceptText, CreateRaffleTable, CreateRaffleTableRow, CreateRaffleTableSubject, CreateRaffleTableValue } from './index.styled';
import { CustomCheckBox } from '../CreatePollsModal/index.styled';
import { CustomDatePicker } from 'styles/GlobalStyles';


const StyledModal = styled(Modal)`
  box-shadow: 0px 5px 50px 9px #242424;
  .modal-dialog{
    margin: auto;
    max-width: 1351px;
    width: 100%;
    
    background: transparent;
    border-radius: 16px;
    
    @media screen and (max-width: 550px) {
      max-width: 100%;
    }
  }
  .modal-header{
    border-bottom: none;
    align-items: start;
    &.btn-close{
        font-size: 40px !important;
    }

  }
  .connect-success-content {
    background: #E7E7E7;
    border-radius: 3px;
    width: 100%;
    overflow: hidden;
    border: none;
    
    @media screen and (max-width: 550px) {
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  padding: 18px 96px 120px 96px; 
  @media ${device.sm} {
    padding: 18px 31px 54px 31px; 
  }
  &.modal-body{
  }
  .small-images{
    display: flex;
    gap: 10px;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    img{
      width: 73px;
      height: 73px;
      border-radius: 10px;
        &.active{
          width: 90px;
          height: 90px;
        }
    }
    @media ${device.sm} {
      img{
        width: 35px;
        height: 35px;
        &.active{
          width: 45px;
          height: 45px;
        }
      }
    }
  }
`

interface Props {
  show: boolean;
  onClose: () => void;
  formData?: any;
  setFormData?: any;
  submit: any;
}

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




const CreateRaffleModal = ({ show, onClose, formData, setFormData, submit }: Props) => {
  const [isReview, setIsReview] = useState<boolean>(false)
  const [activeNFT, setActiveNFT] = useState(0);

  useEffect(() => {
    console.log("formData", formData)
  }, [formData])


  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <Modal.Header closeButton>
      </Modal.Header>
      <ModalBody>

        <FlexBox direction='column' gap='24px' marginBottom='41px' borderBottom='1px #cecece solid' paddingBottom='31px'>
          {
            !isReview
              ?
              <H2>Create a raffle</H2>
              :
              <H2>Review a raffle</H2>
          }
          {
            !isReview
              ?
              <H7>Please fill out information below.</H7>
              :
              <H7>Please review all information before submitting.</H7>
          }
        </FlexBox>
        {
          !isReview &&
          <FlexBox direction='column' gap="22px">
            {/*****  */}
            <FlexBox>
              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`Raffle name: `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <CustomInput
                  maxWidth='540px'
                  height='58px'
                  bgColor='#CECECE'
                  placeholder='Write raffle name here'
                  value={formData.title}
                  onChange={async (e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      title: e.target.value
                    }));
                  }}
                />
              </FlexBox>

              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`NFT's `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <SelectNFTBox
                  setFormData={setFormData}
                  formData={formData}
                />
              </FlexBox>
            </FlexBox>

            <FlexBox>
              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`Description: `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <CustomTextArea
                  maxWidth='540px'
                  height='116px'
                  placeholder='Write raffle description here'
                  value={formData.description}
                  onChange={(e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      description: e.target.value
                    }));
                  }}
                />
              </FlexBox>

              <FlexBox>
                <FlexBox direction='column' gap='12px' marginBottom='15px'>
                  <CustomText
                    text={`Minimum tickets: `}
                    fontFamily='Open Sans'
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='16px'
                    smFontWeight='600'
                  />
                  <CustomInput
                    maxWidth='235px'
                    height='58px'
                    bgColor='#CECECE'
                    type='number'
                    placeholder='Select minimum tickets'
                    value={formData.minTicket}
                    onChange={(e) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        minTicket: e.target.value
                      }));
                    }}
                  />
                </FlexBox>
                <FlexBox direction='column' gap='12px' marginBottom='15px'>
                  <CustomText
                    text={`Maximum tickets: `}
                    fontFamily='Open Sans'
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='16px'
                    smFontWeight='600'
                  />
                  <CustomInput
                    maxWidth='235px'
                    height='58px'
                    type='number'
                    bgColor='#CECECE'
                    placeholder='Select maximum tickets'
                    value={formData.maxTicket}
                    onChange={(e) => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        maxTicket: e.target.value
                      }));
                    }}
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox>
              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`Currency `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <SelectCurrencyBox
                  setFormData={setFormData}
                  formData={formData}
                />
              </FlexBox>
              <FlexBox justifyContent='start' direction='column' marginBottom='15px' gap='12px'>
                <CustomText
                  text={`End Date: `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <CustomDatePicker
                  selected={formData.endDate}
                  onChange={(d: Date) => {
                    if (d > today) {
                      let timeRemainingText = outputEndTimeRemaining(d);
                      console.log("timeRemainingText", timeRemainingText)
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        endTimeRemaining: timeRemainingText,
                        endDate: d
                      }));
                    }

                  }}
                  showTimeSelect
                  timeFormat="p"
                  timeIntervals={15}
                  dateFormat="Pp"
                  showTimeInput
                  minDate={today_12_hours_later}
                  maxDate={endTime}
                  style={{
                    color: 'red'
                  }}
                />
              </FlexBox>
            </FlexBox>

            <FlexBox>
              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`Price: `}
                  fontFamily='Open Sans'
                  fontSize='21px'
                  fontWeight='400'
                  smFontSize='16px'
                  smFontWeight='600'
                />
                <CustomInput
                  maxWidth='235px'
                  height='58px'
                  bgColor='#CECECE'
                  placeholder='Select price per ticket'
                  value={formData.price}
                  type='number'
                  onChange={(e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      price: e.target.value
                    }));
                  }}
                />
              </FlexBox>
            </FlexBox>

            <FlexBox justifyContent='end'>
              <CustomButton
                text={`Review`}
                width='275px'
                height='47px'
                disabled={!formData.title || !formData.description || !formData.currency || !formData.price || !formData.minTicket || !formData.endDate || !formData.endTimeRemaining || formData.selectedNFTs.length === 0 || formData.minTicket > formData.maxTicket
                }
                onClick={() => setIsReview(true)}
              />
            </FlexBox>

          </FlexBox>
        }
        {
          isReview &&
          <FlexBox alignItems='center' maxWidth='1159px' justifyContent='space-between'>
            {/** image slicker*/}
            <FlexBox maxWidth='494px' direction='column'>
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
                  image={formData.selectedNFTs && formData.selectedNFTs.length > 0 &&
                    getExactImageFormat(formData.selectedNFTs[activeNFT].image)
                  }
                  width='368px'
                  height='368px'
                  smHeight='203px'
                  smWidth='203px'
                  borderRadius='3px'
                />
                <CustomImage
                  image={SLICK_RIGHT_ICON}
                  width='18.6px'
                  height='37.8px'
                  smWidth='10px'
                  smHeight='18.6px'
                  cursor='pointer'
                  onClick={() => {
                    if (activeNFT < formData.selectedNFTs.length - 1) setActiveNFT(activeNFT => activeNFT + 1)
                  }}
                />
              </FlexBox>
              <div className='small-images'>
                {
                  formData.selectedNFTs && formData.selectedNFTs.length > 0 && formData.selectedNFTs.slice(floor(activeNFT / 5) * 5, floor(activeNFT / 5) * 5 + 5).map((item: any, j: number) => {
                    return (
                      <LazyLoadImage
                        src={
                          getExactImageFormat(item.image)
                        }

                        key={j}
                        alt={`img-slick-nft` + j}
                        className={(j + floor(activeNFT / 5) * 5) === activeNFT && 'active'}
                        onClick={() => {
                          setActiveNFT(j + floor(activeNFT / 5) * 5)
                        }}
                        style={{
                          'cursor': 'pointer'
                        }}
                      />
                    )
                  })
                }
              </div>

            </FlexBox>
            <FlexBox direction='column' maxWidth='464px'>
              {/** title, description, created by */}
              <FlexBox direction='column' gap="36px" smGap='13px'>
                <FlexBox direction='column' gap='10px' smGap='5px'>
                  <CustomText
                    text={formData.title}
                    fontSize='28px'
                    smFontSize='21px'
                    fontWeight='700'
                    letterSpacing='-0.14px'
                  />
                  <CustomText
                    text={`Created by: Account Name`}
                    fontSize='16px'
                    fontWeight='400'
                    smFontSize='12px'
                  />
                </FlexBox>
                <CustomText
                  text={`Doggo ipsum waggy wags doge big ol shoober extremely cuuuuuute very good spot long woofer heckin, b  tho t  frighten floofs.`}
                  fontWeight='400'
                  fontSize='14px'
                  maxWidth='462px'
                  smFontSize='12px'
                  fontFamily='Open Sans'
                />
              </FlexBox>

              <FlexBox direction='column' marginTop='38px' smMarginTop='15px'>
                {/**** table */}
                <CreateRaffleTable>
                  <CreateRaffleTableRow>
                    <CreateRaffleTableSubject>
                      Ticket Price:
                    </CreateRaffleTableSubject>

                    <CreateRaffleTableValue>
                      {`₳` + formData.price}
                    </CreateRaffleTableValue>
                  </CreateRaffleTableRow>

                  <CreateRaffleTableRow>
                    <CreateRaffleTableSubject>
                      Min. Tickets:
                    </CreateRaffleTableSubject>
                    <CreateRaffleTableValue>
                      {formData.minTicket}
                    </CreateRaffleTableValue>
                  </CreateRaffleTableRow>

                  <CreateRaffleTableRow>
                    <CreateRaffleTableSubject>
                      Max. Tickets:
                    </CreateRaffleTableSubject>

                    <CreateRaffleTableValue>
                      {formData.maxTicket}
                    </CreateRaffleTableValue>
                  </CreateRaffleTableRow>

                  <CreateRaffleTableRow>
                    <CreateRaffleTableSubject>
                      Ends:
                    </CreateRaffleTableSubject>
                    <CreateRaffleTableValue className='red'>
                      {formData.endTimeRemaining}
                    </CreateRaffleTableValue>

                  </CreateRaffleTableRow>

                </CreateRaffleTable>

              </FlexBox>

              <FlexBox direction='column' marginTop='48px' maxWidth='371px' className='mx-auto' gap='25px'>

                <FlexBox gap="6px" justifyContent='start'>
                  <CustomCheckBox type="checkbox" onClick={() => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      agree1: !formData.agree1
                    }));
                  }}
                    name="agree1" checked={formData.agree1} />
                  <AcceptText>
                    <b>*</b>I agree and accept the terms and services
                  </AcceptText>
                </FlexBox>
                <FlexBox gap="6px" justifyContent='start'>
                  <CustomCheckBox type="checkbox" onClick={() => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      agree2: !formData.agree2
                    }));
                  }}
                    name="agree2" checked={formData.agree2} />
                  <AcceptText>
                    <b>*</b>I agree and accept there is an Initiation Fee of ₳2 + 3% from the Raffle Ticket Pool
                  </AcceptText>
                </FlexBox>
              </FlexBox>
              {/** submit buttons */}
              <FlexBox marginTop='67px' gap='20px' justifyContent='start' smJustifyContent='end' smDirection='row' smMarginTop='52px'>
                <CustomBorderButton
                  text='Back'
                  onClick={() => setIsReview(false)}
                  width='196px'
                  height='47px'
                />
                <CustomButton
                  text='Submit'
                  width='275px'
                  height='47px'
                  smWidth='150px'
                  onClick={() => submit()}
                  disabled={!formData.agree1 || !formData.agree2}
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>
        }
      </ModalBody>

    </StyledModal>
  )
}

export default CreateRaffleModal