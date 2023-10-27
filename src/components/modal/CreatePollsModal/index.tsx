import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
// components
import { Modal } from 'react-bootstrap';
import CustomInput from 'components/common/CustomInput';
import CustomTextArea from 'components/common/CustomTextarea';
import { H2, H7 } from 'components/typography';
import SelectCurrencyBox from 'components/select/SelectCurrencyBox';
import CustomBorderButton from 'components/common/CustomBorderButton';
import { FlexBox } from 'components/common/FlexBox';
import CustomText from 'components/common/CustomText';
import SelectRoleBox from 'components/select/SelectRoleBox';
import CustomButton from 'components/common/CustomButton';
// image
import CustomImage from 'components/common/CustomImage';
import { PLUS_ICON } from 'constants/image.constants';
// function
import { toBase64 } from 'hooks/function';
// styles
import { device } from 'styles/Breakpoints';
import { CustomDatePicker } from 'styles/GlobalStyles';
import { CustomCheckBox, CustomFile, VoteChoiceText } from './index.styled';

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
  voteInputs: any;
  setVoteInputs: any;
}

const today = new Date();
const today_10_min_later = new Date(today);
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




const CreatePollsModal = ({ show, onClose, formData, setFormData, submit, setVoteInputs, voteInputs }: Props) => {
  const [isReview, setIsReview] = useState<boolean>(false)
  const [attachedImage, setAttachedImage] = useState('');
  const [step, setStep] = useState<number>(1)


  useEffect(() => {
    console.log("formData", formData)
  }, [formData])

  const uploadFile = async (file: Object, choice: number) => {
    // @ts-ignore
    let file_base64: string = await toBase64(file);
    // @ts-ignore
    const file_base64_array: string[] = file_base64.split('base64,');
    //console.log(file_base64_array[1]);
    const send_json = JSON.stringify({
      // @ts-ignore
      name: file.name,
      base64: file_base64_array[1]
    });

    axios
      .post('https://g8uv4l3j8i.execute-api.eu-west-2.amazonaws.com/default/uploadImage', send_json)
      .then(function (res) {
        if (res) {
          console.log(res.data.base);
          setAttachedImage(res.data.base);

          if (choice === 0) setFormData((prevFormData) => ({
            ...prevFormData,
            attachedImage: res.data.base
          }));
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };


  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <Modal.Header closeButton>
      </Modal.Header>
      <ModalBody>

        <FlexBox direction='column' gap='24px' marginBottom='41px' borderBottom='1px #cecece solid' paddingBottom='31px'>
          {
            step !== 3
              ?
              <H2>Create a poll</H2>
              :
              <H2>Review a poll</H2>
          }
          {
            step === 1 &&
            <H7>Please fill out information below.</H7>
          }
          {
            step === 2 &&
            <FlexBox direction='column'>
              <H7>Please review all information before submitting.</H7>
              <H7 color='#9e9e9e'>Please select a minimum of <b>2</b> choices for users to vote between. Maximum <b>4</b> choices.</H7>
            </FlexBox>
          }
          {
            step === 3 &&
            <H7>
              Please review all information before submitting.
            </H7>
          }

        </FlexBox>
        {
          step === 1 &&
          <FlexBox direction='column' gap="22px">
            {/*****  */}
            <FlexBox>
              <FlexBox direction='column' gap='12px' marginBottom='15px'>
                <CustomText
                  text={`Poll topic/questions `}
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
                  placeholder='Write poll topic here'
                  value={formData.topic}
                  onChange={async (e) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      topic: e.target.value
                    }));
                  }}
                />
              </FlexBox>

              <FlexBox direction='column' gap='12px' marginBottom='15px'>
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
                      const currentDate = new Date(); // Current UTC time
                      const targetDate = new Date(d); // Specific date

                      // Calculate the difference in milliseconds between the two dates
                      const timeDifference = targetDate.getTime() - currentDate.getTime();

                      // Convert milliseconds to days
                      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        endDate: d,
                        choseDate: daysDifference
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
                />
              </FlexBox>
            </FlexBox>

            <FlexBox>
              <FlexBox direction='column'>
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

                <FlexBox direction='column' gap='12px' marginBottom='15px'>
                  <CustomText
                    text={`What is your role? `}
                    fontFamily='Open Sans'
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='16px'
                    smFontWeight='600'
                  />
                  <SelectRoleBox
                    setFormData={setFormData}
                    formData={formData}
                  />
                </FlexBox>
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
              </FlexBox>

              <FlexBox>
                <FlexBox direction='column' gap='12px' marginBottom='15px'>
                  <CustomText
                    text={`Cover image: `}
                    fontFamily='Open Sans'
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='16px'
                    smFontWeight='600'
                  />
                  <CustomFile>
                    <span>{
                      formData.attachedImage ? formData.attachedImage.split("amazonaws.com/")[1] : 'Attach Image'
                    }</span>
                    <input
                      type="file"
                      //   className="d-none"
                      // @ts-ignore
                      onChange={(e) => uploadFile(e.target.files[0], 0)}
                      // onChange={(e) => setVotingImage(e.target.files[0])}
                      accept="image/*"
                    />
                  </CustomFile>
                  <CustomText
                    text={`Maximum upload file size: 2 MB`}
                    fontFamily='Open Sans'
                    fontSize='16px'
                    fontWeight='400'
                    smFontSize='16px'
                    smFontWeight='600'
                  />
                </FlexBox>

              </FlexBox>
            </FlexBox>

            <FlexBox marginTop='67px' gap='20px' justifyContent='end' smJustifyContent='end' smDirection='row' smMarginTop='52px'>

              <CustomButton
                text='Next'
                width='275px'
                height='47px'
                smWidth='150px'
                onClick={() => setStep(2)}
                disabled={!formData.topic || !formData.description || !formData.endDate || !formData.currency || !formData.attachedImage || !formData.choseDate}
              />
            </FlexBox>
          </FlexBox>
        }


        {
          step === 2 &&
          <FlexBox direction='column'>
            <FlexBox direction='column' gap='23px' alignItems='center'>
              {
                voteInputs.map((input, index) => {
                  return (
                    <FlexBox direction='column' className='mx-auto' maxWidth='540px'>
                      <CustomText
                        text={`Vote ${index + 1}:`}
                        fontFamily="Open Sans"
                        fontSize="21px"
                        fontWeight="300"
                        justifyContent='start'
                        textAlign='left'
                        color='black'
                      />
                      <CustomInput
                        placeholder='Write vote option here'
                        onChange={(e) => {
                          const newInputs = [...voteInputs];
                          newInputs[index] = e.target.value;
                          setVoteInputs(newInputs);
                        }
                        }
                        maxWidth='540px'
                        bgColor='#cecece'
                        value={voteInputs[index]}
                        maxLength={20}
                        fontSize='21px'
                        color='#767676'
                        fontWeight='400'
                        height='58px'
                        padding='16px 20px'
                      />
                    </FlexBox>
                  )
                })
              }
              <CustomImage
                image={PLUS_ICON}
                width='27px'
                height='27px'
                cursor='pointer'
                onClick={() => {
                  if (voteInputs.length < 4) {
                    setVoteInputs([...voteInputs, ""])
                  }
                }}
              />

            </FlexBox>
            <FlexBox marginTop='67px' gap='20px' justifyContent='end' smJustifyContent='end' smDirection='row' smMarginTop='52px'>
              <CustomBorderButton
                text='Back'
                onClick={() => setStep(1)}
                width='196px'
                height='47px'
              />
              <CustomButton
                text='Review'
                width='275px'
                height='47px'
                smWidth='150px'
                onClick={() => setStep(3)}
                disabled={!voteInputs.every(i => i)}
              />
            </FlexBox>
          </FlexBox>
        }

        {
          step === 3 &&
          <FlexBox alignItems='center' maxWidth='1159px' justifyContent='space-between'>
            <CustomImage
              image={attachedImage}
              width='450px'
              height='450px'
              borderRadius='4.34px'
            />
            <FlexBox direction='column' maxWidth='494px'>
              <CustomText
                text={formData.topic}
                fontSize='28px'
                smFontSize='21px'
                fontWeight='700'
                letterSpacing='-0.14px'
                marginBottom='10px'
              />
              <CustomText
                text={`Created by: Account Name`}
                fontSize='16px'
                fontWeight='400'
                smFontSize='12px'
              />
              <CustomText
                text={formData.currency}
                fontSize='16px'
                fontWeight='400'
                smFontSize='12px'
              />
              <FlexBox maxWidth='442px' className='mx-auto' direction='column'>
                <FlexBox marginTop='34px' gap="7px" justifyContent='start'>
                  <CustomText
                    text={`Ends:`}
                    fontSize='14px'
                    fontWeight='400'
                    fontFamily='Open Sans'
                  />
                  <CustomText
                    text={`12:30 | MM/DD/YYYY`}
                    fontSize='14px'
                    fontWeight='700'
                    fontFamily='Open Sans'
                    color='#f73737'
                  />


                </FlexBox>
                <FlexBox direction='column' marginTop='24px' gap="8px">
                  {
                    voteInputs.map((item, j) => {
                      return (
                        <VoteChoiceText>
                          {item}
                        </VoteChoiceText>
                      )
                    })
                  }
                </FlexBox>
              </FlexBox>
              <FlexBox marginTop='58.4px'>
                <FlexBox>
                  <CustomCheckBox type="checkbox"
                    onClick={() => {
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        agree1: !formData.agree1
                      }));
                    }}
                    name="agree1" checked={formData.agree1} />
                  <CustomText
                    text={`*`}
                    fontSize='14px'
                    fontWeight='400'
                    fontFamily='Open Sans'
                    color='#f73737'
                  />
                  <CustomText
                    text={`I agree and accept the terms and services`}
                    fontSize='14px'
                    fontWeight='400'
                    fontFamily='Open Sans'
                  />


                </FlexBox>
              </FlexBox>


              <FlexBox marginTop='67px' gap='20px' justifyContent='end' smJustifyContent='end' smDirection='row' smMarginTop='52px'>
                <CustomBorderButton
                  text='Back'
                  onClick={() => setStep(2)}
                  width='196px'
                  height='47px'
                />
                <CustomButton
                  text='Submit'
                  width='275px'
                  height='47px'
                  smWidth='150px'
                  disabled={!formData.agree1}
                  onClick={() => submit()}
                />
              </FlexBox>
            </FlexBox>


          </FlexBox>
        }
      </ModalBody>

    </StyledModal>
  )
}

export default CreatePollsModal