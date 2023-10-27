import styled from "styled-components";
import { device } from "styles/Breakpoints";


const RemainingTime = styled.div`
  color: var(--crashr-red-500, #F73737);
  font-family: Inconsolata;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.105px;
  &.ended{
    color: #1878af;
  }
`

const ShareNow = styled.div`
  color: var(--periwinkle-500, #6073F6);
  font-family: Inconsolata;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.105px;
`

const TicketEntriesTable = styled.div`
  max-width: 505px;
  width: 100%;
  border: #8896f8 1px solid;
  border-radius: 3px;
  margin-top: 13px;
`

const TicketEntriesTableRow = styled.div`
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;
  :not(:last-child){
    border-bottom: 1px solid #8896f8;
  }
`

const TicketTableAddress = styled.div`
  max-width: 147px;
  width: 100%;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden!important;
  text-overflow: ellipsis;
`

const TicketEntriesNumber = styled.div`
  color: #000;
  text-align: right;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const RaffleStats = styled.div`
  border-bottom: 1px #cecece solid;
  display: flex;
  padding-bottom: 26px;
  margin-top: 24px;
`

const RaffleStatGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 10px;
  padding: 0px 24px;
  :not(:last-child){
    border-right: 1px solid #cecece;
  }
  
`

const RaffleStatSubject = styled.div`
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const RaffleStatValue = styled.div`
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const CommonText = styled.div`
  color: #000;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const TicketControl = styled.div`
  display: flex;
  padding: 5px 11px;
  align-items: center;
  gap: 39px;
`
const TicketQuantity = styled.div`
  color: #000;
  text-align: center;
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const TotalPriceValue = styled.div`
  color: var(--periwinkle-500, #6073F6);
  text-align: center;
  font-family: Open Sans;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export {
  CommonText,
  RaffleStatGroup,
  RaffleStatSubject,
  RaffleStatValue,
  RaffleStats,
  RemainingTime,
  ShareNow,
  TicketControl,
  TicketEntriesNumber,
  TicketEntriesTable,
  TicketEntriesTableRow,
  TicketQuantity,
  TicketTableAddress,
  TotalPriceValue
}
