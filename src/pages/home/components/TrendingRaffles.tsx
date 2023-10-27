
import { FlexBox } from 'components/common/FlexBox';
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton';
import RaffleCard from 'components/card/RaffleCard';
import { useGlobalContext } from 'context/GlobalContext';
import RaffleDetailModal from 'components/modal/RaffleDetailModal';
import { useState } from 'react';
import styled from 'styled-components';

const restrictedRaffles = [
  "303189669e160382697aa27802560f7977e680eabcee32cabe6ebabc6822acbd",
  "822a519ab508a464e96d41a03e2783bd3bc480357db30096500d884610c7c6b2",
  "e9d639124d9166783c3fcea234f1e0a7f9a773e82d67e6caa7328bd352b9e954",
  "43fc196b9b9274d6d955de81d73baf4fb7b5c9c6da6d9be4a9ae6df262969d59",
  "7e9c57ddc12793330e3773b0bdad76d61433e0bade5ad77e89b3f7cde4618fdb",
  "f442ed75e1701a4ed77e354eac26609e60732a80707a2f4d64dc4c64a6129111",
  "0ebd6c84bc2e7a8fd5d1ed79f4ca6c23ed01f9c89d4297745a3b3c62aa48c96a",
  "018ffb14d16f75564c12b0111bd1fc407d1573e1e8061b67b45d497cdc59fbce",
  "aa855882a8e78d72efbe8c8d0acb30d02992c8c33b5b49a995a113bf69ec8e85",
  "71f89c4446c22f95bc102eedc745afcf61a7ea901d0b902600d5d4bbd1c27647",
  "73c3d8f8db1e7278bff4e4cd34ecbd5fbed30e1d9c402847f1b756da481d3eea",
  "4fba799c498c783efa80c4d310f5dc0cde0debd6fdfa783e4e9a6d8cf99ac08b"
  // "da79e05c1aea9aac97791c330a7507a098ba8feb6f0da7ef4ada39581d2adff2"
]

const TrendingRafflesText = styled.div`
  color: #000;
  font-family: Inconsolata;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`

const TrendingRaffles = () => {
  const [showDetailModal, setShowDetailModal] = useState<boolean>(false)
  const [raffleDetailData, setRaffleDetailData] = useState({})
  const { raffleData, featuredRaffles, floorPriceList } = useGlobalContext()
  return (
    <FlexBox direction='column' gap="32px">
      <FlexBox smDirection='row' justifyContent='space-between' alignItems='center' smJustifyContent='space-between'>
        <TrendingRafflesText>
          Trending Raffles
        </TrendingRafflesText>

        <CustomRouterLinkButton
          text="View All"
          link="/raffle"
          fontFamily={`Open Sans`}
          fontSize='18px'
          fontWeight='600'
          color='#6073F6'
          width='auto'
          padding='8px 16px'
          smWidth='93px'
        />
      </FlexBox>
      <FlexBox flexWrap='wrap' gap="68px 90px" smAlignItems='center'
        smJustifyContent='center' smGap='16px'>

        {
          raffleData && Object.values(raffleData).length > 0 &&
          featuredRaffles &&
          featuredRaffles.length > 0 && floorPriceList &&
          featuredRaffles.map((item, index) => {
            if (!restrictedRaffles.includes(item.id)) {
              if (!item.floorprice) {
                return;
              }
              if (!raffleData[item.id]) {
                return;
              }
              return (
                <RaffleCard
                  item={
                    raffleData[item.id]
                  }
                  onClick={() => {
                    setRaffleDetailData(raffleData[item.id]);
                    setShowDetailModal(true);
                  }}

                  key={index}
                  floorPrice={floorPriceList[item.id] ? floorPriceList[item.id].floorprice : -1}
                />
              );
            }

          })
        }
      </FlexBox>
      {
        showDetailModal &&
        <RaffleDetailModal
          show={showDetailModal}
          onClose={() => { setShowDetailModal(false) }}
          raffleDetailData={raffleDetailData}
        />
      }
    </FlexBox>
  )
}

export default TrendingRaffles