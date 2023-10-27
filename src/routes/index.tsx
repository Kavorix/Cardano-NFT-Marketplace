import MainLayout from 'components/layout'
import About from 'pages/about'
import FAQ from 'pages/faq'
import FeeStructure from 'pages/fee-structure'
import Home from 'pages/home'
import Leaderboard from 'pages/leaderboard'
import AllCollections from 'pages/marketplace/collections'
import SpecCollection from 'pages/marketplace/collections/SpecCollection'
import AllNFTs from 'pages/marketplace/nfts'
import SpecNFT from 'pages/marketplace/nfts/SpecNFT'
import Marketplace from 'pages/marketplace/shop'
import MyProfile from 'pages/my-profile'
import Polls from 'pages/polls'
import Raffle from 'pages/raffle'
import Rewards from 'pages/rewards'
import { Route, Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fee-structure" element={<FeeStructure />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/raffle" element={<Raffle />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/marketplace" element={<Marketplace />} />
        {
          /*** marketplace */
          <>
            <Route path="/nfts" element={<AllNFTs />} />
            <Route path="/nfts/:id" element={<SpecNFT />} />
            <Route path="/collections" element={<AllCollections />} />
            <Route path="/collections/:id" element={<SpecCollection />} />
          </>
        }
      </Route>

    </Routes>


  )
}

export default MainRouter