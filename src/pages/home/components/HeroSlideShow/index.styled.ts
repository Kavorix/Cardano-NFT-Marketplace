import styled from "styled-components";
import { device } from "styles/Breakpoints";
import { SwiperSlide } from "swiper/react";
import { Swiper } from 'swiper/react';



interface SlideShowSymbolProps {
  active: boolean;
}
export const SlideShowSymbol = styled.div<SlideShowSymbolProps>`
  width: 36px;
  height: 6px;
  border-radius: 10px;
  background-color: ${props => props.active ? '#CECECE' : '#767676'};
  cursor: pointer;
  transition: 0.6s ease;
  &:hover{
    background-color: #ddd;
  }
`

export const SlideShow = styled.div`
  display: flex;
  align-items: start;
  gap: 82px;
  background-color: #f3f3f3;
  @media ${device.sm} {
    flex-direction: column;
    gap: 21px;
  }
`

export const HeroSlideShowStyle = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CustomSwiperSlide = styled(SwiperSlide)`
  background: #f3f3f3;
`

export const CustomSwiper = styled(Swiper)`
  background: #f3f3f3;
`