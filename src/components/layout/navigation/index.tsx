import { useState, useEffect, useContext } from 'react';
import { useMedia } from 'react-use';
import { Navbar, Form, Offcanvas, Dropdown, NavbarOffcanvas } from 'react-bootstrap';
import styled from 'styled-components';

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


import { CART_ICON, WALLET_ICON } from 'constants/image.constants';
import CustomImage from 'components/common/CustomImage';
import { FlexBox } from 'components/common/FlexBox';
import CustomText from 'components/common/CustomText';
// import ConnectSuccessModal from 'components/modal/ConnectSuccessModal';
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton';
import BRAND_IMAGE from '../../../assets/logo.svg';
import BRAND_MOBILE_IMAGE from '../../../assets/logo_mobile.svg';
import { useWalletConnect } from 'context/WalletConnect';
import { useGlobalContext } from 'context/GlobalContext';
import CustomSearchInput from 'components/common/CustomSearchInput';
import EditProfileModal from 'components/modal/EditProfileModal';
import CustomLinkButton from 'components/common/CustomLinkButton';
import ConnectWalletModal2 from 'components/modal/ConnectWalletModal2';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { buyCart } from 'api/marketplace/buyCart';
import PurchaseCartModal from 'components/modal/PurchaseCartModal';
import SuccessModal from 'components/modal/SuccessModal';

