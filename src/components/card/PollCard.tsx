import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { outputEndTimeByTimestamp } from 'hooks/function'
import styled from 'styled-components'

interface VoteCardType {
  item: {
    image: string;
    name: string;
    utxo: string;
    timestamp: string;
  };
  utxo: string;
  votingData: [];
  onClick?: any;
}

const PollCardStyle = styled.div`
  border-radius: 3.6px;
  display: flex;
  background-color: white;
  cursor: pointer;

  transition: transform .3s;
  &:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02); 
  }
`
const PollCard = ({ item, utxo, votingData, onClick }: VoteCardType
) => {
  return (
    <PollCardStyle onClick = {onClick}>
      <CustomImage
        image={item && item.image}
        width='200px'
        height='200px'
      />
      <FlexBox bgColor='var(--glass-white, linear-gradient(102deg, rgba(255, 255, 255, 0.58) 3.82%, rgba(255, 255, 255, 0.70) 96.56%))' width='420px' height='200px' padding='10px 20px' direction='column' border="0px 3.6px 3.6px 0px" gap="20px">
        <CustomText
          text={item && item.name}
          fontSize='28px'
          fontWeight='700'
        />
        <CustomText
          text={item && outputEndTimeByTimestamp(item.timestamp)}
          color='#F73737'
          fontSize='21px'
          fontWeight='600'
          fontFamily='OPen Sans'
          border="0px 3.6px 3.6px 0px"
        />
      </FlexBox>
    </PollCardStyle>
  )
}

export default PollCard