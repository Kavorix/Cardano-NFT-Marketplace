import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "styles/Breakpoints";

export const TopCollectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  /* max-height: 738px; */
  @media screen and (max-width: 550px) {
      gap: 4px;
  }
  ::-webkit-scrollbar {
    width: 7px; /* set width of scrollbar */
    height: 128px;
  }
  
  ::-webkit-scrollbar-track {
    background:none; /* set background color of track */
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #f3f3f3; /* set background color of thumb */
    border-radius: 6px; /* set border radius of thumb */
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* set background color of thumb on hover */
  }
`

export const TopCollectionRow = styled(Link)`
  max-width: 1320px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.50);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  text-decoration: none;
  color: black;
  padding: 12px 24px 12px 42px;
  
  &:hover{
    background-color: #ddd;
    cursor: pointer;
  }
  @media screen and (max-width: 860px) {
    padding: 6px 12px;
  }
  @media screen and (max-width: 550px) {
    padding: 4px 8px;
  }
  div:nth-child(1){
    padding: 0px 9px;
    width: 5%;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
      width: 10%;
    }
  }
  div:nth-child(2){
    padding: 0px 9px;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
    }
    img{
      width: 80px;
      height: 80px;
      border-radius: 3px;
    }
    @media screen and (max-width: 860px) {
      img{
        width: 60px;
        height: 60px;
      }
    }
    @media screen and (max-width: 550px) {
      img{
        width: 40px;
        height: 40px;
      }
    }
  }
  div:nth-child(3){
    padding: 0px 9px;
    max-width: 35%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
    color: #000;

    font-family: Inconsolata;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    @media screen and (max-width: 860px) {
      font-size: 18px;
    }
    @media screen and (max-width: 550px) {
      font-size: 14px;
      padding: 0px 4px;
    }
  }
  div:nth-child(4){
    padding: 0px 9px;
    width: 15%;
    display: flex;
    flex-direction: column;
    
    gap: 3px;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
      width: 20%;
    }
    p:nth-child(1){
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: 100%;
      text-align: center;
      text-wrap: nowrap;
      @media screen and (max-width: 860px) {
        font-size: 16px;
      }
      @media screen and (max-width: 550px) {
        font-size: 12px;
      }
    }
    p:nth-child(2){
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      text-align: center;
      color: #FE6126;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      &.active{
        color: #40A140;
      }
      @media screen and (max-width: 860px) {
        font-size: 14px;
      }
      @media screen and (max-width: 550px) {
        font-size: 11px;
      }
    }
  }
  div:nth-child(5){
    padding: 0px 9px;
    width: 15%;
    display: flex;
    flex-direction: column;
    
    gap: 3px;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
      width: 20%;
    }
    p:nth-child(1){
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: 100%;
      text-align: center;
      text-wrap: nowrap;
      @media screen and (max-width: 860px) {
        font-size: 16px;
      }
      @media screen and (max-width: 550px) {
        font-size: 12px;
      }
    }
    p:nth-child(2){
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      text-align: center;
      color: #FE6126;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      &.active{
        color: #40A140;
      }
      @media screen and (max-width: 860px) {
        font-size: 14px;
      }
      @media screen and (max-width: 550px) {
        font-size: 11px;
      }
    }
  }
  div:nth-child(6){
    padding: 0px 9px;
    width: 15%;
    display: flex;
    flex-direction: column;
    gap: 3px;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
    }
    p:nth-child(1){
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      width: 100%;
      text-align: center;
      text-wrap: nowrap;
      @media screen and (max-width: 860px) {
        font-size: 16px;
      }
      @media screen and (max-width: 550px) {
        font-size: 12px;
      }
    }
    p:nth-child(2){
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      width: 100%;
      text-align: center;
      color: #FE6126;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      &.active{
        color: #40A140;
      }
      @media screen and (max-width: 860px) {
        font-size: 14px;
      }
      @media screen and (max-width: 550px) {
        font-size: 11px;
      }
    }
  }
  
`;

interface MarketPercentType {
  up?: boolean;
}
export const MarketPercent = styled.div<MarketPercentType>`
  color: ${(props) => props.up ? '#40a140' : '#fe6126'};
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const CollectionTableHeader = styled.div`
  display: flex;
  font-family: Inconsolata;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.24px;
  text-transform: uppercase;
  max-width: 1320px;
  color: #767676;
  width: 100%;
  margin-bottom: 10px;
  padding: 12px 24px 12px 42px;
  @media screen and (max-width: 860px) {
    padding: 6px 12px;
    font-size: 16px;
  }
  @media screen and (max-width: 550px) {
    padding: 4px 8px;
    font-size: 12px;
    letter-spacing: 0.96px;
  }
  div:nth-child(1){
    padding: 0px 9px;
    width: 5%;
    @media screen and (max-width: 550px) {
      width: 10%;
      padding: 0px 4px;
    }
  }
  div:nth-child(2){
    padding: 0px 9px;
    width: 15%;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
    }    
  }
  div:nth-child(3){
    padding: 0px 9px;
    width: 35%;
    @media screen and (max-width: 550px) {
      padding: 0px 4px;
    }
  }
  div:nth-child(4){
    padding: 0px 9px;
    width: 15%;
    text-align: center;
    @media screen and (max-width: 550px) {
      width: 20%;
      padding: 0px 4px;
    }
  }
  div:nth-child(5){
    padding: 0px 9px;
    width: 15%;
    text-align: center;
    @media screen and (max-width: 550px) {
      width: 20%;
      padding: 0px 4px;
    }
  }
  div:nth-child(6){
    padding: 0px 9px;
    width: 15%;
    text-align: center;

  }
`

interface TimeTabProps {
  active: boolean;
}
export const TimeTab = styled.div<TimeTabProps>`
  color: #000;
  text-align: center;
  justify-content: center;
  font-family: Inconsolata;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 82px;
  height: 39px;
  display: flex;
  align-items: center;
  background-color: ${props => props.active ? '#B0B9FB' : 'none'};
  cursor: pointer;
  &:hover{
    background-color: #ccc;
  }
  @media ${device.sm} {
    font-size: 16px;
    border-radius: 3px;
    width: 25%;
    height: 28px;
  }
`