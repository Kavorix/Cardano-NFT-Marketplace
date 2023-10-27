import { useState } from 'react'
import { Container } from 'styles/GlobalStyles'
import { CustomSwiper, CustomSwiperSlide, HeroSlideShowStyle, SlideShow, SlideShowSymbol } from './index.styled'
import { useMedia } from 'react-use'
import { SLIDE_SHOW_DATA } from 'constants/slideshow.constants';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import CustomText from 'components/common/CustomText';
import CustomImage from 'components/common/CustomImage';
import { FlexBox } from 'components/common/FlexBox';
import { H1 } from 'components/typography';
import CustomLinkButton from 'components/common/CustomLinkButton';

const HeroSlideShow = () => {
  const [activeShow, setActiveShow] = useState<number>(0)
  const isMobile = useMedia('(max-width: 600px)');

  const onSlideChange = (swiper) => {
    setActiveShow(swiper.activeIndex)
  }

  return (
    <HeroSlideShowStyle>
      <Container maxWidth='1416px' marginTop='54px' marginBottom='44px'
        bgColor={`#f3f3f3`}
        borderRadius='3px'
        paddingTop='26px'
        paddingBottom='40px'
        paddingLeft='48px'
        paddingRight='68px'
        smPaddingLeft='0px' smPaddingRight='0px'
        smPaddingTop='0px'
        smPaddingBottom='0px'
        className="mx-auto"
        smMarginTop='0px'
      >
        <Container maxWidth='1320px'
          paddingLeft='0px' paddingRight='0px'
          smPaddingLeft='0px' smPaddingRight='0px' smPaddingTop='0px' smPaddingBottom='0px'>
          <CustomSwiper
            spaceBetween={30}
            effect={'fade'}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}

            // pagination={{
            //   clickable: true,
            // }}
            navigation={false}
            modules={[EffectFade, Autoplay, Pagination, Navigation,]}
            className="mySwiper"
            onSlideChange={onSlideChange}
          >
            {
              SLIDE_SHOW_DATA.map((item, index) => {
                return (
                  <CustomSwiperSlide>
                    <SlideShow>
                      <FlexBox direction='column' maxWidth='578px'>
                        <CustomImage
                          image={
                            isMobile ? item.mobileImage : item.image
                          }
                          width='578px'
                          height='400px'
                          smHeight='auto'
                        />

                        <FlexBox gap="12px" smDirection='row' justifyContent='start' marginTop='25px' smHeight='default' smJustifyContent='start' smPaddingLeft='16px'>
                          {
                            SLIDE_SHOW_DATA.map((slide, index) => {
                              return (
                                <SlideShowSymbol
                                  active={index === activeShow}
                                  onClick={() => { setActiveShow(index) }}
                                />
                              )
                            })
                          }
                        </FlexBox>

                      </FlexBox>
                      <FlexBox direction='column' gap="33px" smGap='12px' smPadding='16px' paddingTop='29.5px'
                        maxWidth='640px' paddingLeft='0px' paddingRight='0px'>
                        <CustomText
                          text={`FEATURE UPDATE`}
                          color='#B92929'
                          fontWeight='700'
                          letterSpacing='1.29px'
                          fontSize='21px'
                        />
                        <H1 className='text-nowrap'>
                          {item.title}
                        </H1>
                        <CustomText
                          text={
                            item.desc
                          }
                          maxWidth='640px'
                          // height='140px'
                          fontSize='21px'
                          fontWeight='400'
                          fontFamily='Open Sans'
                          smFontSize='16px'
                        />
                        <CustomLinkButton
                          text='Learn More'
                          fontSize='21px'
                          fontWeight='600'
                          width='187px'
                          height='64px'
                          smFontSize='16px'
                          smWidth='210px'
                          smHeight='42px'
                          link  = {item.link}
                        />
                      </FlexBox>
                    </SlideShow>
                  </CustomSwiperSlide>
                )
              })
            }
          </CustomSwiper>


        </Container>
      </Container>

    </HeroSlideShowStyle>

  )
}

export default HeroSlideShow