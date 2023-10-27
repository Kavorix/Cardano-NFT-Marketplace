import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { DEFAULT_MINT_IMAGE, DISCORD_BLUE_ICON, TWITTER_BLUE_ICON } from 'constants/image.constants'
import React from 'react'
import styled from 'styled-components'
const UpcomingMintCardTitle = styled.div`
  padding: 16px 24px 18px 24px;
  background-color: #b92929;
  max-width: 520px;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  border-radius: 3px 3px 0px 0px;
  color: white;
`

const MintCardBody = styled.div`
  display: flex;
  height: 216px;
  padding: 24px;
  align-items: center;
  gap: 25px;
  align-self: stretch;
  background: #FFF;
`

const MintHero = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
`

const MintBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 297px;
  height: 160px;
  flex: 1 0 0;
`;

const RemainTime = styled.div`
  color: var(--crashr-red-500, #F73737);
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
`

const MintText = styled.div`
  color: #000;
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const MintCardFooter = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  background-color: #f3f3f3;
`
const MintCardTopics = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

const MintCardSubject = styled.div`
  color: #000;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const MintCardValue = styled.div`
  color: #000;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const UpcomingMintCard = () => {
  return (
    <FlexBox maxWidth='520px' direction='column'>
      <UpcomingMintCardTitle>
        {`Dream Owl`}
      </UpcomingMintCardTitle>
      <MintCardBody>
        <MintHero
          src={DEFAULT_MINT_IMAGE}
        />
        <MintBodyRight>
          <RemainTime>
            01days 00hrs 10min
          </RemainTime>
          <MintText>
            Behind every successful product comes a strong community. Our objective with Bombers is to create an epic community...
          </MintText>
          <FlexBox smDirection='row' gap='13.3px' justifyContent='start'>
            <CustomImage
              image={DISCORD_BLUE_ICON}
              width='33px'
              height='28.5px'
            />
            <CustomImage
              image={TWITTER_BLUE_ICON}
              width='32.5px'
              smHeight='30px'
            />
          </FlexBox>

        </MintBodyRight>
      </MintCardBody>
      <MintCardFooter>
        <MintCardTopics>
          <MintCardSubject>
            Price
          </MintCardSubject>
          <MintCardValue>
            ₳28
          </MintCardValue>
        </MintCardTopics>
        <MintCardTopics>
          <MintCardSubject>
            Supply:
          </MintCardSubject>
          <MintCardValue>
            150 NFT’s
          </MintCardValue>
        </MintCardTopics>
      </MintCardFooter>
    </FlexBox>
  )
}

export default UpcomingMintCard