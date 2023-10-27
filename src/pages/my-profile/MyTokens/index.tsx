import TokenCard from 'components/card/TokenCard';
import CustomSearchInput from 'components/common/CustomSearchInput';
import { FlexBox } from 'components/common/FlexBox';
import { TOKEN_ARRAY } from 'constants/document';
import { useGlobalContext } from 'context/GlobalContext';
import { useState } from 'react'
const MyTokens = () => {
  const [search, setSearch] = useState<string>('');
  const { myTokens } = useGlobalContext()
  return (
    <>
      <FlexBox marginBottom='32px' smDirection='column' gap="20px" justifyContent='start' direction='column' >
        <CustomSearchInput
          input={search}
          setInput={setSearch}
          placeholder='Search Tokens'
        />
        <FlexBox flexWrap='wrap' gap='98px' smAlignItems='center'
          smJustifyContent='center'>
          {
            myTokens && myTokens.length > 0 && myTokens.map((token, index: number) => {
              let image = "";
              if (TOKEN_ARRAY[token.unit]) {
                if (TOKEN_ARRAY[token.unit].hasOwnProperty('image')) {
                  image = TOKEN_ARRAY[token.unit].image;
                } else {
                  image = "/assets/images/tokens/_Token_Unknown.png"
                }
              } else {
                image = "/assets/images/tokens/_Token_Unknown.png"
              }
              return (
                <TokenCard
                  image={image}
                  name={token.name.value}
                  quantity={token.quantity}
                />
              )
            })
          }
        </FlexBox>
      </FlexBox>
    </>
  )
}

export default MyTokens