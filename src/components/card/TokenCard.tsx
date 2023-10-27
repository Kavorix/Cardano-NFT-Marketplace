import CustomImage from "components/common/CustomImage"
import CustomText from "components/common/CustomText"
import { FlexBox } from "components/common/FlexBox"
import { getExactTokenAmount } from "hooks/function"
import styled from "styled-components"

const TokenCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  position: relative;
`

const TokenBadge = styled.div`
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


const TokenCard = ({
  image, name, quantity
}: TokenCardType) => {
  return (
    <TokenCardStyle>
      <TokenBadge>
        {
          getExactTokenAmount(quantity, name)
        }
      </TokenBadge>
      <CustomImage image={image}
        width='256px'
        height='256px'
        borderRadius='3px 3px 0px 0px'
      />
      <FlexBox width='256px' height='79px' alignItems='center' borderRadius='0px 0px 3px 3px'
        bgColor='white'
      >
        <CustomText
          text={name}
          fontSize='28px'
          fontWeight='700'
        />
      </FlexBox>
    </TokenCardStyle>
  )
}

export default TokenCard