import CopyBoard from 'components/CopyBoard'
import CustomButton from 'components/common/CustomButton'
import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { SLICK_LEFT_ICON, SLICK_RIGHT_ICON, VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import { getExactImageFormat } from 'hooks/function'
import React, { useState } from 'react'
import styled from 'styled-components'
import { LazyLoadImage } from "react-lazy-load-image-component";
const RaffleName = styled.div`
    color: var(--true-black, #000);
    /* 📱Mobile/Headings/Heading 3 38-auto/bold */
    font-family: Inconsolata;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.57px;
`
const CreatedBy = styled.div`
    color: black;
    font-family: Inconsolata;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.07px;
    margin-top: 10px;
`

const RaffleDescription = styled.div`
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    margin-top: 8px;
`
const RaffleTabs = styled.div`
    display: flex;
    width: 203px;
    height: 40px;
    padding: 6px;
    align-items: flex-start;
    gap: 4px;
    border-radius: 3px;
    border: 1px solid var(--periwinkle-400, #6073F6);
    margin: auto;
    margin-top: 14px;
    margin-bottom: 23px;
`

interface RaffleTabStyle {
    active: boolean;
}
const RaffleTab = styled.div<RaffleTabStyle>`
    display: flex;
    height: 28px;
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    background-color: ${(props) => props.active && '#afb9fa'};
    border-radius: 3px;
`

interface RaffleDetailModal_MobileScreenProps {
    raffleDetailData: any;
    status: any;
    myWalletAddress: any;
    buyTicket: any;
    imageNFTs: any;
    activeNFT: any;
    setActiveNFT: any;
    thisFloorPrice: any;
    floorPriceList: any;
}
const RaffleDetailModal_MobileScreen = ({
    raffleDetailData,
    status,
    myWalletAddress,
    buyTicket,
    imageNFTs,
    activeNFT,
    setActiveNFT,
    thisFloorPrice,
    floorPriceList
}: RaffleDetailModal_MobileScreenProps) => {
    const tabs = ["Detail", "Entries"]
    const [activeTab, setActiveTab] = useState("Detail");
    return (
        <FlexBox smDirection='column' smJustifyContent='start' smAlignItems='start'>
            <RaffleName>
                {raffleDetailData && raffleDetailData.name && raffleDetailData.name}
            </RaffleName>
            <CreatedBy>
                {`Created by: ${raffleDetailData && raffleDetailData.creator.slice(0, 10)}`}
            </CreatedBy>
            <RaffleDescription>
                {raffleDetailData?.desc ? `${raffleDetailData.desc}` : "Doggo ipsum waggy wags doge big ol shoober extremely cuuuuuute very good spot long woofer heckin, b tho t frighten floofs wow very biscit super chub, heckin dat tungg tho heckin angery woofer."}
            </RaffleDescription>
            <RaffleTabs>
                {
                    tabs.map((tab: string, index: number) => {
                        return (
                            <RaffleTab active={activeTab === tab} key={index} onClick={() => { setActiveTab(tab) }}>
                                {tab}
                            </RaffleTab>
                        )
                    })
                }
            </RaffleTabs>
            {
                activeTab === "Detail" &&
                <FlexBox maxWidth='584px' direction='column'>
                    <FlexBox alignItems='center' gap='25px' smDirection='row'>
                        <CustomImage
                            image={SLICK_LEFT_ICON}
                            width='18.6px'
                            height='37.8px'
                            smWidth='10px'
                            smHeight='18.6px'
                            cursor='pointer'
                            onClick={() => {
                                if (activeNFT !== 0)
                                    setActiveNFT(activeNFT => activeNFT - 1)
                            }}
                        />
                        <LazyLoadImage
                            src={
                                imageNFTs && imageNFTs.length > 0 &&
                                getExactImageFormat(imageNFTs[activeNFT].image)
                            }
                            className="main-nft"
                        />
                        <CustomImage
                            image={SLICK_RIGHT_ICON}
                            width='18.6px'
                            height='37.8px'
                            smWidth='10px'
                            smHeight='18.6px'
                            cursor='pointer'
                            onClick={() => {
                                if (activeNFT < imageNFTs.length - 1) setActiveNFT(activeNFT => activeNFT + 1)
                            }}
                        />
                    </FlexBox>
                    <FlexBox
                        direction='column'
                        padding='12px 36px' bgColor='white' borderRadius='3px' smWidth='160px' className='mx-auto' smPadding='4px 8px'>
                        {
                            imageNFTs && imageNFTs.length > 0 &&
                            <CustomText
                                text={imageNFTs[activeNFT].nftName}
                                fontSize='38px'
                                fontWeight='700'
                                display='block'
                                className='three-dots'
                                smMaxWidth='144px'
                            />
                        }

                        {
                            imageNFTs && imageNFTs.length > 0 &&
                            <FlexBox justifyContent='start' gap="10px" marginTop='4px' smDirection='row' smAlignItems='center' smJustifyContent='start'>
                                <CustomText
                                    text={imageNFTs[activeNFT].collection}
                                    fontSize='16px'
                                    fontFamily='Open Sans'
                                    fontWeight='400'
                                    color='#f73737'
                                    maxWidth='450px'
                                    display='block'
                                    className='three-dots'
                                    smMaxWidth='120px'
                                    smFontSize='12px'
                                />
                                {
                                    imageNFTs[activeNFT].verified &&
                                    <CustomImage
                                        image={VERIFIED_ICON_IMAGE}
                                        width='22px'
                                        height="21px"
                                    />
                                }
                            </FlexBox>
                        }

                        {
                            imageNFTs && imageNFTs.length > 0 && <FlexBox smDirection='column' justifyContent='start' alignItems='center'
                            >
                                <FlexBox smDirection='row' smAlignItems='center'>
                                    <CustomText
                                        text={`Policy ID:`}
                                        fontWeight='600'
                                        fontFamily='Open Sans'
                                        fontSize='16px'
                                        className='no-wrap'
                                        smFontSize='12px'
                                    />
                                    <CopyBoard
                                        addr={imageNFTs[activeNFT].policyId}
                                        maxWidth='50px'
                                    />
                                </FlexBox>
                                <FlexBox smDirection='row' smAlignItems='center'>
                                    <CustomText
                                        text={`Asset ID:`}
                                        fontWeight='600'
                                        fontFamily='Open Sans'
                                        fontSize='16px'
                                        smFontSize='12px'
                                    />
                                    <CopyBoard
                                        addr={imageNFTs[activeNFT].asset}
                                        maxWidth='50px'
                                    />
                                </FlexBox>
                            </FlexBox>
                        }
                    </FlexBox>
                </FlexBox>
            }
            <CustomButton
                smWidth='100%'
                smHeight='42px'
                text='Purchase'
                onClick={() => buyTicket()}
                disabled={status !== 'live' || raffleDetailData.creator === myWalletAddress}
                smMarginTop={`34px`}
            />

            {
                status !== "live" &&
                <CustomText
                    text={`Raffle has ended.`}
                    color='#f73737'
                    fontSize='16px'
                    fontWeight='400'
                    fontFamily='Open Sans'
                />
            }

        </FlexBox>
    )
}

export default RaffleDetailModal_MobileScreen