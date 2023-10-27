import { FlexBox } from 'components/common/FlexBox'
import { Container, PageWrapper } from 'styles/GlobalStyles'
import AboutText from './components/AboutText'
import LearnMore from './components/LearnMore'
import OurValues from './components/OurValues'

const About = () => {
  return (
    <PageWrapper>
      <Container paddingTop='100px'>
        <FlexBox direction='column' gap="50px">
          <AboutText />
          <LearnMore />
          <OurValues />
        </FlexBox>
      </Container>
    </PageWrapper>
  )
}

export default About