
import RaffleCard from 'components/card/RaffleCard';
import CustomImage from 'components/common/CustomImage';
import CustomSearchInput from 'components/common/CustomSearchInput';
import CustomText from 'components/common/CustomText';
import { FlexBox } from 'components/common/FlexBox';
import { useGlobalContext } from 'context/GlobalContext';
import React, { useEffect, useState } from 'react'
const MyRaffles = () => {
  const [activeShowingData, setActiveShowingData] = useState([])
  const [showRaffleDetailModal, setShowRaffleDetailModal] = useState(false);
  const [raffleDetailData, setRaffleDetailData] = useState({})
  const [search, setSearch] = useState<string>('');

  // @ts-ignore
  const { floorPriceList, raffleData, myRaffleData } = useGlobalContext()
  useEffect(() => {
    if (myRaffleData.length > 0) {

      // @ts-ignore
      const filteredArr1 = Object.values(raffleData).filter((item) => myRaffleData.some((el) => el.name === item.name)).reverse();
      
      // @ts-ignore
      let filtered_arr = filteredArr1.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));
      setActiveShowingData(filtered_arr)
    }
  }, [search, myRaffleData])
  return (
    <>
      <FlexBox marginBottom='32px' smDirection='row' gap="20px" justifyContent='start' direction='column'>
        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search Raffles'
        />
        <FlexBox flexWrap='wrap' gap='70px 90px'>
          {activeShowingData && activeShowingData.length > 0 && floorPriceList && activeShowingData.map((item, index) => {
            let txAddr = item.uniqueid ? item.uniqueid : item.tx;
            return (
              <RaffleCard
                item={item}
                key={index}
                floorPrice={floorPriceList[txAddr] ? floorPriceList[txAddr].floorprice : -1}
                onClick={
                  () => {
                    setRaffleDetailData(raffleData[txAddr])
                    setShowRaffleDetailModal(true)
                  }
                }
              />
            );
          })}
        </FlexBox>
      </FlexBox>
    </>
  )
}

export default MyRaffles