import { H1 } from 'components/typography'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import { FlexBox } from 'components/common/FlexBox'
import { MARKETPLACE_HEADER_IMAGE } from 'constants/image.constants'
import TopCollections from 'pages/home/components/TopCollections'
import HeaderBanner from 'components/HeaderBanner'
import CustomSearchInput from 'components/common/CustomSearchInput'
// import UpcomingMints from './components/UpcomingMints'
import NewCollections from './components/NewCollections'
import { useState } from 'react'

const Marketplace = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <PageWrapper>
      <HeaderBanner
        image={MARKETPLACE_HEADER_IMAGE}
      />
      <Container paddingTop='12px' smMarginTop='-30px'>
        <H1>
          Marketplace
        </H1>
        <FlexBox justifyContent='start' marginTop='80px' marginBottom='24px' smMarginTop='18px'>
          <CustomSearchInput
            placeholder='Search'
            input={search}
            setInput={setSearch}
          />
        </FlexBox>
        <FlexBox gap="54px" direction='column'>
          <TopCollections />
          {/* <UpcomingMints /> */}
          <NewCollections />
        </FlexBox>
      </Container>
    </PageWrapper>
  )
}

export default Marketplace