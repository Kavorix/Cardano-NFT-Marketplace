import styled from 'styled-components'
import { device } from 'styles/Breakpoints';

interface HeaderBannerProps{
  image: string;
  height?: string;
}

const HeaderBannerImage = styled.div<HeaderBannerProps>`
  width: 100vw;
  height: ${props => props.height ? props.height : '200px'};
  /* background-image: url(${props => props.image}); */
  background-image: linear-gradient(to bottom, rgba(247, 247, 247, 0), rgba(247, 247, 247, 0.9)), url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.sm} {
    height: 220px;
  }
`

const HeaderBanner = (
  {
    image,
    height
  }: HeaderBannerProps
) => {
  return (
    <HeaderBannerImage image={image} height={height}>

    </HeaderBannerImage>
  )
}

export default HeaderBanner