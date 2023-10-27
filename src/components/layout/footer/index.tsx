import styled from 'styled-components';
import { useMedia } from 'react-use';
import { memo } from 'react';

import { Container } from 'styles/GlobalStyles';
import CustomImage from 'components/common/CustomImage';
import CustomText from 'components/common/CustomText';
import { CRASHR_BRAND_IMAGE, DISCORD_WHITE_ICON, TWITTER_WHITE_ICON } from 'constants/image.constants';
import { FlexBox } from 'components/common/FlexBox';
import CustomLinkButton from 'components/common/CustomLinkButton';
import SocialImageLink from 'components/common/SocialImageLink';
import { CRASHR_DISCORD_URL, CRASHR_TWITTER_URL } from 'constants/url.constants';
import CustomRouterLinkButton from 'components/common/CustomRouterLinkButton';

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: black;
  background: #202020 !important;
  display: flex;
  justify-content: center;
`;

const Footer = memo(
  () => {
    const isMobile = useMedia('(max-width: 768px)');
    return (
      <FooterWrapper>
        <Container
          maxWidth='1382px'
          paddingLeft='31px'
          paddingRight='31px'
          paddingBottom='0px'
          paddingTop='52px'
          smPaddingTop='44px'
          smPaddingBottom='40px'
        >
          {

            <>
              <CustomImage
                image={CRASHR_BRAND_IMAGE}
                width='150px'
                height='36px'
              />
              <FlexBox
                marginTop='20px'
                paddingLeft='10px'
                paddingBottom='63px'
                justifyContent='start'
                gap="191px"
                smGap='27px'
                borderBottom='1px solid white'
                smBorderBottom='none'
              >
                <FlexBox
                  maxWidth='366px'
                  direction='column'
                  gap="20px"
                  alignSelf='flex-end'
                >
                  <CustomText
                    text={`Providing the tools on the Cardano Blockchain beginning with On-Chain Voting and Raffles.`}
                    fontFamily='Open Sans'
                    fontSize='16px'
                    fontWeight='400'
                    color='white'
                    smFontSize='13px'
                  />

                  <FlexBox width='auto' gap="24px" smDirection='row' marginTop='43px' smMarginTop='13px'>
                    <SocialImageLink
                      image={TWITTER_WHITE_ICON}
                      link={CRASHR_TWITTER_URL}
                      width='69px'
                      height='40px'
                      smWidth='47px'
                      smHeight='27px'
                    />
                    <SocialImageLink
                      image={DISCORD_WHITE_ICON}
                      link={CRASHR_DISCORD_URL}
                      width='51px'
                      height='40px'
                      smWidth='47px'
                      smHeight='27px'
                    />
                  </FlexBox>
                </FlexBox>
                <FlexBox gap="61px" smGap='32px' flexWrap='wrap' smDirection='row' smJustifyContent='start' >
                  {/*** Home */}
                  <FlexBox direction='column' gap="23px" width='auto' smGap='8px' smWidth='45px'>
                    <CustomText
                      text={`Home`}
                      color='white'
                      fontSize='21px'
                      fontWeight='700'
                      bgColor='none'
                      width='min-content'
                      smFontSize='18px'
                      fontFamily='Inconsolata'
                    />
                  </FlexBox>
                  {/*** Marketplace */}
                  <FlexBox direction='column' gap="23px" width='auto' smGap='6px' smWidth='auto'>
                    <CustomText
                      text={`Marketplace`}
                      color='white'
                      fontSize='21px'
                      fontWeight='700'
                      bgColor='none'
                      width='min-content'
                      smFontSize='18px'
                      fontFamily='Inconsolata'
                    />
                    <FlexBox direction='column' gap='15px'  smGap='6px'>
                      <CustomRouterLinkButton
                        text={`All Collections`}
                        link={`/collections`}
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'

                      />
                      <CustomRouterLinkButton
                        text={`ALL NFTs`}
                        link='/nfts'
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'
                      />
                    </FlexBox>
                  </FlexBox>
                  {/*** Community */}
                  <FlexBox direction='column' gap="23px"  smGap='6px' width='auto' smWidth='auto'>
                    <CustomText
                      text={`Community`}
                      color='white'
                      fontSize='21px'
                      fontWeight='700'
                      bgColor='none'
                      width='min-content'
                      smFontSize='18px'
                      fontFamily='Inconsolata'
                    />
                    <FlexBox direction='column' gap='15px' smGap='6px'>
                      <CustomRouterLinkButton
                        text={`Raffles`}
                        link={`/raffle`}
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'

                      />
                      <CustomRouterLinkButton
                        text={`Polls`}
                        link='/poll'
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'
                      />
                      <CustomRouterLinkButton
                        text={`Rewards`}
                        link='/rewards'
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'
                      />
                    </FlexBox>
                  </FlexBox>
                  {/*** About */}
                  <FlexBox direction='column' gap="23px" width='auto' smGap='6px' smWidth='auto'>
                    <CustomText
                      text={`About`}
                      color='white'
                      fontSize='21px'
                      fontWeight='700'
                      bgColor='none'
                      width='min-content'
                      smFontSize='18px'
                      fontFamily='Inconsolata'
                    />
                    <FlexBox direction='column' gap='15px'  smGap='6px'>
                      <CustomRouterLinkButton
                        text={`Fees`}
                        link={`/fee`}
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'

                      />
                      <CustomRouterLinkButton
                        text={`FAQ`}
                        link='/faq'
                        color='white'
                        fontSize='18px'
                        fontWeight='500'
                        bgColor='none'
                        hoverBgColor='none'
                        width='min-content'
                        smWidth='98px'
                        
                        justifyContent='start'
                        smFontSize='13px'
                        fontFamily='Inconsolata'
                      />
                    </FlexBox>
                  </FlexBox>
                  {/*** Bombers */}
                  <FlexBox direction='column' gap="23px" width='auto' smGap='8px' smWidth='auto'>
                    <CustomText
                      text={`Bombers`}
                      color='white'
                      fontSize='21px'
                      fontWeight='700'
                      bgColor='none'
                      width='min-content'
                      smFontSize='18px'
                      fontFamily='Inconsolata'
                    />

                  </FlexBox>


                </FlexBox>
              </FlexBox>

              {
                !isMobile &&
                <FlexBox
                  paddingTop='29px'
                  paddingBottom='59px'
                  justifyContent='end'
                  alignItems='center'
                  gap="10px"
                >
                  <CustomText
                    text={`© 2023 Crashr`}
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                  />
                  <CustomText
                    text={`|`}
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                  />

                  <CustomLinkButton
                    text={`Terms & Conditions`}
                    link='/term-conditions'
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                    bgColor='none'
                    hoverBgColor='none'
                    width='min-content'
                    height='14px'
                    borderRadius='0px'
                  />
                  <CustomText
                    text={`|`}
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                  />
                  <CustomLinkButton
                    text={`Privacy Policy`}
                    link='/privacy-policy'
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                    bgColor='none'
                    hoverBgColor='none'
                    width='min-content'
                  />
                </FlexBox>
              }
              {
                isMobile &&
                <>
                  <FlexBox smMarginTop='42px'>
                    <CustomLinkButton
                      text={`Terms & Conditions`}
                      link='/term-conditions'
                      color='white'
                      fontSize='14px'
                      fontWeight='400'
                      bgColor='none'
                      hoverBgColor='none'
                      width='min-content'
                      borderRadius='0px'
                      smFontSize='13px'
                      justifyContent='start'
                      height="auto"
                    />

                    <CustomLinkButton
                      text={`Privacy Policy`}
                      link='/privacy-policy'
                      color='white'
                      fontSize='14px'
                      fontWeight='400'
                      bgColor='none'
                      hoverBgColor='none'
                      width='min-content'
                      smFontSize='13px'
                      justifyContent='start'
                      height='auto'
                    />
                  </FlexBox>
                  <CustomText
                    text={`© 2023 Crashr`}
                    color='white'
                    fontSize='14px'
                    fontWeight='400'
                    smFontSize='13px'
                    smMarginTop='22px'
                  />
                </>
              }
            </>
          }


        </Container>
      </FooterWrapper>
    );
  }
);

export default Footer;