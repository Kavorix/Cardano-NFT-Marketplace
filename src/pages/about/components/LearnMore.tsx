import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import styled from 'styled-components'

const ListBox = styled.ul`
  padding-left: 25px;
`

const ListText = styled.li`
  list-style-type: disc;
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const LearnMore = () => {
  return (
    <FlexBox gap='16px' direction='column'>
      <CustomText
        text={`Learn more about: `}
        fontSize='28px'
        fontWeight='700'
      />
      <ListBox>
        <ListText>Our Fees</ListText>
        <ListText>Frequently Asked Questions</ListText>
      </ListBox>
    </FlexBox>
  )
}

export default LearnMore