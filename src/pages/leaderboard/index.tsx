import CustomImage from 'components/common/CustomImage'
import { FlexBox } from 'components/common/FlexBox'
import { H1 } from 'components/typography'
import { useEffect, useState } from 'react'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import { LeaderboardTab, TableHeader, TableRow } from './index.styled'
import { getUserPoints } from 'api/api'
import { ThreeDots } from 'react-loader-spinner'
import { useMedia } from 'react-use'



const tabData = ["Season", "All Time"];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<string>("Season");
  const [pointsData, setPointsData] = useState();
  const [loading, setLoading] = useState<boolean>(false)
  const isMobile = useMedia('(max-width: 768px)');
  const getLeaderboardData = async () => {
    setLoading(true)
    const data = await getUserPoints()
    if (data) {
      setLoading(false)
      setPointsData(data)
    }
  }

  useEffect(() => {
    getLeaderboardData()
  }, [])

  return (
    <PageWrapper>
      <Container paddingTop='92px' smPaddingTop='40px'>
        <FlexBox direction='column' gap="44px" marginBottom='33px'>
          <H1>
            Leaderboard
          </H1>
          <FlexBox justifyContent='start' gap="12px" padding='6px' borderRadius='3px'
            border='2px solid #8896F8' width='default' smDirection='row' smPadding='6px' smGap='0px' smWidth='100%'>
            {
              tabData.map((tab, j) => {
                return (
                  <LeaderboardTab
                    active={tab === activeTab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </LeaderboardTab>
                )

              })
            }
          </FlexBox>
        </FlexBox>

        <TableHeader>
          <div>Rank</div>
          <div>Wallet</div>
          <div>Points</div>
        </TableHeader>
        {
          loading ?
            <FlexBox smJustifyContent='center' smAlignItems='center'>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#f73737"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
              />
            </FlexBox>
            :
            <>
              {
                // @ts-ignore
                pointsData && pointsData.map((item, index) => {
                  return (
                    <TableRow>
                      <div>
                        {
                          index + 1
                        }
                      </div>
                      <div>
                        {
                          !isMobile &&
                          <CustomImage
                            image={item.avatar}
                            width='50px'
                            height='50px'
                            borderRadius='3px'
                          />
                        }
                        <a href={`/users/` + item.id} target='_blank' rel="noreferrer">{item.id === item.username ? item.id : (item.username === '' ? item.id : item.username)}</a>
                      </div>
                      <div>{item.points + ` pts`}</div>
                    </TableRow>
                  )
                })
              }
            </>

        }

      </Container>
    </PageWrapper>
  )
}

export default Leaderboard