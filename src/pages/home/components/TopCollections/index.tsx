import axios from 'axios';
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton';
import CustomText from 'components/common/CustomText';
import { FlexBox } from 'components/common/FlexBox';
import { COLLECTION_IMAGES, MARKET_DOWN_ICON, MARKET_UP_ICON } from 'constants/image.constants';
import { getExactImageFormat, getVolumeExpression } from 'hooks/function';
import { isArray } from 'lodash';
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components';
import { TopCollectionRow, CollectionTableHeader, TimeTab, TopCollectionBody } from './index.styled';
import { useMedia } from 'react-use';
import { ThreeDots } from 'react-loader-spinner'
import CustomImage from 'components/common/CustomImage';
const tabs = [
  {
    value: "24h",
    tag: "24h"
  },
  {
    value: "7d",
    tag: "7d"
  },
  {
    value: "30d",
    tag: "30d"
  },
  {
    value: "All",
    tag: "all"
  },
]

const TopCollections = () => {
  const [collectionData, setCollectionData] = useState([])
  const [activeTab, setActiveTab] = useState("all")
  const [loading, setLoading] = useState<boolean>(false)

  const isMobile = useMedia('(max-width: 550px)');


  // @ts-ignore
  const theme: ThemeProps = useTheme()

  const getCollectionData = async () => {
    setLoading(true)
    const url = "https://api.opencnft.io/2/market/rank/collection?time_range=" + activeTab
    try {
      const { data } = await axios.get(
        url,
        {
          headers: {
            'X-Api-Key': process.env.REACT_APP_OPENCNFT_API_KEY
          }
        }
      );
      if (data) {
        setLoading(false)
        setCollectionData(data.ranking)
      }


    } catch (err) {
      setLoading(false)
      console.log("Error getCollectionData", err);
    }
  }

  useEffect(() => {
    getCollectionData()
  }, [activeTab])

  return (
    <FlexBox direction='column'>
      <FlexBox justifyContent='space-between'>
        <FlexBox smDirection='row' smJustifyContent='space-between' smAlignItems='center' justifyContent='start'>
          <CustomText
            text={`Top Collections`}
            fontSize='50px'
            fontFamily='700'
            letterSpacing='-0.75px'
            marginBottom='14px'
            smFontSize='28px'
          />
          {
            isMobile && <CustomRouterLinkButton
              text="View All"
              link="/collections"
              fontFamily={theme.fonts.openSans}
              fontSize='18px'
              fontWeight='600'
              color='#6073F6'
              smWidth='61px'
              smFontSize='16px'
            />
          }
        </FlexBox>
        <FlexBox smDirection='row' width='default' gap="22px" alignItems='center' smWidth='100%'>
          <FlexBox smDirection='row' width='default' padding='6px' smBgColor='white' alignItems='center' smMarginBottom='8px' smWidth='100%'>
            {
              tabs.map((tab, i) => {
                return (
                  <TimeTab key={i} active={tab.tag === activeTab} onClick={() => {
                    setActiveTab(tab.tag)
                  }}>
                    {tab.value}
                  </TimeTab>
                )
              })
            }
          </FlexBox>
          {
            !isMobile &&
            <CustomRouterLinkButton
              text="View All"
              link="/collections"
              fontFamily={theme.fonts.openSans}
              fontSize='18px'
              fontWeight='600'
              color='#6073F6'
            />

          }
        </FlexBox>
      </FlexBox>
      {

        <CollectionTableHeader>
          <div></div>
          <div></div>
          <div>COLLECTION</div>
          <div>VOLUME</div>
          <div>FLOOR</div>
          {
            !isMobile && <div>OWNERS</div>
          }

        </CollectionTableHeader>
      }

      {
        loading ?
          <FlexBox smJustifyContent='center' smAlignItems='center'>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#f73737"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </FlexBox>
          :
          <TopCollectionBody>
            {

              collectionData && collectionData.length > 0 && collectionData.slice(0, 12).map((collection, index) => {
                return (
                  <TopCollectionRow
                    key={index}
                    to={"/collections/" + collection.policies[0]}
                  >
                    <div>{index + 1}</div>
                    <div>
                      <img src={collection &&
                        (COLLECTION_IMAGES.hasOwnProperty(collection.policies[0])
                          ?
                          COLLECTION_IMAGES[collection.policies[0]].image
                          :
                          getExactImageFormat(collection.thumbnail)
                        )
                      } alt="img-collection" />
                    </div>
                    <div>{collection.name}</div>

                    <div>
                      <p>{getVolumeExpression(collection.volume)}</p>
                      <p className='active'>
                        <CustomImage image={MARKET_UP_ICON} width='11.7px' height='15.1px' smWidth='8px' smHeight='9.67px' />
                        20.21%
                      </p>
                    </div>
                    <div>
                      <p>₳ {getVolumeExpression(collection.floor_price)}</p>
                      <p>
                        <CustomImage image={MARKET_DOWN_ICON} width='11.7px' height='11.1px' smWidth='8px' smHeight='7.67px' />
                        20.21%
                      </p>
                    </div>
                    {
                      !isMobile &&
                      <div>
                        <p>{isArray(collection.total_owners) ? collection.total_owners[0] : collection.total_owners}</p>
                        <p className='active'>
                          <CustomImage image={MARKET_UP_ICON} width='11.7px' height='15.1px' smWidth='8px' smHeight='9.67px' />
                          20.21%
                        </p>
                      </div>
                    }

                  </TopCollectionRow>

                )
              })
            }</TopCollectionBody>

      }


    </FlexBox>
  )
}

export default TopCollections