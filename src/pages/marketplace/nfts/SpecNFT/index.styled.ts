import styled from "styled-components"

export const HistoryTableHeader = styled.div`
  padding: 10px 24px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 21px;
  font-family: Inconsolata;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.68px;
  display: flex;
  max-width: 1210px;
  width: 100%;
  div:nth-child(1){
    width: 15%;
  }
  div:nth-child(2){
    width: 10%;
  }
  div:nth-child(3){
    width: 30%;
  }
  div:nth-child(4){
    width: 30%;
  }
  div:nth-child(5){
    width: 15%;
  }
`

export const HistoryTableRow = styled.div`
  padding: 6px 24px;
  max-width: 1210px;
  width: 100%;
  border-bottom: #7a7a7a 1px solid;
  background-color: white;
  display: flex;
  align-items: center;
  div:nth-child(1){
    color: black;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 400;
    width: 15%;
  }
  div:nth-child(2){
    color: black;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 10%;
  }
  div:nth-child(3){
    color: #6073F6;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 30%;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
  }
  div:nth-child(4){
    color: #6073F6;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 30%;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
  }
  div:nth-child(5){
    color: black;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 15%;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
  }
`

export const SelectButtonGroup = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid var(--periwinkle-500, #6073F6);
  background: var(--periwinkle-100, linear-gradient(0deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.88) 100%), #6073F6);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const SelectButton = styled.div`
  display: flex;
  height: 48px;
  padding: 8px 16px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  box-shadow: 0px 1px 4px -2px rgba(255, 255, 255, 0.50);
  color: var(--periwinkle-500, #6073F6);
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  :not(:last-child) {
    border-bottom: 1px solid var(--periwinkle-300, #6073F6);
  }
  &:hover{
    background-color: #eeeeee;
  }
  @media screen and (max-width: 768px) {
    height: 42px;
    width: 100%;
  }

`
