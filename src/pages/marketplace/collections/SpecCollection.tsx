import CustomImage from 'components/common/CustomImage'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { H2 } from 'components/typography'
import { DOWN_FILTER_ICON_IMAGE, UP_FILTER_ICON_IMAGE, VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import SpecCollectionStats from './components/SpecCollectionStats'
import CopyBoard from 'components/CopyBoard'
import NFTsInfo from './components/NFTsInfo'
import SalesInfo from './components/SalesInfo'
import VERIFIED_COLLECTIONS from 'constants/verified.collections.constant'
import BlackHeaderBanner from 'components/BlackHeaderBanner'
import axios from 'axios'
import { getListedNFTsByPolicy } from 'api/marketplace'
import { useMedia } from 'react-use'

const tabData = ["NFTs", "Sales"]



interface LeaderboardTabProps {
  active: boolean;
}

const LeaderboardTab = styled.div<LeaderboardTabProps>`
  cursor: pointer;
  background-color: ${props => props.active ? '#AFB9FA' : 'none'};
  color: black;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 149px;
  height: 36px;
  border-radius: 3px;
`

const SpecCollection = () => {
  const [collectionData, setCollectionData] = useState<CollectionType>()
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>("NFTs");
  const [collectionAssets, setCollectionAssets] = useState([])
  const [commonNFTs, setCommonNFTs] = useState([]);
  const [listedNFTs, setListedNFTs] = useState<ListedNFTList>()
  const [subFiltersOpen, setSubFiltersOpen] = useState<boolean[]>(
    [false, false, false]
  )

  const isMobile = useMedia('(max-width: 768px)');

  const policyId = window.location.href.split("/collections/")[1];

  const getListedData = async (policyId) => {
    const data = await getListedNFTsByPolicy(policyId);
    setListedNFTs(data)
    console.log("data", data)
  }

  useEffect(() => {
    // @ts-ignore
    const object: CollectionType = VERIFIED_COLLECTIONS.find(item => item.policyId === policyId);

    console.log("object", object)
    setCollectionData(object)
    // getCollectionNFTs(object.supply.length)
    getListedData(policyId)
  }, [policyId]);

  useEffect(() => {
    if (collectionAssets.length > 0) {
      console.log("collectionAssets", collectionAssets)
      // getNFTsDetailData()
    }
  }, [collectionAssets])

  // const getCollectionData = async () => {
  //   const response = await axios.get("https://www.jpg.store/_next/data/-e0fqkVcTcLTsZxJJxxfx/en/collection/" + collectionID + ".json")
  //   console.log("response", response)
  // }




  return (
    <PageWrapper>
      <BlackHeaderBanner />
      <Container>
        <CustomImage
          position='absolute' marginTop='-147px'
          smMarginTop="-57px"
          image={collectionData && collectionData.hero}
          width='203px'
          height='203px'
          border='2px solid #FFF'
          smWidth='114px'
          smHeight='114px'
        />
        <FlexBox direction='column' gap='32px' paddingTop='70px' smPaddingTop='65px'>
          <FlexBox justifyContent='space-between'>
            <FlexBox
              gap='16px'
              justifyContent='start'
              alignItems='center'
              width='default'
              smDirection='row'
            >
              <H2>
                {
                  collectionData && collectionData.name
                }

              </H2>
              <CustomImage
                width='40px'
                height='38px'
                image={VERIFIED_ICON_IMAGE}
              />

            </FlexBox>
            <FlexBox
              width='default'
              smDirection='row'
              alignItems='center'
              gap="28px"
            >
              {
                collectionData && collectionData.policyId &&
                <FlexBox alignItems='center' smDirection='row' width='default'>
                  <CustomText
                    text={`Policy ID:&nbsp;`}
                    fontFamily='Open Sans'
                    fontSize='21px'
                    fontWeight='700'
                    color='#6073f6'
                    className='text-nowrap'
                    smFontSize='14px'
                    smMaxWidth='179px'
                  />
                  <CopyBoard
                    addr={collectionData.policyId}
                    maxWidth='200px'
                  />
                </FlexBox>
              }

            </FlexBox>
          </FlexBox>
          {
            collectionData &&
            <CustomText
              text={collectionData && collectionData.description}
              maxWidth='872px'
              fontSize='16px'
              fontWeight='400'
              fontFamily='Open Sans'
              smFontSize='14px'
            />
          }
          {
            collectionData && <SpecCollectionStats
              items={collectionData && collectionData.supply}
            />
          }
          <FlexBox smDirection='row' gap="20px" justifyContent='start'>
            {
              activeTab === "NFTs" && !isMobile &&
              <>
                {
                  isFilter
                    ?
                    <CustomImage
                      image={UP_FILTER_ICON_IMAGE}
                      width='40px'
                      height='40px'
                      onClick={() => setIsFilter(false)}
                      cursor='pointer'
                    />
                    :
                    <CustomImage
                      image={DOWN_FILTER_ICON_IMAGE}
                      width='40px'
                      height='40px'
                      onClick={() => setIsFilter(true)}
                      cursor='pointer'
                    />
                }
              </>
            }


            <FlexBox
              smDirection='column'
              smGap='16px'
              justifyContent='start'
              gap='20px'
            >
              <FlexBox
                smDirection='row' justifyContent='start'
                gap="12px"
                padding='6px'
                borderRadius='3px'
                border='2px solid #8896F8' width='default'
                smPadding='6px'
                smWidth='100%'
              >
                {
                  tabData.map((tab, j) => {
                    return (
                      <LeaderboardTab
                        active={tab === activeTab}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </LeaderboardTab>
                    )

                  })
                }
              </FlexBox>
              <FlexBox width='440px' smWidth='100%' smDirection='row' smGap='16px'>
                <CustomSearchInput
                  input={search}
                  setInput={setSearch}
                  placeholder='Search NFTs'
                  maxWidth='440px'
                />
                {
                  isMobile &&
                  <>
                    {
                      isFilter
                        ?
                        <CustomImage
                          image={UP_FILTER_ICON_IMAGE}
                          width='40px'
                          height='40px'
                          onClick={() => setIsFilter(false)}
                          cursor='pointer'
                        />
                        :
                        <CustomImage
                          image={DOWN_FILTER_ICON_IMAGE}
                          width='40px'
                          height='40px'
                          onClick={() => setIsFilter(true)}
                          cursor='pointer'
                        />
                    }
                  </>
                }
              </FlexBox>
            </FlexBox>


          </FlexBox>

          {
            activeTab === "NFTs" &&
            <NFTsInfo
              isFilter={isFilter}
              setIsFilter={setIsFilter}
              commonNFTs={commonNFTs}
              listedNFTs={listedNFTs}
            />
          }
          {
            activeTab === "Sales" &&
            <SalesInfo />
          }
        </FlexBox>
      </Container>
    </PageWrapper>
  )
}

export default SpecCollection