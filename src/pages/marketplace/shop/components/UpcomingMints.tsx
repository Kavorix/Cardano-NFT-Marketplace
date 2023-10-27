import CustomButton from 'components/common/CustomButton'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import UpcomingMintCard from './UpcomingMintCard'

const UpcomingMints = () => {
  return (
    <FlexBox direction='column'>
      <CustomText
        text={`Upcoming Events`}
        fontSize='50px'
        fontFamily='700'
        letterSpacing='-0.75px'
        marginBottom='14px'
        smFontSize='28px'
      />
      <FlexBox justifyContent='center' direction='column' alignItems='center'>
        <CustomText
          text={`September 2023`}
          fontSize='28px'
          fontWeight='600'
          fontFamily='Open Sans'
        />
        <FlexBox gap='56px' marginTop='24px'>

          <UpcomingMintCard />
          <UpcomingMintCard />
        </FlexBox>
        <FlexBox marginTop='54px' gap='24px' direction='column' alignItems='center' justifyContent='center'>
          <CustomText
            text={`Releasing a new collection soon? `}
            fontFamily='Open Sans'
            fontSize='21px'
            fontWeight='400'
          />
          <CustomButton
            text='Apply'
            color='white'
            fontWeight='600'
            fontSize='18px'
            fontFamily='Open Sans'
            width='300px'
            height='48px'
          />
        </FlexBox>

      </FlexBox>

    </FlexBox>
  )
}

export default UpcomingMints