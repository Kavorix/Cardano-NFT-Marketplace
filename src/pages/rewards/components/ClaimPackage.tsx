import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { DEFAULT_PACKAGE_IMAGE } from 'constants/image.constants'
import React from 'react'

const ClaimPackage = () => {
  return (
    <FlexBox direction='column' marginBottom='113px'>
      <CustomText
        text={`Claim Care Package`}
        fontSize='50px'
        fontWeight='700'
        marginBottom='25px'
      />
      <CustomText
        text={`Three Care Package Tiers`}
        fontSize='21px'
        fontWeight='400'
        fontFamily='Open Sans'
        marginBottom='25px;'
      />
      <FlexBox justifyContent='space-between'>
        <CustomImage image = {DEFAULT_PACKAGE_IMAGE} width='380px' height='380px'/>
        <CustomImage image = {DEFAULT_PACKAGE_IMAGE} width='380px' height='380px'/>
        <CustomImage image = {DEFAULT_PACKAGE_IMAGE} width='380px' height='380px'/>
      </FlexBox>

    </FlexBox>
  )
}

export default ClaimPackage