import { useState, useEffect, memo, useContext, useRef } from 'react';
import { useMedia } from 'react-use';
import { Link, useNavigate } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaShareSquare } from 'react-icons/fa'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenuLine } from "react-icons/ri";
import {
  NavWrapper,
  NavContainer,
  NavFlex,
  DropdownToggle,
  DropdownMenu,
  NavBrand,
  NavImage,
  NavbarLink,
  MobileWalletIcon,
  MobileProfileImage
} from './index.styled';
import { GlobalProvider } from 'App';


import ConnectWalletModal from 'components/modal/ConnectWalletModal';
import { WALLET_ICON } from 'constants/image.constants';

import { Navbar } from 'react-bootstrap';
import CustomImage from 'components/common/CustomImage';
import CustomBorderButton from 'components/common/CustomBorderButton';
import styled from 'styled-components';
import CustomLinkButton from 'components/common/CustomLinkButton';
import { FlexBox } from 'components/common/FlexBox';
import CustomText from 'components/common/CustomText';
// import ConnectSuccessModal from 'components/modal/ConnectSuccessModal';
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton';

import BRAND_IMAGE from '../../../assets/logo.svg';
import { useWalletConnect } from 'context/WalletConnect';
import { useGlobalContext } from 'context/GlobalContext';
import ConnectWalletModal2 from 'components/modal/ConnectWalletModal2';

const OffcanvasHeader = styled(Offcanvas.Header)`
  flex-direction: row-reverse;
  padding-left: 49px;
`
const OffcanvasBody = styled(Offcanvas.Body)`
  &.offcanvas-body{
    padding-left: 49px;
    &.nav-link{
      font-family: Inconsolata;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.42px;
    }
  }
`
function Navigation2() {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [connected, setConnected] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 650px)');

  // @ts-ignore
  const { myWalletAddress, disableWalletAddress } = useWalletConnect()
  const { userData, setUserData } = useGlobalContext();

  const disconnectWallet = () => {
    disableWalletAddress();
    setAlertMessage('Your wallet has been successfully logged out.');
    setShowSuccessModal(true);
  }
  // const handleCloseModal = (connected?: boolean) => {
  //   console.log("connected", connected)
  //   setShowConnectModal(false)
  //   if (connected !== undefined) {
  //     setAlertMessage(
  //       connected ? 'Your wallet is now connected' : 'Your wallet connection was unsuccessful'
  //     );
  //     setShowSuccessModal(true);
  //   }
  // };

  useEffect(() => {
    if (connected) {
      setAlertMessage("Your wallet has been successfully connected.")
      setShowSuccessModal(true)
    }
  }, [connected])

  return (
    <>
      {['sm'].map((expand) => (
        // @ts-ignore
        <NavWrapper key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <NavContainer fluid>
            <NavBrand href="/">
              <NavImage src={BRAND_IMAGE} />
            </NavBrand>
            {
              myWalletAddress ?
                <>
                  {
                    isMobile &&
                    <MobileProfileImage
                      src={userData && userData?.bomber_avatar ? userData?.bomber_avatar : userData?.avatar}
                      width="40px"
                      height="40px"
                      onClick={() => {
                        setShowDropdown(!showDropdown)
                      }}
                      // @ts-ignore
                      onMouseOver={() => {
                        setShowDropdown(true);
                      }}
                    />
                  }
                </>
                :
                <>
                  {
                    isMobile &&
                    <MobileWalletIcon
                      src={WALLET_ICON}
                      onClick={() => {
                        setShowConnectModal(true)
                      }}
                    />
                  }
                </>

            }
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <OffcanvasHeader closeButton>

              </OffcanvasHeader>
              <OffcanvasBody>
                <NavFlex>
                  <NavbarLink to="/explorer">
                    Explorer
                  </NavbarLink>
                  <NavbarLink to="/staking">
                    Staking
                  </NavbarLink>
                  <NavbarLink to="/leaderboards">
                    Leaderboards
                  </NavbarLink>

                  <Dropdown>
                    <DropdownToggle>
                      Community
                    </DropdownToggle>

                    <DropdownMenu>
                      <CustomRouterLinkButton
                        link="/community-club"
                        text="Clubs"
                        padding="0px 0px 0px 12px"
                        smFontSize='21px'
                        smFontWeight='700'
                      />
                      <CustomRouterLinkButton
                        link="/community-events"
                        text="Events"
                        padding="0px 0px 0px 12px"
                        smFontSize='21px'
                        smFontWeight='700'
                      />
                    </DropdownMenu>
                  </Dropdown>
                </NavFlex>

                {
                  !isMobile &&
                  <Form className=" d-flex align-items-center">
                    {
                      !myWalletAddress ?
                        <CustomImage
                          image={WALLET_ICON}
                          width='76px'
                          height='55px'
                          onClick={() => {
                            setShowConnectModal(true)
                          }}
                          cursor="pointer"
                        />
                        :
                        <div>
                          <CustomImage
                            image={userData && userData?.bomber_avatar ? userData?.bomber_avatar : userData?.avatar}
                            width="48px"
                            height="48px"
                            cursor='pointer'
                            borderRadius='3px'
                            onClick={() => {
                              setShowDropdown(!showDropdown)
                            }}
                            // @ts-ignore
                            onMouseOver={() => {
                              setShowDropdown(true);
                            }}
                          />
                          {
                            showDropdown && <FlexBox
                              // @ts-ignore
                              onMouseLeave={() => {
                                setShowDropdown(false);
                              }
                              }
                              bgColor='#202020' marginTop='10px' position='absolute' justifyContent='start'
                              right='28px' maxWidth='214px' height='94px' paddingTop='12px' paddingLeft='14px' gap="10px">
                              <CustomImage
                                image={userData && userData?.avatar ? userData?.avatar : userData?.avatar}
                                width='51px'
                                height='51px'
                              />
                              <div>

                                <CustomLinkButton
                                  hoverBgColor='none'
                                  text={userData && userData?.username ? userData?.username.slice(0, 10) + "..." : 'undefined'}
                                  fontSize='18px'
                                  fontWeight='700'
                                  lineHeight='100%'
                                  justifyContent='start'
                                  link="/my-profile"
                                  height='auto'
                                />
                                <CustomLinkButton
                                  hoverBgColor='none'
                                  text="Edit Profie"
                                  fontSize='12px'
                                  lineHeight='100%'
                                  justifyContent='start'
                                  link="/edit-profile"
                                />
                                <CustomText
                                  lineHeight='100%'
                                  text="Log Out"
                                  color='#8896f8'
                                  fontSize='12px'
                                  fontWeight='400'
                                  onClick={
                                    () => {
                                      disconnectWallet();
                                    }
                                  }
                                  cursor='pointer'
                                />
                              </div>
                            </FlexBox>
                          }
                        </div>
                    }
                  </Form>
                }

              </OffcanvasBody>
            </Navbar.Offcanvas>
          </NavContainer>

        </NavWrapper>
      ))}

      {
        showConnectModal && <ConnectWalletModal2
          show={showConnectModal}
          onClose={() => { setShowConnectModal(false) }}
        />
      }
      {/* {
        showSuccessModal && <ConnectSuccessModal
          show={showSuccessModal}
          onClose={() => { setShowSuccessModal(false) }}
          message={alertMessage}
        />
      } */}
    </>
  );
}

export default Navigation2;
