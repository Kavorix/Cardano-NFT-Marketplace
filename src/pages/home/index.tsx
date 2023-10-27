import { Container, PageWrapper } from 'styles/GlobalStyles'
import TopCollections from './components/TopCollections'
import TrendingRaffles from './components/TrendingRaffles'
import GlobalStats from './components/GlobalStats'
import { FlexBox } from 'components/common/FlexBox'
import HeroSlideShow from './components/HeroSlideShow'
import { useEffect } from 'react'
import { acceptAnOffer, editListedNFT, makeAnOfferForNFT } from 'api/marketplace'
import { useWalletConnect } from 'context/WalletConnect'
import { Blockfrost, Lucid } from 'lucid-cardano'
import { buyCart } from 'api/marketplace/buyCart'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { makeCollectionOffer } from 'api/marketplace/makeCollectionOffer'
import { getMyOffering } from 'api/marketplace/getMyOffering'
import { migrateAssets } from 'api/marketplace/migrateAssets'
const Home = () => {

  const { myWalletAddress, lucid } = useWalletConnect()
  // const makeOffer = async () => {
  //   await acceptAnOffer(myWalletAddress, lucid,
  //     "55a20abf2d4ddd58704006280551ee52ace9eb774f639a813796d1c900510af5",
  //     "7ac20c4db8bb775093083d39cafdc6c04872c2002fed08efd955320589105a63", "00527a78cd2fdf89cf2bd1bcfa30c1834db8d9163537dfb2f15575be7377696d6d657268616c6c6f7765656e686f70706572313439")
  // }
  const purchaseCarts = async () => {
    await makeCollectionOffer(myWalletAddress, lucid, 5, "d6fe6efa7788cb70e57a91891605e3694352cabb4837e870610300e9")
  }
  useEffect(() => {
    if (myWalletAddress && lucid) {
      migrateAssets(myWalletAddress, lucid, "3a64f8b70737aef7ac54d217d5a0d3aa5504d659d5623f6cdc73cf533d3ace3f", ["bcc7a8c1f03c8f3106dee56c53be90dd99d427839becb4230a47b4965468654869766550616c73373636"])
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