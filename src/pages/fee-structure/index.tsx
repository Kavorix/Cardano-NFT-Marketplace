import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { H1 } from 'components/typography'
import { Container, PageWrapper } from 'styles/GlobalStyles'

const feeData = [
  {
    subject: "Marketplace",
    data: [
      {
        value: "1.75%",
        term: "Service Fee"
      },
      {
        value: "0.24%",
        term: "Liquidity Fee"
      }
    ]
  },
  {
    subject: "Raffles",
    data: [
      {
        value: "2 ADA",
        term: "Gas Fee"
      },
      {
        value: "3%",
        term: "Raffle Pool"
      }
    ]
  },
  {
    subject: "Voting",
    data: [
      {
        value: "10 ADA",
        term: "Per Day"
      }
    ]
  }
]

const FeeStructure = () => {
  return (
    <PageWrapper>
      <Container paddingTop='100px'>
        <FlexBox direction='column' gap="72px">
          <FlexBox direction='column' gap='25px'>
            <H1>
              Fee Structure
            </H1>
            <CustomText
              fontFamily='Open Sans'
              fontSize='21px'
              fontWeight='400'
              text={`Please refer below for more information on our fee structure.`}
            />
          </FlexBox>

          <FlexBox smDirection='row' flexWrap='wrap' gap='64px'>
            {
              feeData.map((item, index) => {
                return (
                  <FlexBox direction="column" width='395px' key={index}>
                    <CustomText
                      borderRadius="3px 3px 0px 0px"
                      bgColor="#b92929"
                      text={item.subject}
                      color="white"
                      fontSize="38px"
                      fontWeight="700"
                      padding="27px 37px"
                      width="100%"
                      alignItems='center'
                      justifyContent='center'
                    />
                    <FlexBox
                      direction='column'
                      borderRadius="0px 0px 3px 3px"
                      bgColor="#E7E7E7"
                      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
                      color="black"
                      width="100%"
                      height='200px'
                      gap='28px'
                      fontSize="28px"
                    >
                      {
                        item.data.map((iii, j) => {
                          return (
                            <FlexBox smDirection='row' key={j}>
                              <CustomText
                                text={iii.value}
                                fontFamily="Open Sans"
                                fontWeight="700"
                              />
                              &nbsp;
                              <CustomText
                                text={iii.term}
                                fontFamily="Open Sans"
                                fontWeight="400"
                              />
                            </FlexBox>
                          )
                        })
                      }
                    </FlexBox>
                  </FlexBox>
                )
              })
            }
          </FlexBox>
        </FlexBox>
      </Container>
    </PageWrapper>
  )
}

export default FeeStructure