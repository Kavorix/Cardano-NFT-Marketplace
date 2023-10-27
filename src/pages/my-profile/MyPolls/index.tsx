import PollCard from 'components/card/PollCard'
import CustomSearchInput from 'components/common/CustomSearchInput'
import { FlexBox } from 'components/common/FlexBox'
import{ useState } from 'react'

const pollData = [" ", " ", " ", " ", " ", " "]

const MyPolls = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <FlexBox direction='column'>
      <FlexBox justifyContent='space-between' marginBottom='32px'>
        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search Tokens'
        />
      </FlexBox>
      {/* <FlexBox flexWrap='wrap' gap="16px 40px">
        {
          pollData.map((poll, index) => {
            return (
              <PollCard />
            )
          })
        }
      </FlexBox> */}
    </FlexBox>
  )
}

export default MyPolls