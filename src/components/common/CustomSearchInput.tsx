import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface CustomSearchInputType {
  placeholder?: string;
  bgColor?: string;
  input?: any;
  setInput?: any;
  maxWidth?: string;
  height?: string;
  bgPosition?: string;
}

const SearchInputStyle = styled.input<CustomSearchInputType>`
  width: 100%;
  max-width: ${(props) => props.maxWidth ? props.maxWidth : '440px'};
  height: ${(props) => props.height ? props.height : '48px'};
  box-shadow: 0px 2px 9px -4px rgba(0, 0, 0, 0.19);
  box-sizing: border-box !important;
  border: none;
  background: ${(props) => props.bgColor};
  box-shadow: 0px 2px 9px -4px rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #9e9e9e !important;
  padding: 12px 16px 12px 47px !important;
  background-image: url('/assets/images/icons/search.svg');
  background-position:  ${(props) => props.bgPosition ? props.bgPosition : '12px 13px'};
  background-size: 24px 24px;
  background-repeat: no-repeat;
  ::placeholder {
    color: #9e9e9e;
  }
  &:focus {
    border: none;
    outline: none;
  }

  @media screen and (max-width: 550px) {
    height: 42px;
    font-size: 18px;
    line-height: 24px;
    background-size: 22px 22px;
    padding: 12px 12px 12px 48px !important;
    background-position: 14px 11px;
  }
`;

const CustomSearchInput: React.FC<CustomSearchInputType> = ({
  placeholder,
  bgColor,
  setInput,
  input,
  maxWidth,
  height,
  bgPosition
}) => {
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value); 
  };

  return (
    <SearchInputStyle
      type="text"
      placeholder={placeholder}
      onChange={handleInputChange}
      value={input}
      bgColor={bgColor}
      maxWidth={maxWidth}
      height={height}
      bgPosition = {bgPosition}
      autoFocus
    />
  );
};

export default CustomSearchInput;
