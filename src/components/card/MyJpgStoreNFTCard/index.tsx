import CustomBorderButton from 'components/common/CustomBorderButton'
import CustomImage from 'components/common/CustomImage'
import CustomText from 'components/common/CustomText'
import { FlexBox } from 'components/common/FlexBox'
import { JpgStoreBadge, BundleBadge, MyJpgStoreNFTCardStyle } from './index.styled';
import CustomButton from 'components/common/CustomButton';
import { useWalletConnect } from 'context/WalletConnect';
import { migrateAssets } from 'api/marketplace/migrateAssets';


interface MyJpgStoreNFTCardType {
    data: any;
}

const MyJpgStoreNFTCard = ({
    data
}: MyJpgStoreNFTCardType) => {
    const { myWalletAddress, lucid } = useWalletConnect()
    console.log("jpg data", data)

    return (
        <MyJpgStoreNFTCardStyle>
            <JpgStoreBadge
                src={`/assets/images/icons/jpg-logo.svg`}
            />
            {
                data.bundled_assets.length > 0 &&
                <BundleBadge>
                    Bundle
                </BundleBadge>
            }

            <CustomImage
                image={`https://image-optimizer.jpgstoreapis.com/${data.source}`}
                width='256px'
                height='256px'
                borderRadius='3px 3px 0px 0px'
            />
            <FlexBox
                bgColor='white'
                borderRadius='0px 0px 3px 3px'
                padding='10px'
                direction='column'
                alignItems='center'
                gap='4px'
                width='256px'
                height='79px'
            >
                <CustomText
                    text={data && data.display_name}
                    fontSize='21px'
                    fontWeight='700'
                    maxWidth='236px'
                    className='three-dots'
                    display='block'
                />
                <CustomText
                    text={`₳${parseInt(data.price_lovelace) / 1000000}`}
                    fontSize='28px'
                    fontWeight='600'
                    color='#6073F6'
                    fontFamily='Open Sans'
                />

            </FlexBox>


            {
                data &&
                <CustomButton
                    text='Migrate'
                    fontSize='18px'
                    fontWeight='600'
                    fontFamily='Open Sans'
                    width='100%'
                    marginTop='24px'
                    height='48px'
                    smWidth='100%'
                    bgColor='linear-gradient(to right, #4454c8 , #96374e)'
                    hoverBgColor='linear-gradient(to right, #1154c8 , #63374e)'
                    boxShadow='0px 2px 10px 0px rgba(255, 255, 255, 0.30)'
                    onClick={() => {
                        migrateAssets(myWalletAddress, lucid, data.utxo.replace(/#0$/, ''), data.bundled_assets.length > 0 ? data.bundled_assets.map((item) => item.asset_id) : [data.asset_id], parseInt(data.price_lovelace) / 1000000)
                    }}
                />
            }


        </MyJpgStoreNFTCardStyle>
    )
}

export default MyJpgStoreNFTCard