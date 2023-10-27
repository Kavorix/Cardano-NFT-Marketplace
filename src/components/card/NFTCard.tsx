import CustomButton from 'components/common/CustomButton'
import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import React from 'react'
import styled from 'styled-components'

interface NFTCardStyleProps {
  isSelected: boolean;
}

const NFTCardStyle = styled.div<NFTCardStyleProps>`
  position: relative;
  border-radius: 3px;
  max-width: 256px;
  width: 100%;
  outline: ${props => props.isSelected && '6px solid #6073F6'}
`

const NFTCard = ({
  image,
  onClick,
  name,
  isSelected,
  setSelect
}: NFTCardType) => {
  return (
    <NFTCardStyle isSelected={isSelected}>

      <FlexBox direction='column' onClick={setSelect} cursor='pointer'>
        <CustomImage
          image={image}
          width='256px'
          height='256px'
          borderRadius='3px 3px 0px 0px'
        />
        <FlexBox
          bgColor='white'
          borderRadius='0px 0px 3px 3px'
          padding='10px'
          direction='column'
          alignItems='center'
          gap='4px'
          width='256px'
          height='79px'
        >
          <CustomText
            text={name}
            fontSize='21px'
            fontWeight='700'
            maxWidth='236px'
            className='three-dots'
            display='block'
          />
        </FlexBox>
      </FlexBox>
      {
        !isSelected &&
        <CustomButton
          text='Sell NFT'
          fontSize='18px'
          fontWeight='600'
          fontFamily='Open Sans'
          width='100%'
          marginTop='24px'
          height='48px'
          onClick={onClick}
          smWidth='100%'
        />
      }

    </NFTCardStyle>
  )
}

export default NFTCard