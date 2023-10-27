import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { device } from 'styles/Breakpoints';

import axios from 'axios';
import { H2 } from 'components/typography';
import { FlexBox } from 'components/common/FlexBox';
import CustomImage from 'components/common/CustomImage';
import { useGlobalContext } from 'context/GlobalContext';
import CustomInput from 'components/common/CustomInput';
import CustomButton from 'components/common/CustomButton';
import { useWalletConnect } from 'context/WalletConnect';
import { infoAlert } from 'hooks/alert';
import { update } from 'lodash';
import { updateUserProfile } from 'api/api';
import { CAMERA_ICON } from 'constants/image.constants';
import { useState } from 'react';
import CustomTextArea from 'components/common/CustomTextarea';


const ConnectWalletModalStyle = styled(Modal)`
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
  .connect-wallet-modal {
    background: #202020;
    border-radius: 3px;
    width: 100%;
    overflow: hidden;
    border: none;
    @media screen and (max-width: 550px) {
        height: 100vh;
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  padding: 18px 96px 120px 96px; 
  @media ${device.sm} {
    /* padding: 18px 31px 54px 31px;  */
  }
  &.modal-body{
  }
`

const EditProfileButton = styled.div`
  position: absolute;
  border-radius: 3px;
  display: inline-flex;
  padding: 3px 6px;
  bottom: 0px;
  margin-bottom: 16px;
  justify-content: center;
  margin-left: 100px;
  gap: 6px;
  cursor: pointer;

  div{
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    strong{
      color: #F73737;
    }
  }
  

`

interface Props {
  show: boolean;
  onClose: () => void;
}



const ConnectWalletModal = ({ show, onClose }: Props) => {
  const [showSelectNFTModal, setShowSelectNFTModal] = useState<boolean>(false)
  const { userData, setUserData } = useGlobalContext()
  const { myWalletAddress } = useWalletConnect()

  // update user table data
  const updateUserData = async () => {
    const reqData = {
      id: myWalletAddress,
      username: userData.username,
      user_location: userData.user_location,
      user_bio: userData.user_bio
    };
    try {
      const response = await updateUserProfile(reqData);
      console.log("response", response)

      return response;
    } catch (err) {
      console.log("err", err)
    }
  }


  return (
    <ConnectWalletModalStyle show={show} onHide={onClose} centered contentClassName="connect-wallet-modal">

      <Modal.Header closeButton>
      </Modal.Header>
      <ModalBody>
        <H2>Edit your profile</H2>
        <FlexBox marginTop='76px'>
          <FlexBox direction='column' position='relative'>
            <CustomImage
              width='330px'
              height='330px'
              image={userData && userData.avatar && userData.avatar}
              borderRadius='3px'
            />
            <EditProfileButton onClick={() => {
              setShowSelectNFTModal(true)
            }}>
              <CustomImage
                image={CAMERA_ICON}
                width='23.23px'
                height='20.5px'
              />
              <div>Edit Image<strong>*</strong></div>
            </EditProfileButton>
          </FlexBox>
          
        </FlexBox>
      </ModalBody>

    </ConnectWalletModalStyle>
  )
}

export default ConnectWalletModal