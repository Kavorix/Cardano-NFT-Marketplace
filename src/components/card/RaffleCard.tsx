import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { getExactImageFormat, getExactTokenAmount, outputEndTimeByTimestamp } from 'hooks/function'
import { useMedia } from 'react-use'

import styled from 'styled-components'
import { device } from 'styles/Breakpoints'

const RaffleCardStyle = styled.div`
  border-radius: 3px;
  max-width: 380px;
  width: 100%;  
  background-color: rgba(255, 255, 255, 0.58);
  cursor: pointer;
  position: relative;
  @media ${device.sm} {
    max-width: 156px;
    width: 100%;
  }
`
interface RaffleCardType {
  item?: {};
  onClick?: any;
  floorPrice?: number;
  featured?: boolean;
}


const ADABadge = styled.div`
  position: absolute;
  right: 0px;
  z-index: 10;
  top:32px;
  background: linear-gradient(102deg, rgba(255, 255, 255, 0.58) 3.82%, rgba(255, 255, 255, 0.70) 96.56%);
  width: 123px;
  height: 37px;
  font-size: 21px;
  color: black;
  font-weight: 600;
  font-family: 'Open Sans';
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RaffleImage = styled.img`
  width: 380px;
  height: 380px;
  @media ${device.sm} {
    width: 156px;
    height: 156px;
  }
`

const RaffleCard = ({ item, onClick, floorPrice, featured }: RaffleCardType) => {
  const isMobile = useMedia('(max-width: 768px)');
  return (
    <RaffleCardStyle onClick={onClick}>
      {
        !isMobile &&
        <ADABadge>
          {
            // @ts-ignore
            item && '₳' + getExactTokenAmount(parseInt(item.price), item.tokenName)
          }
        </ADABadge>
      }

      <RaffleImage
        src={
          // @ts-ignore
          getExactImageFormat(item?.image)}
        alt={
          // @ts-ignoreF
          `image${item?.name}`
        }
      />

      <FlexBox
        bgColor='rgba(255, 255, 255, 0.58)'
        padding='12px 10px'
        borderRadius='0px 0px 3px 3px'
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap="4px"
        smPadding='8px 10px'
        smWidth='156px'
      >
        <CustomText
          color='black'
          fontSize='21px'
          fontWeight='700'
          fontFamily='Inconsolata'
          smFontSize='19px'
          smDisplay='block'
          smMaxWidth='134px'
          className='three-dots'

          text={
            // @ts-ignore
            item && item.name ? item.name : "Undefined"
          }
        />
        {
          !isMobile &&
          <FlexBox smDirection='row'>
            <CustomText
              color='black'
              fontSize='21px'
              fontWeight='400'
              fontFamily='Open Sans'
              text={`Floor Price:&nbsp;`}
            />
            <CustomText
              color='#6073F6'
              fontSize='21px'
              fontWeight='600'
              fontFamily='Open Sans'
              text={`₳` + floorPrice}
            />
          </FlexBox>
        }
        <CustomText
          color='#F73737'
          fontSize='16px'
          fontWeight='600'
          fontFamily='Open Sans'
          text={
            // @ts-ignore
            outputEndTimeByTimestamp(item.timestamp)
          }
          smFontSize='12px'
          smLineHeight='15px'
        />
      </FlexBox>
    </RaffleCardStyle>
  )
}

export default RaffleCard