const OffcanvasHeader = styled(Offcanvas.Header)`
  flex-direction: row-reverse;
  padding-left: 49px;
  background: #202020;
  width: 100vw;
  .btn-close{
    --bs-btn-close-bg: url('/assets/images/icons/white-close.svg')
  }
`
const OffcanvasBody = styled(Offcanvas.Body)`
  background: #202020;
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

function Navigation() {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [connected, setConnected] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  const [showSuccessPurchaseModal, setShowSuccessPurchaseModal] = useState(false)
  const isMobile = useMedia('(max-width: 650px)');

  const [cartData, setCartData] = useLocalStorage('cart-data', []);
  console.log("cartData")

  const { myWalletAddress, disableWalletAddress } = useWalletConnect()
  const { userData } = useGlobalContext();
  useEffect(() => {
    // clearCartData()
  }, [])

  const clearCartData = () => {
    // Clear the state and remove data from local storage
    setCartData([]);
    localStorage.removeItem('cart-data');
  };

  const purchaseCarts = async () => {
    const utxoArray = cartData.map(item => item.utxo);
    const result = await buyCart(
      myWalletAddress,
      utxoArray
    );
    if (result) {
      clearCartData()
      setShowPurchaseModal(false)
      setShowSuccessPurchaseModal(true)
    }
  }

  const disconnectWallet = () => {
    disableWalletAddress();
    window.location.href = "/"
    setAlertMessage('Your wallet has been successfully logged out.');
    setShowSuccessModal(true);
  }

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
        <NavWrapper key={expand} expand={expand} className="bg-body-tertiary">
          <NavContainer fluid>
            <NavBrand href="/">
              <NavImage src={isMobile ? BRAND_MOBILE_IMAGE : BRAND_IMAGE} />
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
            <NavbarOffcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <OffcanvasHeader closeButton>
              </OffcanvasHeader>
              <OffcanvasBody>
                <NavFlex>

                  <Dropdown>
                    <DropdownToggle>
                      Marketplace
                    </DropdownToggle>
                    <DropdownMenu>
                      <CustomRouterLinkButton
                        link="/marketplace"
                        text="Marketplace"
                        fontSize='21px'
                        padding="20px 12px"
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        width='181px'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/collections"
                        text="All Collections"
                        fontSize='21px'
                        padding="20px 12px"
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        width='181px'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/nfts"
                        text="All NFTs"
                        padding="20px 12px"
                        fontSize='21px'
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                    </DropdownMenu>
                  </Dropdown>

                  <Dropdown>
                    <DropdownToggle>
                      Community
                    </DropdownToggle>

                    <DropdownMenu>
                      <CustomRouterLinkButton
                        link="/raffle"
                        text='Raffle'
                        padding="20px 12px"
                        fontSize='21px'
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/polls"
                        text="Polls"
                        fontSize='21px'
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        padding="20px 12px"
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/rewards"
                        text="Rewards"
                        fontSize='21px'
                        fontWeight='700'
                        smFontSize='21px'
                        smFontWeight='700'
                        padding="20px 12px"
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                    </DropdownMenu>
                  </Dropdown>

                  <Dropdown>
                    <DropdownToggle>
                      About
                    </DropdownToggle>

                    <DropdownMenu>
                      <CustomRouterLinkButton
                        link="/about"
                        text="Crashr"
                        fontSize='21px'
                        fontWeight='700'
                        padding="20px 12px"
                        smFontSize='21px'
                        smFontWeight='700'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/fee-structure"
                        text="Fee Structure"
                        fontSize='21px'
                        fontWeight='700'
                        padding="20px 12px"
                        smFontSize='21px'
                        smFontWeight='700'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                      <CustomRouterLinkButton
                        link="/faq"
                        text="FAQ"
                        fontSize='21px'
                        fontWeight='700'
                        padding="20px 12px"
                        smFontSize='21px'
                        smFontWeight='700'
                        hoverColor='black'
                        hoverBgColor='#CECECE'
                        borderRadius='0px'
                      />
                    </DropdownMenu>
                  </Dropdown>

                  <NavbarLink to="https://bombers.crashr.io">
                    Bombers
                  </NavbarLink>
                  {
                    isMobile &&
                    <NavbarLink to="/my-profile">
                      My Profile
                    </NavbarLink>
                  }
                </NavFlex>
                {
                  !isMobile &&
                  <Form className=" d-flex align-items-center gap-5">
                    <CustomSearchInput
                      bgColor='#4f4f4f'
                      maxWidth='184px'
                      height='33px'
                      placeholder='Search'
                      bgPosition='5px 5px'
                      input={search}
                      setInput={setSearch}
                    />
                    {
                      !myWalletAddress ?
                        <CustomImage
                          image={WALLET_ICON}
                          width='63px'
                          height='48px'
                          onClick={() => {
                            setShowConnectModal(true)
                          }}
                          cursor="pointer"
                        />
                        :
                        <div>
                          <img
                            src={userData && userData?.bomber_avatar ? userData?.bomber_avatar : userData?.avatar}
                            alt="avatar"
                            onClick={() => {
                              console.log("here")
                              setShowDropdown(!showDropdown)
                            }}
                            // @ts-ignore
                            onMouseOver={() => {
                              setShowDropdown(true);
                            }}
                            style={{
                              width: '48px',
                              height: '48px',
                              cursor: 'pointer',
                              borderRadius: '3px'

                            }}
                          />
                          {/* ************ wallet dropdown ************** */}
                          {
                            showDropdown && <FlexBox
                              // @ts-ignore
                              onMouseLeave={() => {
                                setShowDropdown(false);
                              }
                              }
                              bgColor='#202020' marginTop='10px' position='absolute' justifyContent='start'
                              right='96px' maxWidth='252px' height='87px' padding='18px 25px' gap="12px"
                              zIndex={1000}
                            >
                              <CustomImage
                                image={userData && userData?.avatar ? userData?.avatar : userData?.avatar}
                                width='51px'
                                height='51px'
                                borderRadius='3px'
                              />
                              <FlexBox direction='column' gap="8px">

                                <CustomRouterLinkButton
                                  hoverBgColor='none'
                                  text={userData && userData?.username ? userData?.username.slice(0, 10) + "..." : 'undefined'}
                                  fontSize='16px'
                                  fontWeight='600'
                                  fontFamily='Open Sans'
                                  lineHeight='100%'
                                  justifyContent='start'
                                  link="/my-profile"
                                  height='22px'
                                  color='white'
                                />
                                <FlexBox justifyContent='start' alignItems='center' gap='8px'>
                                  <CustomRouterLinkButton
                                    hoverBgColor='none'
                                    color="#af89fa"
                                    text="Edit Profile"
                                    fontSize='12px'
                                    fontWeight='600'
                                    lineHeight='100%'
                                    justifyContent='start'
                                    onClick={() => {
                                      setShowEditModal
                                        (true)
                                    }}
                                    // link="/edit-profile"
                                    width='default'
                                    fontFamily='Open Sans'
                                    padding='4px 0px'
                                  />
                                  <CustomText
                                    lineHeight='100%'
                                    text="Log Out"
                                    cursor="pointer"
                                    fontSize='12px'
                                    fontWeight='600'
                                    fontFamily='Open Sans'
                                    color="#af89fa"
                                    padding='4px 0px'
                                    onClick={
                                      () => {
                                        disconnectWallet();
                                      }
                                    }
                                  />
                                </FlexBox>

                              </FlexBox>


                            </FlexBox>
                          }
                        </div>
                    }
                    <CustomImage
                      width='55px'
                      height='48px'
                      image={CART_ICON}
                      cursor='pointer'
                      onClick={() => {
                        setShowPurchaseModal(true);
                      }}
                    />
                  </Form>
                }

              </OffcanvasBody>
            </NavbarOffcanvas>
          </NavContainer>
          {
            showConnectModal && <ConnectWalletModal2
              show={showConnectModal}
              onClose={() => { setShowConnectModal(false) }}

            />
          }
          {
            showEditModal &&
            <EditProfileModal
              show={showEditModal}
              onClose={() => { setShowEditModal(false) }}
            />
          }
          {
            showSuccessPurchaseModal &&
            <SuccessModal
              show={showSuccessPurchaseModal}
              onClose={() => { setShowSuccessPurchaseModal(false) }}
              message='You have successfully made your purchase.' />
          }
          {
            showPurchaseModal &&
            <PurchaseCartModal
              show={showPurchaseModal}
              onClose={() => { setShowPurchaseModal(false) }}
              purchaseCarts={purchaseCarts}
            />
          }

          {/* {
        showSuccessModal && <ConnectSuccessModal
          show={showSuccessModal}
          onClose={() => { setShowSuccessModal(false) }}
          message={alertMessage}
        />
      } */}
        </NavWrapper>
      ))}


    </>
  );
}

export default Navigation;
