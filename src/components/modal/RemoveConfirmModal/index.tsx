import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import CustomImage from 'components/common/CustomImage';
import { LINK_ICON, SUCCESS_ICON, VERIFIED_ICON_IMAGE } from 'constants/image.constants';
import CustomBorderButton from 'components/common/CustomBorderButton';
import CustomLinkButton from 'components/common/CustomLinkButton';
import { device } from 'styles/Breakpoints';
import { FlexBox } from 'components/common/FlexBox';
import CustomButton from 'components/common/CustomButton';
import CustomText from 'components/common/CustomText';
import { H3, H8 } from 'components/typography';
import { getExactImageFormat } from 'hooks/function';
import CustomInput from 'components/common/CustomInput';
import { useState } from 'react';
import { listNFTByAddress } from 'api/marketplace';
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
  padding-top: 142px;
  @media ${device.sm} {
    padding-top: 148px;
  }
  &.modal-body{

  }
`



interface Props {
  show: boolean;
  onClose: () => void;
  confirmText: string;
  confirm: () => void;
}
const RemoveConfirmModal = ({ show, onClose, confirmText, confirm }: Props) => {
  const [inputPrice, setInputPrice] = useState<number>(0)
  const { myWalletAddress, lucid } = useWalletConnect();
  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">
      <Modal.Header closeButton>
      </Modal.Header>
      <ModalBody>
        <CustomText
          text={confirmText}
          fontSize='28px'
          fontWeight='700'
          textAlign='center'
        />
        <FlexBox direction='column' alignItems='center' gap="16px" marginTop='87px'>
          <CustomBorderButton
            text='Confirm'
            width='286px'
            onClick={() => {
              confirm()
            }}
          />
          <CustomButton
            text='Cancel'
            width='286px'
            height='48px'
            onClick={onClose}
          />
        </FlexBox>

      </ModalBody>
    </StyledModal>
  )
}

export default RemoveConfirmModal