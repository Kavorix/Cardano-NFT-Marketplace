import CustomBorderButton from 'components/common/CustomBorderButton'
import CustomButton from 'components/common/CustomButton'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { H1 } from 'components/typography'
import React from 'react'
import styled from 'styled-components'
import { device } from 'styles/Breakpoints'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import ClaimPackage from './components/ClaimPackage'
import YourCarePackage from './components/YourCarePackage'
import CustomImage from 'components/common/CustomImage'
import { REWARDS_HEADER_IMAGE } from 'constants/image.constants'
import HeaderBanner from 'components/HeaderBanner'
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton'

const StatValue = styled.div`
  color: #282828;
  text-align: center;
  font-family: Inconsolata;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px; 
  @media ${device.sm} {
    font-size: 28px;
  }
`

const StatSubject = styled.div`
  text-align: center;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #282828;
  @media ${device.sm} {
    font-size: 14px;
  }
`


const temp_data = [
  {
    subject: "Season Spent",
    value: "10X",
  },
  {
    subject: "Season Earned",
    value: "500",
  },
  {
    subject: "All Time Earned",
    value: "1000",
  },
  {
    subject: "Season Ending",
    value: "1000",
  }
]

const Rewards = () => {
  window.location.href = "/leaderboard"
  return (
    <PageWrapper>
      <HeaderBanner
        image={REWARDS_HEADER_IMAGE}
      />
      <Container paddingTop='12px'>
        <H1>
          Rewards
        </H1>
        <CustomText
          text={`Connect your wallet to begin earning points for each transactions on Crashr.`}
          fontSize='21px'
          fontWeight='400'
          marginTop='25px'
          marginBottom='40px'
        />
        <FlexBox justifyContent='start' marginBottom='80px' gap='13px'>
          <CustomBorderButton
            text="Tokenomics"
            fontSize='21px'
            fontWeight='600'
            width='192px'
            height='64px'
          />
          <CustomRouterLinkButton
            text="Leaderboard"
            link='/leaderboard'
            fontSize='21px'
            fontWeight='600'
            width='192px'
            height='64px'
            bgColor='linear-gradient(to right, #5769E7 , #3343AE)'
            hoverBgColor='#6073f6'
            hoverColor='white'
            color='white'
            justifyContent='center'
          />
        </FlexBox>
        <CustomText
          text={`For every transaction, earn points. `}
          fontSize='38px'
          fontWeight='700'
          marginBottom='12px'
        />

        <CustomText
          text={`The more you spend, the more points you earn.`}
          fontSize='21px'
          fontWeight='400'
          fontFamily='Open Sans'
          marginBottom='50px'
        />

        <FlexBox smDirection='row' gap="40px" flexWrap='wrap' marginBottom='58px'>
          {
            temp_data.map((item, index) => {
              return (
                <FlexBox
                  key={index}
                  width='300px'
                  height='163px'
                  justifyContent='center'
                  alignItems='center'
                  direction='column' gap="18px" bgColor='#D7DCFD' boxShadow='0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
                  smWidth='186px'
                  smHeight='92px'
                  fontSize='21px'
                  fontWeight='600'
                >
                  <StatValue>{item.value}</StatValue>
                  <StatSubject>{item.subject}</StatSubject>
                </FlexBox>
              )
            })
          }

        </FlexBox>

        <FlexBox direction='column' marginBottom='32px'>
          <CustomText
            text="How it works"
            bgColor='#B92929'
            padding='16px 24px'
            color='white'
            width='100%'
            borderRadius='3px 3px 0 0'
            fontSize='38px'
            fontWeight='700'
          />
          <CustomText
            text={`Each transaction on our platform rewards you with points. The points you earn can be used to redeem a care package. After claiming, you can choose to reveal the rarity of the care package. At the end of each season, you will be able to open your care packages into CRASH tokens. `}
            padding="36px"
            fontSize='21px'
            fontWeight='400'
            fontFamily='Open Sans'
          />
        </FlexBox>

        <ClaimPackage />
        <YourCarePackage />
      </Container>
    </PageWrapper>
  )
}

export default Rewards