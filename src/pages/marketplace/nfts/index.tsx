import HeaderBanner from 'components/HeaderBanner'
import MarketListedNFTCard from 'components/card/MarketListedNFTCard'
import CustomImage from 'components/common/CustomImage'
import CustomInput from 'components/common/CustomInput'
import CustomSearchInput from 'components/common/CustomSearchInput'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { H2 } from 'components/typography'
import { BLACK_DOWN_ICON, BLACK_UP_ICON, DOWN_FILTER_ICON_IMAGE, MARKETPLACE_HEADER_IMAGE, UP_FILTER_ICON_IMAGE } from 'constants/image.constants'
import { useGlobalContext } from 'context/GlobalContext'
import { useState } from 'react'
import { useMedia } from 'react-use'
import { Container, PageWrapper } from 'styles/GlobalStyles'
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



const AllNFTs = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false)
  const [subFiltersOpen, setSubFiltersOpen] = useState<boolean[]>(
    [false, false, false]
  )
  const [search, setSearch] = useState<string>('');
  const [search2, setSearch2] = useState<string>('');
  const { listedAllNFTs } = useGlobalContext()

  const isMobile = useMedia('(max-width: 768px)');

  return (
    <PageWrapper>
      <HeaderBanner
        image={MARKETPLACE_HEADER_IMAGE}
      />
      <Container paddingTop='12px' smMarginTop='-30px'>
        <FlexBox direction='column' gap='32px'>
          <H2>
            All NFTs
          </H2>
          <FlexBox smDirection='row' gap="20px" justifyContent='start'>
            {
              !isMobile &&
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
            <CustomSearchInput
              input={search}
              setInput={setSearch}
              placeholder='Search Collections'
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
                gap={`52px ${isFilter ? '70px' : '90px'}`}
                justifyContent='center'
                alignItems='center'
                smJustifyContent='center'
                smAlignItems='center'
                smGap='22px'
              >
                {
                  listedAllNFTs && Object.values(listedAllNFTs).map((nft, index) => {
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

              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </PageWrapper>
  )
}

export default AllNFTs