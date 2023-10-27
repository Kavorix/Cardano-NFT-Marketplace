import NewCollectionCard from 'components/card/NewCollectionCard'
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import VERIFIED_COLLECTIONS from 'constants/verified.collections.constant'

const NewCollections = () => {
  return (
    <FlexBox direction='column' gap='32px' smGap='10.35px'>
      <FlexBox justifyContent='space-between' smDirection='row' smAlignItems='center' smJustifyContent='space-between'>
        <CustomText
          text={`New Collections`}
          fontSize='50px'
          fontFamily='700'
          letterSpacing='-0.75px'
          marginBottom='14px'
          smFontSize='28px'
        />
        <CustomRouterLinkButton
          text="View All"
          link="/collections"
          fontFamily={`Open Sans`}
          fontSize='18px'
          fontWeight='600'
          color='#6073F6'
          maxWidth='default'
          width='default'
          smWidth='61px'
          smFontSize='16px'
        />
      </FlexBox>

      <FlexBox flexWrap='wrap' smDirection='row' gap='32px 90px' smGap='22px'>
        {
          VERIFIED_COLLECTIONS.slice(0, 9).map((item, index) => {
            return (
              <NewCollectionCard
                key={index}
                hero={item.hero}
                name={item.name}
                policyId={item.policyId}
              />
            )
          })
        }
      </FlexBox>
    </FlexBox>
  )
}

export default NewCollections