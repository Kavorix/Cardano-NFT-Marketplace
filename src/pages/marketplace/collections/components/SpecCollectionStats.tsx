import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import styled from 'styled-components';

interface SpecCollectionStatsType {
  items?: number;
  owners?: number;
  floor?: number;
  listed?: number;
  volume?: number;
}

const VerticalLine = styled.div`
  border-left: 1px solid #cecece;
  height: 64px;
  @media screen and (max-width: 768px) {
    height: 48px;
  }
`

const StatsSubject = styled.div`
  color: #000;

  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const StatsValue = styled.div`
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const SpecCollectionStats = ({
  items,
  owners,
  floor,
  listed,
  volume
}: SpecCollectionStatsType) => {
  return (
    <FlexBox smDirection='row' justifyContent='start' gap='16px' smGap='14px'>
      <FlexBox direction='column' gap="10px" width='default' alignItems='center'>
        <StatsSubject>Items</StatsSubject>
        <StatsValue>{items}</StatsValue>
      </FlexBox>
      <VerticalLine />
      <FlexBox direction='column' gap="10px" width='default' alignItems='center'>
        <StatsSubject>Owners</StatsSubject>
        <StatsValue>123</StatsValue>
      </FlexBox>
      <VerticalLine />
      <FlexBox direction='column' gap="10px" width='default' alignItems='center'>
        <StatsSubject>Floor</StatsSubject>
        <StatsValue>₳50</StatsValue>
      </FlexBox>
      <VerticalLine />
      <FlexBox direction='column' gap="10px" width='default' alignItems='center'>
        <StatsSubject>Listed</StatsSubject>
        <StatsValue>9.42</StatsValue>
      </FlexBox>
      <VerticalLine />
      <FlexBox direction='column' gap="10px" width='default' alignItems='center'>
        <StatsSubject>Volume</StatsSubject>
        <StatsValue>₳7.58m</StatsValue>
      </FlexBox>
    </FlexBox>
  )
}

export default SpecCollectionStats