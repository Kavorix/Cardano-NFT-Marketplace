import styled, { createGlobalStyle } from 'styled-components';
import DatePicker from "react-datepicker";


export const GlobalStyles = createGlobalStyle`

  *,*::before,*::after{
      margin:0;
      padding:0;
  }

  body{
    font-family: "Inconsolata", sans-serif;
    font-style: normal;

    overflow-x: hidden;
    /* background-color: white; */
    color: black;
    background-color: #E7E7E7;
  }
  div, p, span*{
    font-family: "Inconsolata", sans-serif;
    font-style: normal;

  }
  span{
    &.ended{
      color: #F73737;
    }
  }
  .anchor-info{
    .anchor-links{
      visibility: hidden;
    }
  }
  h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        padding: 0;
        margin: 0;
    }
    button {
        border: none;
        background-color: transparent;
        font-family: inherit;
        padding: 0;
        cursor: pointer;
    }
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
        list-style: none;
    }
    li {
        list-style-type: none;
    }
    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }
    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

  #root {
    position: relative;
  }

  input{
    &:focus{
      outline: none;
    }
  }

  .point{
    color: red;
  }

  .page {
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding-top: 158px;
    padding-bottom: 292px;
    display: block !important;

    /* background: #202020; */
    .main-content{
      padding: 31px 60px 55px 60px;
    }
    &.coming-soon{
      // background: black;
      display: flex !important;
      align-items: center;
      justify-content: center;

    }

    @media screen and (max-width: 1000px) {
      
      padding-bottom: 765px;
    }
    @media screen and (max-width: 850px) {
      .main-content{
        padding: 24px 40px 49px 40px;
      }
      
    }
    @media screen and (max-width: 550px) {
      padding-top: 85px;
      padding-bottom: 765px;

      .main-content{
        padding: 17px 20px 39px 20px;
      }

    }
  }
  .warning{
    color: #F73737;
  }
  .italic{
    font-style: italic;
  }
  .bold{
    font-weight: 700;
  }
  .white{
    color: white;
  }



  button {
    &:disabled{
      cursor: not-allowed;
    }
  }
  .crashr-btn{
    font-weight: 700;
    font-size: 28px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    border: none;
    background: #F4C738;
    border-radius: 10px;
    width: 216px;
    height: 75px;
    align-items:center;
    text-align: center;
    display: flex;
    justify-content: center;
  }



`;

/** Page Container */
interface ContainerType {
  maxWidth?: string;
  marginTop?: string;
  bgColor?: string;
  smBgColor?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  smPaddingTop?: string;
  smPaddingBottom?: string;
  smPaddingLeft?: string;
  smPaddingRight?: string;
  borderRadius?: string;
  marginBottom?: string;
  smTop?: string;
  smMarginTop?: string;
  smMarginBottom?: string;
}

export const Container = styled.div<ContainerType>`
  margin: auto;
  max-width: ${(props) => props.maxWidth || '1350px'}; // Corrected '1141x' to '1141px'
  margin-top: ${(props) => props.marginTop || '0px'};
  padding-left: ${(props) => props.paddingLeft || '15px'};
  padding-right: ${(props) => props.paddingRight || '15px'};
  padding-top: ${(props) => props.paddingTop || '0px'};
  padding-bottom: ${(props) => props.paddingBottom || '0px'};
  border-radius: ${(props) => props.borderRadius};
  margin-bottom: ${(props) => props.marginBottom};
  position: relative;
  background-color: ${(props) => props.bgColor && props.bgColor};
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: ${(props) => props.smPaddingTop || '0px'};
    padding-bottom: ${(props) => props.smPaddingBottom || '50px'};
    padding-left: ${(props) => props.smPaddingLeft };
    padding-right: ${(props) => props.smPaddingRight };
    top: ${(props) => props.smTop};
    margin-top: ${(props) => props.smMarginTop};
    margin-bottom: ${(props) => props.smMarginBottom};
    background-color: ${(props) => props.smBgColor && props.smBgColor};
  }
`

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding-bottom: 692px;
  display: block !important;
  background: var(--red-grey, linear-gradient(180deg, #E7E7E7 0%, #E7E7E7 48.23%, rgba(247, 55, 55, 0.72) 96.4%));
`


export const CustomDatePicker = styled(DatePicker)`
  color: #767676;
  border-radius: 3px;
  border: none;
  font-size: 18px !important;
  font-family: 'Open Sans';
  background-color: #CECECE;
  font-weight: 400;
  text-align: center;
  width: 235px;
  height: 58px;

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{
    padding: 0px 0px 20px 0px;
  }
`