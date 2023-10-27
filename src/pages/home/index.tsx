import { Container, PageWrapper } from 'styles/GlobalStyles'
import TopCollections from './components/TopCollections'
import TrendingRaffles from './components/TrendingRaffles'
import GlobalStats from './components/GlobalStats'
import { FlexBox } from 'components/common/FlexBox'
import HeroSlideShow from './components/HeroSlideShow'
import { useEffect } from 'react'
import { useWalletConnect } from 'context/WalletConnect'

const Home = () => {

  const { myWalletAddress, lucid } = useWalletConnect()
  useEffect(() => {
    if (myWalletAddress && lucid) {
    }
  }, [myWalletAddress, lucid])

  return (
    <PageWrapper>
      <HeroSlideShow />
      <Container>
        <FlexBox gap="44px" direction='column'>
          <GlobalStats />
          <TopCollections />
          <TrendingRaffles />
        </FlexBox>
      </Container>

    </PageWrapper>
  )
}

export default Home