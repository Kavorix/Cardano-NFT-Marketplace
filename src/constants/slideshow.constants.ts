import { 
  HOME_HEADER1_IMAGE,
  HOME_HEADER2_IMAGE,
  HOME_HEADER3_IMAGE,
  HOME_HEADER4_IMAGE,
  HOME_HEADER5_IMAGE,
  HOME_HEADER1_MOBILE_IMAGE,
  HOME_HEADER2_MOBILE_IMAGE,
  HOME_HEADER3_MOBILE_IMAGE,
  HOME_HEADER4_MOBILE_IMAGE,
  HOME_HEADER5_MOBILE_IMAGE
} from "./image.constants";

export const SLIDE_SHOW_DATA = [
  {
    title: 'Welcome to Crashr',
    desc: 'We\'ve recently enhanced our site for improved user experience and accessibility. Check out new additions like the Marketplace!',
    image: HOME_HEADER1_IMAGE,
    mobileImage: HOME_HEADER1_MOBILE_IMAGE,
    link: '/marketplace'
  },
  {
    title: 'Marketplace',
    desc: 'Crashr’s Marketplace is now live! The all-in-one platform now has the feature functions to trade, sell and buy NFTs. ',
    image: HOME_HEADER2_IMAGE,
    mobileImage: HOME_HEADER2_MOBILE_IMAGE,
    link: '/marketplace'
  },
  {
    title: 'Bombers',
    desc: 'Our goal with Bombers is to create an epic community for the Crashr brand. We want to be more than just a platform for traders. We want a community built around the most primal values of internet culture. ',
    image: HOME_HEADER3_IMAGE,
    mobileImage: HOME_HEADER3_MOBILE_IMAGE,
    link: 'https://bombers.crashr.io'
  },
  {
    title: 'Shopping Cart',
    desc: 'Seamless NFT Shopping Experience! Add your favorite NFTs to your cart and enjoy a one-click checkout, mirroring the simplicity of Amazon. Dive into the future of trading with ease and convenience!',
    image: HOME_HEADER4_IMAGE,
    mobileImage: HOME_HEADER4_MOBILE_IMAGE,
    link: '/marketplace'
  },
  {
    title: 'Make Offers',
    desc: 'Securely P2P Trade NFTs and associated tokens. Propose offers directly to other users. Offer up to 10 NFTs for a single NFT you\'re interested in, or trade any quantity of tokens.',
    image: HOME_HEADER5_IMAGE,
    mobileImage: HOME_HEADER5_MOBILE_IMAGE,
    link: '/nfts'
  }
]