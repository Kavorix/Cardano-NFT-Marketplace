import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { FlexBox } from '../common/FlexBox';
import CustomText from '../common/CustomText';
import CustomImage from 'components/common/CustomImage';
import { WALLETS_DATA } from 'constants/wallets.constant';
import { useEffect, useState } from 'react';
import { ARROW_DOWN_ICON, ARROW_UP_ICON } from 'constants/image.constants';
import { useWalletConnect } from 'context/WalletConnect';

interface Props {
  show: boolean;
  onClose: () => void;
}

const StyledModal = styled(Modal)`
  box-shadow: 0px 5px 50px 9px #242424;

  .modal-dialog{
    margin: auto;

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
  .btn-close{
    --bs-btn-close-bg: url('/assets/images/icons/white-close.svg')
  }
  .connect-success-content {
    box-shadow: 0px 5px 50px 9px #242424;
    background: #202020;
    border-radius: 3px;

    overflow: hidden;
    border: none;
    @media screen and (max-width: 550px) {
      height: 100%;
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  max-width: 620x;
    width: 100%;
  &.modal-body{
    max-width: 620x;
    width: 100%;
    padding-top: 16px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 50px;
    @media screen and (max-width: 768px) {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 25px;

    }
  }
`

const WalletFlexBox = styled.div`
  max-height: 230px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 7px; /* set width of scrollbar */
    height: 128px;
  }
  
  ::-webkit-scrollbar-track {
    background:none; /* set background color of track */
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #f3f3f3; /* set background color of thumb */
    border-radius: 6px; /* set border radius of thumb */
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* set background color of thumb on hover */
  }
`

const ConnectWalletModal = ({ show, onClose }: Props) => {
  const [showMore, setShowMore] = useState(true)
  const { enableWallet, myWalletAddress } = useWalletConnect();
  const handleConnectWallet = (walletName: string) => async () => {
    try {
      await enableWallet(walletName);
      onClose();
    } catch (err) {
      onClose();
    }
  };
  
  return (
    <StyledModal show={show} onHide={onClose} centered contentClassName="connect-success-content">


      <Modal.Header closeButton>

      </Modal.Header>
      <ModalBody>

        <CustomText
          text="Connect your wallet"
          fontSize='38px'
          fontWeight='700'
          fontFamily='Inconsolata'
          smFontSize='30px'
          color='white'
          smFontWeight='28px'
        />
        <CustomText
          text={`Please select you wallet. 
          If you don’t have a wallet, please select a provider to create one. `}
          fontSize='16px'
          fontWeight='400'
          maxWidth='488px'
          marginTop='16px'
          marginBottom='33px'
          color='white'
          smFontSize='14px'
          smMarginBottom='71px'
        />

        <FlexBox
          paddingTop='12px'
          paddingBottom='11px'
          paddingLeft='16px'
          paddingRight='16px'
          smPaddingLeft='10px'
          smPaddingRight='10px'
          smPaddingTop='28px'
          smPaddingBottom='28px'
          bgImage='linear-gradient(94deg, rgba(255, 255, 255, 0.75) -57.59%, rgba(255, 255, 255, 0.34) 84.48%, rgba(255, 255, 255, 0.25) 116.04%)'
          border='3px'
          gap='26px'
          smDirection='row'
          justifyContent='space-between'
          onClick={handleConnectWallet('nami')}
          cursor='pointer'
          smJustifyContent='space-between'
          alignItems='center'
          borderRadius='3px'
        >
          <FlexBox
            justifyContent='start'
            gap="26px"
            alignItems='center'
            smDirection='row'
            smJustifyContent='start'
            smGap='12px'
            width='auto'
          >
            <CustomImage
              width='36px'
              height='40px'
              image={`/assets/images/wallets/nami.svg`}
              smWidth='18px'
              smHeight='25px'
            />
            <CustomText
              text={`Nami`}
              color='white'
              fontSize='28px'
              fontWeight='700'
              fontFamily='Inconsolata'
              smFontSize='21px'
            />
          </FlexBox>
          <CustomText
            text="Recommended"
            fontSize='16px'
            fontWeight='600'
            color='#b0b9fb'
            fontFamily='Open Sans'
            smFontSize='14px'
          />

        </FlexBox>
        <FlexBox
          justifyContent='end'
          gap="8px"
          alignItems='center'
          cursor='pointer'
          marginTop='16px'
          smDirection='row'
          smJustifyContent='end'
        >
          {
            showMore ?
              <>
                <CustomText
                  cursor='pointer'
                  text={`Show More`}
                  onClick={() => setShowMore(false)}
                  fontSize='16px'
                  fontWeight='700'
                  color='white'
                />
                <CustomImage
                  image={ARROW_DOWN_ICON}
                  width='12px'
                  height='7px'
                />
              </>
              :
              <>
                <CustomText
                  cursor='pointer'
                  text={`Show Less`}
                  onClick={() => setShowMore(true)}
                  fontSize='16px'
                  fontWeight='700'
                  color='white'
                />
                <CustomImage
                  image={ARROW_UP_ICON}
                  width='12px'
                  height='7px'
                />
              </>
          }
        </FlexBox>
        {
          !showMore &&
          <WalletFlexBox>
            {
              WALLETS_DATA.map((wallet, index) => {
                return (
                  <FlexBox
                    key={index}
                    paddingTop='12px'
                    paddingBottom='11px'
                    paddingLeft='16px'
                    paddingRight='20px'
                    smPaddingLeft='10px'
                    smPaddingRight='10px'
                    smPaddingTop='10px'
                    smPaddingBottom='10px'
                    gap='26px'
                    smDirection='row'
                    justifyContent='start'
                    onClick={handleConnectWallet(wallet?.link)}
                    cursor='pointer'
                    smJustifyContent='start'
                    alignItems='center'
                    borderRadius='3px'
                    bgImage='linear-gradient(94deg, rgba(255, 255, 255, 0.75) -57.59%, rgba(255, 255, 255, 0.34) 84.48%, rgba(255, 255, 255, 0.25) 116.04%)'
                    smGap='8px'
                  >
                    <CustomImage
                      width='36px'
                      height='45px'
                      image={wallet.image}
                      smWidth='23px'
                      smHeight='24px'
                    />
                    <CustomText
                      text={wallet.text}
                      fontSize='28px'
                      fontWeight='700'
                      color='white'
                      fontFamily='Inconsolata'
                      smFontSize='21px'
                    />

                  </FlexBox>
                )
              })
            }
          </WalletFlexBox>
        }

      </ModalBody>
    </StyledModal>
  )
}

export default ConnectWalletModal