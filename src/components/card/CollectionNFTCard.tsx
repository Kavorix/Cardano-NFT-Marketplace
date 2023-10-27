import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { DEFAULT_NFT_IMAGE, VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import { getExactImageFormat } from 'hooks/function'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface CollectionNFTCardProps {
  listed?: boolean;
  data?: any;
}

const CollectionNFTCardStyle = styled(Link) <CollectionNFTCardProps>`
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
`

const CollectionNFTCard = ({
  listed, data
}: CollectionNFTCardProps) => {
  return (
    <CollectionNFTCardStyle
      listed={listed}
      to={"/nfts/" + data.asset}
    >
      <CustomImage
        image={data && data.onchain_metadata && data.onchain_metadata.image ? getExactImageFormat(data.onchain_metadata.image) : DEFAULT_NFT_IMAGE}
        width='256px'
        height='256px'
        smWidth='156px'
        smHeight='156px'
        borderRadius='3px 3px 0px 0px'
      />
      <FlexBox
        padding='12px 10px'
        gap='6px'
        direction='column'
        bgColor='white'
        borderRadius='0px 0px 3px 3px'
        width='256px'
        height='79px'
        smWidth='156px'
        smHeight='59px'
        alignItems='center'
      >
        <CustomText
          fontSize='21px'
          fontWeight='700'
          text={data && data.onchain_metadata && data.onchain_metadata.name ? data.onchain_metadata.name : 'main'}
        />
        {listed &&
          <CustomText
            text={`₳99K`}
            fontSize={`28px`}
            color='#6073F6'
            fontWeight='600'
            fontFamily='Open Sans'
          />}
      </FlexBox>
    </CollectionNFTCardStyle>
  )
}

export default CollectionNFTCard