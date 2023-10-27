import styled from "styled-components";
import { device } from "styles/Breakpoints";

export const Font24 = styled.p`
  font-size: 24px;
  font-family: Inconsolata;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  @media ${device.sm} {
    font-size: 18px;
    letter-spacing: 1.44px;
  }
`

export const H1 = styled.h1`
  font-size: 67px;
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.005px;
  color: black;
  @media ${device.sm} {
    font-size: 38px;
    letter-spacing: 0px;
    /* margin-top: -40px; */
  }
`

export const H2 = styled.h2`
  font-size: 50px;
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: black;
  @media ${device.sm} {
    font-size: 38px;
    letter-spacing: -0.57px;
  }
`

export const H3 = styled.h3`
  font-size: 38px;
  font-family: Inconsolata;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: black;
  @media ${device.sm} {
    font-size: 38px;
    letter-spacing: -0.57px;
  }
`



interface H7Style{
  color?: string;
}
export const H7 = styled.h6<H7Style>`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.color? props.color: 'black'};
  @media ${device.sm} {
    font-size: 14px;
  }
`

export const H8 = styled.h6<H7Style>`
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.color? props.color: 'black'};
  @media ${device.sm} {
    font-size: 14px;
  }
`