import CollectionCard from 'components/card/CollectionCard'
import CollectionNFTCard from 'components/card/CollectionNFTCard'
import MarketListedNFTCard from 'components/card/MarketListedNFTCard'
import CustomImage from 'components/common/CustomImage'
import CustomInput from 'components/common/CustomInput'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { BLACK_DOWN_ICON, BLACK_UP_ICON } from 'constants/image.constants'
import React, { useState } from 'react'
const filterCategories = {
  "Rewards": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
  "PFP": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
  "Music": [
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ],
}
interface NFTsInfoProps {
  isFilter: boolean;
  setIsFilter?: any;
  commonNFTs?: any;
  listedNFTs?: ListedNFTList;
}

const NFTsInfo = ({
  isFilter,
  setIsFilter,
  commonNFTs,
  listedNFTs
}: NFTsInfoProps) => {
  const [search2, setSearch2] = useState<string>('');
  const [subFiltersOpen, setSubFiltersOpen] = useState<boolean[]>(
    [false, false, false]
  )
  return (
    <FlexBox gap="20px">
      {
        isFilter &&
        <FlexBox
          bgColor='#F3F3F3'
          borderRadius='8px'
          border="1px solid #9E9E9E"
          width='392px'
          padding='32px 32px 454px 32px'
          direction='column'
          justifyContent='start'
          smWidth='320px'
          smPadding='20px 20px 136px 20px'
        >
          <CustomSearchInput
            input={search2}
            setInput={setSearch2}
            placeholder='Search properties'
            bgColor='#E7E7E7'
          />
          <FlexBox marginTop='24px' direction='column'>

            {
              Object.keys(filterCategories).map((filter, index) => {
                return (
                  <FlexBox direction='column' key={index}>
                    <FlexBox
                      padding='16px'
                      justifyContent='space-between'
                      smDirection='row'
                      borderBottom='#C2C2C2 1px solid'
                      alignItems='center'
                      smPadding='16px'
                    >
                      <CustomText
                        fontSize='14px'
                        fontWeight='600'
                        fontFamily='Open Sans'
                        text={filter}
                        width='100%'
                      />
                      {
                        subFiltersOpen[index]
                          ?
                          <CustomImage
                            image={BLACK_DOWN_ICON}
                            width='10px'
                            height='6px'
                            cursor='pointer'
                            onClick={() => {
                              setSubFiltersOpen(subFiltersOpen.map((item, j) => j === index && false));
                            }}
                          />
                          :
                          <CustomImage
                            image={BLACK_UP_ICON}
                            width='10px'
                            height='6px'
                            cursor='pointer'
                            onClick={() => {
                              setSubFiltersOpen(subFiltersOpen.map((item, j) => j === index && true));
                            }}
                          />
                      }
                    </FlexBox>
                    {
                      subFiltersOpen[index] && filterCategories[filter].map((item, j) => {
                        return (
                          <FlexBox
                            padding='8px 24px'
                            gap="12px"
                            justifyContent='start'
                            key={j} marginBottom='8px'
                            smDirection='row'
                            smAlignItems='center'
                            smJustifyContent='start'
                            smPadding='8px 24px'
                          >
                            <CustomInput
                              type='checkbox'
                              maxWidth='22px'
                              height='22px'
                            />
                            <CustomText
                              text={`Bombers`}
                              fontSize='14px'
                              fontWeight='400'
                              fontFamily='Open Sans'
                            />
                          </FlexBox>
                        )
                      })
                    }
                  </FlexBox>
                )
              })
            }
          </FlexBox>


        </FlexBox>

      }
      <FlexBox justifyContent='start' direction='column'>

        <FlexBox
          flexWrap='wrap'
          gap={isFilter ? '52px 70px' : '52px 98px'}
          justifyContent='start'
          smJustifyContent='center'
          smAlignItems='center'
          smGap='30.5px'
        >
          {
            listedNFTs && Object.values(listedNFTs).map((nft, index) => {
              const isBundle = Object.values(nft.nfts).length > 1 ? true : false;
              return (
                <MarketListedNFTCard
                  key={index}
                  isBundle={isBundle}
                  isListed={true}
                  data={nft}

                />
              );
            })
          }
          {
            commonNFTs && commonNFTs.length > 0 && commonNFTs.map((item, index) => {
              return (
                <CollectionNFTCard
                  key={index}
                  listed={false}
                  data={item}
                />
              )
            })
          }

        </FlexBox>
      </FlexBox>
    </FlexBox>

  )
}

export default NFTsInfo