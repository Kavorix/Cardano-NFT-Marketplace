import styled from "styled-components";

interface LeaderboardTabProps {
  active: boolean;
}

export const LeaderboardTab = styled.div<LeaderboardTabProps>`
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
  &:hover{
    background-color: #ddd;
  }
  &:active{
    background-color: #AFB9FA;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`

export const TableHeader = styled.div`
  max-width: 1302px;
  width: 100%;
  display: flex;
  color: black;
  font-size: 45px;
  font-family: Inconsolata;
  font-weight: 700;
  div:nth-child(1){
    width: 15%;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  div:nth-child(2){
    width: 65%;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  div:nth-child(3){
    width: 20%;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const TableRow = styled.div`
  max-width: 1302px;
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  font-size: 45px;
  font-family: Inconsolata;
  font-weight: 700;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: #B6B6B6 1px solid;
  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }
  &:hover{
    background-color: #ddd;
  }
  div:nth-child(1){
    color: black;
    font-size: 18px;
    font-family: Open Sans;
    font-weight: 400;
    width: 15%;
    /* padding-left: 20px; */
    @media screen and (max-width: 768px) {
      font-size: 12px;
      padding-left: 10px;
    }
  }
  div:nth-child(2){
    color: #6073F6;
    font-size: 18px;
    font-family: Open Sans;
    font-weight: 400;
    width: 65%;
    /* padding-left: 20px; */
    display: flex;
    gap: 25px;
    align-items: center;
    padding-right: 10px;
    a{
      white-space: nowrap;
      overflow: hidden!important;
      text-overflow: ellipsis;
      width: 292px;
      text-decoration: none;
      &:hover{
        color: black;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
      a{
        color: black;
      }
    }
  }
  div:nth-child(3){
    color: rgba(0, 0, 0, 0.75);
    font-size: 18px;
    font-family: Open Sans;
    font-weight: 400;
    width: 20%;
    /* padding-left: 20px; */
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`