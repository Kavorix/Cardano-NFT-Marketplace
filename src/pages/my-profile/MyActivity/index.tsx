import { getMyNFTListing } from 'api/marketplace';
import { getMyOffering } from 'api/marketplace/getMyOffering';
import axios from 'axios';
import CustomImage from 'components/common/CustomImage';
import CustomSearchInput from 'components/common/CustomSearchInput';
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox';
import { DEFAULT_NFT_IMAGE } from 'constants/image.constants';
import { useGlobalContext } from 'context/GlobalContext';
import { useWalletConnect } from 'context/WalletConnect';
import React, { useEffect, useState } from 'react'
const activity = [
  " ", " ", " ", " ", " ", " ", " ", " ", " ", " ",
]
const MyActivity = () => {
  const [search, setSearch] = useState<string>('');
  const [activities, setActivities] = useState<any>();
  const { myWalletAddress } = useWalletConnect();
  const getOfferingData = async () => {
    try {
      const response = await getMyOffering(myWalletAddress);
      console.log("response", response)
      if (response) {
        setActivities(response)
      }
    } catch (err) {
      console.log("err", err)
    }
  }

  useEffect(() => {
    if (myWalletAddress !== '') {
      getOfferingData()
    }
  }, [myWalletAddress])



  return (
    <FlexBox direction='column' gap="24px">
      <CustomText
        text={`All Account Activity`}
        fontSize='28px'
        fontWeight='700'
      />
      <CustomSearchInput
        input={search}
        setInput={setSearch}
        placeholder='Search Activity'
      />
      <FlexBox direction='column' gap='2px'>
        {
          activities && Object.values(activities).map((activity, index) => {
            return (
              <FlexBox padding='16px 54px 16px 16px'
                justifyContent='start' bgColor='#F3F3F3' gap="16px" alignItems='center'
                key={index}
              >
                <CustomImage
                  width='64px'
                  height='64px'
                  image={DEFAULT_NFT_IMAGE}
                />
                <CustomText
                  text={`Ghost made an offer on Bomber#1234 `}
                  fontSize='21px'
                />
              </FlexBox>
            )
          })
        }
      </FlexBox>
    </FlexBox>
  )
}

export default MyActivity