import styled from 'styled-components'
import { device } from 'styles/Breakpoints';

interface BlackHeaderBannerProps{
  height?: string;
}

const BlackHeaderBannerImage = styled.div<BlackHeaderBannerProps>`
  width: 100vw;
  height: ${props => props.height ? props.height : '294px'};
  background: #202020;
  @media ${device.sm} {
    height: 220px;
  }
`

const BlackHeaderBanner = (
  {
    height
  }: BlackHeaderBannerProps
) => {
  return (
    <BlackHeaderBannerImage height={height}>

    </BlackHeaderBannerImage>
  )
}

export default BlackHeaderBanner