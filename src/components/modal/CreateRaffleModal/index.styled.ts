import styled from "styled-components";
import { device } from "styles/Breakpoints";

export const CreateRaffleTable = styled.div`
  max-width: 420px;
  width: 100%;
  border-radius: 3.6px;
  border-radius: 3.6px;
  border: 1px solid #6073F6;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`
export const CreateRaffleTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6.5px 12px;
  :not(:last-child) {
    border-bottom: #8896f8 1px solid;
  }
  @media ${device.sm} {
    padding: 7px 0px 4px 0px;
  }
`

export const CreateRaffleTableSubject = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans';
  @media ${device.sm} {
    font-size: 12px;
  }
`

export const CreateRaffleTableValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Open Sans';
  &.red{
    color: #f73737;
  }
  @media ${device.sm} {
    font-size: 12px;
  }
`

export const AcceptText = styled.div`
  color: #000;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  b{
    color: #f73737;
  }
`


