import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import CustomImage from 'components/common/CustomImage';
import { LINK_ICON, SUCCESS_ICON } from 'constants/image.constants';
import CustomBorderButton from 'components/common/CustomBorderButton';
import CustomLinkButton from 'components/common/CustomLinkButton';
import { device } from 'styles/Breakpoints';
import { FlexBox } from 'components/common/FlexBox';
import CustomButton from 'components/common/CustomButton';
import CustomText from 'components/common/CustomText';
import { outputEndTimeByTimestamp } from 'hooks/function';


const StyledModal = styled(Modal)`
  .modal-dialog{
    margin: auto;
    max-width: 1351px;
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
  padding-top: 80px;
  padding-bottom: 70px;
  @media ${device.sm} {
  }
  &.modal-body{

  }
`


interface Props {
  show: boolean;
  onClose: () => void;
  pollDetailData?: any;
}
const PollDetailModal = ({ show, onClose, pollDetailData }: Props) => {
  console.log("pollDetailData", pollDetailData)
  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <Modal.Header closeButton>
      </Modal.Header>
      <ModalBody>
        <FlexBox
          smDirection='row'
         
          smJustifyContent='center'
          smAlignItems='center'
          maxWidth='1031px'
          justifyContent='space-between'
        >
          <FlexBox direction='column' maxWidth='393px'>
            <CustomImage
              width='393px'
              height='393px'
              image={pollDetailData && pollDetailData.image}
              borderRadius='3px'
            />
            <FlexBox marginTop='16px' alignItems='center'>
              <FlexBox padding='0px 16px' borderRight='3px solid #cecece' width='default' gap='15px' direction='column' alignItems='center'>
                <CustomText
                  text="Total Participants"
                  fontSize='21px'
                  fontWeight='400'
                  fontFamily='Open Sans'
                />
                <CustomText
                  text="36"
                  fontSize='28px'
                  fontWeight='700'
                />
              </FlexBox>

              <FlexBox padding='0px 16px' width='default' direction='column' alignItems='center' gap='15px'>
                <CustomText
                  text="Currency"
                  fontSize='21px'
                  fontWeight='400'
                  fontFamily='Open Sans'
                />
                <CustomText
                  text="₳"
                  fontSize='28px'
                  fontWeight='700'
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>

          {/********  right part */}
          <FlexBox direction='column' width='539px'>
            {/** title, description, created by */}
            <FlexBox direction='column'>
              <CustomText
                text={pollDetailData && pollDetailData.name && pollDetailData.name}
                fontSize='50px'
                smFontSize='21px'
                fontWeight='700'
                letterSpacing='-0.14px'
                marginBottom='22px'
              />
              <FlexBox direction='column' marginBottom='10px'>

                <FlexBox smDirection='row' justifyContent='start'>
                  <CustomText
                    text={`Created by:&nbsp;`}
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='12px'
                    display='block'
                    className='text-nowrap'
                  />
                  <CustomText
                    text={`${pollDetailData && pollDetailData.creator}`}
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='12px'
                    display='block'
                    maxWidth='278px'
                  />
                </FlexBox>
                <FlexBox smDirection='row' justifyContent='start' gap="15px">
                  <CustomText
                    text={`${pollDetailData && pollDetailData.name}`}
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='12px'
                    display='block'
                    className='text-nowrap'
                  />
                  <CustomText
                    text={`|`}
                    fontSize='21px'
                    fontWeight='700'
                    smFontSize='12px'
                    display='block'
                    className='text-nowrap'
                  />
                  <CustomText
                    text={`${pollDetailData && pollDetailData.role}`}
                    fontSize='21px'
                    fontWeight='400'
                    smFontSize='12px'
                    display='block'
                    maxWidth='278px'
                  />
                </FlexBox>
                <FlexBox>

                </FlexBox>

                <CustomButton
                  text='Vote'
                  width='539px'
                  height='47px'
                  marginTop='37px'
                />

              </FlexBox>
            </FlexBox>

          </FlexBox>

        </FlexBox>
      </ModalBody>
    </StyledModal>
  )
}

export default PollDetailModal