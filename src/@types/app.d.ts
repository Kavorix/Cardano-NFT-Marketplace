interface CarInfo {
  name: string
  img: string
  price: number
  sale?: number
  speed: number
  acceleration: number
  braking: number
  control: number
  model: number
}

interface CategoryItemType {
  label: string
  link?: string
  key?: string
  badge?: string | number
}


/* about section */
interface TopicType {
  title: string;
  content: string;
}

interface UtilityType {
  title: string;
  detail: string;
  content: string;
}



interface TeamDataType {
  img: string;
  name: string;
  role: string;
}

interface CrashrDataType {
  subject: string;
}

interface FAQDataType {
  question: string;
  answer: string;
  visible: boolean;
}


interface NFTDataProps {
  asset: string;
  name: string;
  image: string;
  isSelected?: boolean;
  owner?: string;
  policyId?: string;
  description?: string;
}



interface CustomButtonStyleType {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  cursor?: string;
  marginTop?: string;
  disabled?: boolean;
}


interface WaitingListType {
  waitingName: string;
  actionTime: string;
}

interface FloorPriceType {
  value: string;
}

interface RaffleFormDataType {
  title: string;
  description: string;
  currency: string;
  amount: number;
  price: number;
  attachedImage: string;
  minTicket: number;
  maxTicket: number;
  endDate: Date;
  endTimeRemaining: string;
  agree1: boolean;
  agree2: boolean;
  raffleID?: string;
}

interface VoteFormDataType {
  topic: string;
  description: string;
  project: string;
  endDate: Date;
  choseDate: number;
  role: string;
  currency: string;
  attachedImage: string;
  vote1: string;
  attachedImage1: string;
  vote2: string;
  vote3: string;
  vote4: string;
  attachedImage2: string;
  agree1: boolean;
  agree2: boolean;
}



interface FloorPricesType {
  [key: string]: FloorPrice;
}


interface FloorPrice {
  floorprice: number;
  expired: number;
  id: string;
};


interface ThemeProps{
  colors: {
    lightgrey: string;
    bgColor: string;
    grey: string;
    red: string;
    darkred: string;
    black1: string;
    black2: string;
    green: string;
  };
  
  fonts: {
    inconsolata: string;
    openSans: string;
  };
  paddings: {
    container: string;
    pageTop: string;
  };
  margins: {
    pageTop: string;
  };
}

interface UserDataType {
  wallet: string;
  avatar: string;
  username: string;
  twitter?: string;
  crashr?: string;
  discord?: string;
  bomber_avatar?: string;
  bomber_username?: string;
  points?: number;
  friends?: string[];
  rewards_time?: number;
  staked_num?: number;
  staked?: boolean;
  entries?: StakeEntry[];
  user_location?: string;
  user_bio?: string;
}

interface RaffleFormDataType {
  title: string;
  description: string;
  currency: string;
  amount: number;
  price: number;
  attachedImage: string;
  minTicket: number;
  maxTicket: number;
  endDate: Date;
  endTimeRemaining: string;
  agree1: boolean;
  agree2: boolean;
  selectedNFTs?: NFTDataProps[];
}



interface FloorPricesType {
  [key: string]: FloorPrice;
}

interface TokenCardType {
  image: string;
  name: string;
  quantity: number;
}

interface NFTCardType {
  image: string;
  name: string;
  onClick: () => void;
  isSelected: boolean;
  setSelect: () => void;
}



interface ListedNFT {
  [key: string]: string;
}


interface MyListedNFTCardType{
  data: ListedData;
  isBundle: boolean;
  isListed: boolean;
  setActiveRemoveListingID?: any;
  setShowRemoveListingModal?: any;
  setActiveEditData?: any;
  setShowEditModal?: any;
}
interface ListedData {
  tokenName: string;
  nfts: ListedNFT;
  seller: string;
  unit: string;
  amount: string; 
  utxo: string;
  index: number;
}


type ListedNFTList = {
  [utxo: string]: ListedData; 
}

interface MarketListedNFTCardType{
  data: ListedData;
  isBundle: boolean;
  isListed: boolean;
  // onClick: () => void;
}

interface CollectionType {
  hero?: string | undefined;
  policyId: string;
  name: string;
  description: string;
  supply?: any;
}