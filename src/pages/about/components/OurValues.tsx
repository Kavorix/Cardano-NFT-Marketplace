import CustomText from "components/common/CustomText"
import { FlexBox } from "components/common/FlexBox"

const data = [
  {
    subject: "Our Values",
    value: "At Crashr, transparency through blockchain technology is at our core. We're committed to filling the gaps in the ecosystem. Fairness and practical use cases drive our platform's growth. We empower users with efficient web3 tools at some of the most competitive fees in the industry.",
  },
  {
    subject: "Our Vision",
    value: "In the dynamic landscape of blockchain, Crashr envisions a marketplace where advanced trading seamlessly intertwines with enriched social interactions. We see a world where traders and users come together in unity, leveraging transparency and innovation. As we progress, our focus remains on creating a cohesive ecosystem, pioneering the next era of blockchain commerce and fostering genuine community connections.",
  },
  {
    subject: "Our Mission",
    value: "At Crashr, we are committed to reshaping the marketplace by integrating advanced trading with the spirit of social interaction. Our platform not only bridges the gap between traders and blockchain innovations but also fosters a community where transparency, unity, and commerce converge. Through collaboration, fairness, and continuous innovation, we aim to be the nexus of blockchain commerce and meaningful interactions. ",
  },
]
const OurValues = () => {
  return (
    <>
      {
        data.map((item, index) => {
          return (
            <FlexBox direction="column" key={index}>
              <CustomText
                borderRadius="3px 3px 0px 0px"
                bgColor="#b92929"
                text={item.subject}
                color="white"
                fontSize="38px"
                fontWeight="700"
                padding="27px 37px"
                width="100%"
              />
              <CustomText
                borderRadius="0px 0px 3px 3px"
                bgColor="#E7E7E7"
                boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
                text={item.value}
                color="black"
                fontSize="21px"
                fontWeight="400"
                padding="36px 72px"
                fontFamily="Open Sans"
                width="100%"

              />
            </FlexBox>
          )
        })
      }
    </>
  )
}

export default OurValues