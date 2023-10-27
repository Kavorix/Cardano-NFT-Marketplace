import CustomImage from 'components/common/CustomImage'
import { FlexBox } from 'components/common/FlexBox'
import { DEFAULT_NFT_IMAGE } from 'constants/image.constants'
import React from 'react'
import styled from 'styled-components'

const tableData = ["", "", "", "", "", "", "",]

const TableHeader = styled.div`
  padding: 10px 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-family: Inconsolata;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.28px;
  display: flex;
  width: 100%;
  gap: 24px;
  div:nth-child(1){
    width: 5%;
  }
  div:nth-child(2){
    width: 10%;
  }
  div:nth-child(3){
    width: 5%;
  }
  div:nth-child(4){
    width: 30%;
  }
  div:nth-child(5){
    width: 30%;
  }
  div:nth-child(6){
    width: 20%;
  }  
`

const TableRow = styled.div`
  padding: 16px;
  width: 100%;
  border-bottom: #7a7a7a 1px solid;
  background-color: white;
  display: flex;
  gap: 24px;
  align-items: center;
  div:nth-child(1){
    width: 5%;
  }
  div:nth-child(2){
    width: 10%;
    color: black;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 400;
  }
  div:nth-child(3){
    color: black;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 5%;
  }
  div:nth-child(4){
    color: #6073F6;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 30%;
  }
  div:nth-child(5){
    color: #6073F6;
    font-size: 21px;
    font-family: Open Sans;
    font-weight: 600;
    width: 30%;
  }
  div:nth-child(6){
    width: 20%;
  }  
`
const SalesInfo = () => {
  return (
    <FlexBox direction='column'>
      <TableHeader>
        <div></div>
        <div>NFT</div>
        <div>PRICE</div>
        <div>FROM</div>
        <div>TO</div>
        <div>TIME</div>
      </TableHeader>
      {
        tableData.map((item, index) => {
          return (
            <TableRow>
              <div>
                <CustomImage
                  image={DEFAULT_NFT_IMAGE}
                  width='56px'
                  height='56px'
                />
              </div>
              <div>NFT Name</div>
              <div>₳80 </div>
              <div>addr1qxcr..mlqdj2hql</div>
              <div>addr1qxcr..mlqdj2hql</div>
              <div>a minute ago</div>
            </TableRow>
          )
        })
      }
    </FlexBox>
  )
}

export default SalesInfo