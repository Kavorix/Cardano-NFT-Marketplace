import { getTotalUserNumber } from 'api/api'
import { FlexBox } from 'components/common/FlexBox'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { device } from 'styles/Breakpoints'

const StatValue = styled.div`
  color: #282828;
  text-align: center;
  font-family: Inconsolata;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.75px; 
  @media ${device.sm} {
    font-size: 28px;
  }
`

const StatSubject = styled.div`
  text-align: center;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #282828;
  @media ${device.sm} {
    font-size: 14px;
  }
`

const temp_data = [
  {
    subject: "Faster Sweeping",
    value: "10X",
  },
  {
    subject: "Transactions",
    value: "500",
  },
  {
    subject: "Tokens",
    value: 53,
  },
]

const GlobalStats = () => {
  const [totalUser, setTotalUser] = useState<number>()
  const getUserData = useCallback(
    async () => {
      const data = await getTotalUserNumber()
      setTotalUser(data)
    }, [])

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <FlexBox smDirection='row' gap="49px" flexWrap='wrap' smGap='6px'>
      {
        temp_data.map((item, index) => {
          return (
            <FlexBox
              key={index}
              width='279px'
              height='163px'
              justifyContent='center'
              alignItems='center'
              direction='column' gap="18px" bgColor='#D7DCFD' boxShadow='0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
              smWidth='45%'
              smHeight='92px'
            >
              <StatValue>{item.value}</StatValue>
              <StatSubject>{item.subject}</StatSubject>
            </FlexBox>
          )
        })
      }
      <FlexBox
        width='279px'
        height='163px'
        justifyContent='center'
        alignItems='center'
        direction='column' gap="18px" bgColor='#D7DCFD' boxShadow='0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
        smWidth='45%'
        smHeight='92px'
      >
        <StatValue>{totalUser ? totalUser : '  '}</StatValue>
        <StatSubject>{`Total Users`}</StatSubject>
      </FlexBox>

    </FlexBox>
  )
}

export default GlobalStats