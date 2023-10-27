import styled from "styled-components";
import { device } from "styles/Breakpoints";

interface ButtonStyle {
  width?: string;
  padding?: string;
  fontSize?: string;
  margin?: string;
  color?: string;
  bgColor?: string;
}
export const CustomFile = styled.label<ButtonStyle>`
  width: 243px;
  height: 243px;
  padding: 14px 0;
  cursor: pointer;
  align-items: center;
  background: ${(props) => props.bgColor ?? '#CECECE'};
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.fontSize || '18px'};
  border: none;
  
  border-radius: 3px;
  color: #6073f6 !important;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  text-decoration: underline;
  line-height: normal;
  /* or 100% */
  display: flex;
  align-items: center;
  text-align: center;
  transition: all 0.1s ease-in;
  
  span{
    padding: 0 20px;
    width: 237px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
  input {
    display: none;
  }
  &:hover {
    background: #ddd;
    color: #000000;
  }
`

export const VoteChoiceText = styled.div`
  border:  #6073f6 1px solid;
  border-radius: 3px;
  padding: 12px 16px;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 442px;
  width: 100%;
`

export const CustomCheckBox = styled.input`
  min-width: 18px;
  min-height: 18px;
`
