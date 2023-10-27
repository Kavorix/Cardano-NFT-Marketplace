import React, { useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import styled from 'styled-components'
import { FlexBox } from 'components/common/FlexBox'
import CustomText from 'components/common/CustomText'
import CustomImage from 'components/common/CustomImage'
import { DEFAULT_WALLET_NFT_IMAGE, } from 'constants/image.constants'
import MyNFTs from './MyNFTs'
import MyTokens from './MyTokens'
import MyActivity from './MyActivity'
import MyRaffles from './MyRaffles'
import MyPolls from './MyPolls'
import CopyBoard from 'components/CopyBoard'
import { useGlobalContext } from 'context/GlobalContext'
import { useWalletConnect } from 'context/WalletConnect'
import { useMedia } from 'react-use'

const ProfileHeaderBanner = styled.div`
  background-image: url('/assets/images/background/my_profile_header.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 276px;
  @media screen and (max-width: 768px) {
    height: 114px;
  }
`
const tabs = [
  "NFTs", "Tokens", "Raffles", "Polls", "Activity"
]
interface ProfileTabProps {
  active: boolean;
}
const ProfileTab = styled.div<ProfileTabProps>`
  text-align: center;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: ${props => props.active ? '#afb9fa' : ''};
  padding: 6px 12px;
  border-radius: 3px;
  &:hover{
    background-color: #6073F6;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState<string>('NFTs');
  const { myBalance, userData } = useGlobalContext()
  const { myWalletAddress } = useWalletConnect()
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <PageWrapper>
      <ProfileHeaderBanner />
      <Container smPaddingBottom='0px'>
        {
          !isMobile &&
          <FlexBox marginBottom='69px' position='relative' justifyContent='space-around' paddingTop='27px'>
            <FlexBox width='429px' justifyContent='space-between'>
              <FlexBox direction='column' gap='10px' alignItems='center'>
                <CustomText
                  fontSize='16px'
                  fontWeight='600'
                  text={`USD ($)`}
                  fontFamily='Open Sans'
                />
                {
                  myBalance && !myBalance.loading &&
                  <CustomText
                    fontSize='28px'
                    fontWeight='700'
                    color='#B92929'
                    text={myBalance.USD}
                    fontFamily='Open Sans'
                  />
                }

              </FlexBox>
              <FlexBox direction='column' gap='10px' alignItems='center'>
                <CustomText
                  fontSize='16px'
                  fontWeight='600'
                  text={`ADA (₳)`}
                  fontFamily='Open Sans'
                />
                {
                  myBalance && !myBalance.loading &&
                  <CustomText
                    fontSize='28px'
                    fontWeight='700'
                    color='#B92929'
                    text={(parseInt(myBalance.ADA) / 1000000).toFixed(0)}
                    fontFamily='Open Sans'
                  />
                }

              </FlexBox>
              <FlexBox direction='column' gap='10px' alignItems='center'>
                <CustomText
                  fontSize='16px'
                  fontWeight='600'
                  text={`Country`}
                  fontFamily='Open Sans'
                />
                <CustomText
                  fontSize='28px'
                  fontWeight='700'
                  color='#B92929'
                  text={userData && userData.user_location ? userData.user_location : ''}
                  fontFamily='Open Sans'
                />
              </FlexBox>


            </FlexBox>
            <FlexBox width='376px' direction='column' alignItems='center' justifyContent='center' position='absolute' marginTop='-220px'>
              <CustomImage
                image={DEFAULT_WALLET_NFT_IMAGE}
                width='253px'
                height='253px'
              />
              <CustomText
                text={userData && userData.username && userData.username}
                fontSize='38px'
                fontWeight='700'
                marginTop='20px'
                marginBottom='8px'
                maxWidth='259px'
                display='block'
                className='three-dots'
              />
              <CustomText
                text={userData && userData.user_bio ? userData.user_bio : ''}
                color='#767676'
                fontSize='21px'
                fontWeight='600'
                fontFamily='Open Sans'
                maxWidth='259px'
                display='block'
                className='three-dots'
              />
            </FlexBox>
            <FlexBox width='472px' direction='row' justifyContent='space-between'>
              <FlexBox direction='column' gap='12px' alignItems='center'>
                <CustomText
                  text={`Wallet Address`}
                  fontSize='16px'
                  fontWeight='600'
                  fontFamily='Open Sans'
                />
                <CopyBoard
                  addr={
                    myWalletAddress && myWalletAddress
                  }
                  maxWidth='174px'
                />
              </FlexBox>
            </FlexBox>
          </FlexBox>
        }
        {
          isMobile &&
          <>
            <FlexBox smDirection='row' smGap='14px' smMarginTop='-47px'>
              <CustomImage
                image={DEFAULT_WALLET_NFT_IMAGE}
                smWidth='94px'
                smHeight='94px'
              />
              <FlexBox smGap='8px' smMarginTop='50px'>
                <CustomText
                  text={userData && userData.username && userData.username}
                  smFontSize='18px'
                  smFontWeight='700'
                  fontFamily='Inconsolata'
                  smMaxWidth='179px'
                  className='three-dots'
                  smDisplay='block'
                />
                <CustomText
                  text={userData && userData.user_bio ? userData.user_bio : ''}
                  smFontSize='12px'
                  smFontWeight='600'
                  fontFamily='Open Sans'
                  color='#9e9e9e'
                  smMaxWidth='179px'
                  className='three-dots'
                  smDisplay='block'
                />
              </FlexBox>
            </FlexBox>
            <FlexBox smJustifyContent='space-between' smAlignItems='center' smDirection='row' smMarginTop='16px'>
              <FlexBox direction='column' gap='10px' alignItems='center' smWidth='auto'>
                <CustomText
                  smFontSize='12px'
                  fontWeight='600'
                  text={`USD ($)`}
                  fontFamily='Open Sans'
                />
                {
                  myBalance && !myBalance.loading &&
                  <CustomText
                    smFontSize='16px'
                    fontWeight='700'
                    color='#B92929'
                    text={myBalance.USD}
                    fontFamily='Open Sans'
                  />
                }

              </FlexBox>
              <FlexBox direction='column' gap='10px' alignItems='center' smWidth='auto'>
                <CustomText
                  smFontSize='12px'
                  fontWeight='600'
                  text={`ADA (₳)`}
                  fontFamily='Open Sans'
                />
                {
                  myBalance && !myBalance.loading &&
                  <CustomText
                    smFontSize='16px'
                    fontWeight='700'
                    color='#B92929'
                    text={(parseInt(myBalance.ADA) / 1000000).toFixed(0)}
                    fontFamily='Open Sans'
                  />
                }

              </FlexBox>
              <FlexBox direction='column' gap='10px' alignItems='center' smWidth='auto'>
                <CustomText
                  smFontSize='12px'
                  fontWeight='600'
                  text={`Country`}
                  fontFamily='Open Sans'
                />
                <CustomText
                  smFontSize='16px'
                  fontWeight='700'
                  color='#B92929'
                  text={userData && userData.user_location ? userData.user_location : ''}
                  fontFamily='Open Sans'
                  maxWidth='63px'
                  smDisplay='block'
                  className='three-dots'
                />
              </FlexBox>
              <FlexBox direction='column' gap='10px' alignItems='center' smWidth='auto'>
                <CustomText
                  smFontSize='12px'
                  fontWeight='600'
                  text={`Wallet Address`}
                  fontFamily='Open Sans'
                />
                
                <CopyBoard
                  addr={
                    myWalletAddress && myWalletAddress
                  }
                  maxWidth='100px'
                />
              </FlexBox>


            </FlexBox>
          </>

        }
        <FlexBox gap="40px" padding='14px' borderBottom='2px solid #8D8D8D' width='fit-content' className='mx-auto' marginBottom='32px' smDirection='row' smWidth='100%' smGap='0px' smPaddingBottom='8px' smMarginBottom='16px' smMarginTop='33px'>
          {
            tabs.map((tab: string, index: number) => {
              return (
                <ProfileTab active={tab === activeTab} onClick={() => { setActiveTab(tab) }}>
                  {tab}
                </ProfileTab>
              )
            })
          }
        </FlexBox>
      </Container>
      <Container>
        {
          activeTab === "NFTs" &&
          <MyNFTs />
        }

        {
          activeTab === "Tokens" &&
          <MyTokens />
        }
        {
          activeTab === "Raffles" &&
          <MyRaffles />
        }

        {
          activeTab === "Polls" &&
          <MyPolls />
        }
        {
          activeTab === "Activity" &&
          <MyActivity />
        }

      </Container>
    </PageWrapper>
  )
}

export default MyProfile