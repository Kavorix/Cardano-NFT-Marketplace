import { TOKEN_ARRAY } from 'constants/document'
import { SELECT_DOWN_ICON, SELECT_UP_ICON } from 'constants/image.constants'
import { useGlobalContext } from 'context/GlobalContext'
import { getExactImageFormat } from 'hooks/function'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SelectNFTBoxStyle = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
`

const SelectBox = styled.div`
  max-width: 540px;
  width: 100%;
  /* width: 100%; */
  height: 58px;
  background: #CECECE;
  border-radius: 3px;
  color: #767676;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  cursor: pointer;
  img{
    width: 24px;
    height: 12px;
  }
  @media screen and (max-width: 768px) {
    
    height: 53px;
    font-size: 16px;
  }
`
const OptionBox = styled.div`
  max-width: 540px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 10px;
 
  color: black;
  input[type=text]{
    max-width: 540px;
    width: 100%;
    box-sizing: border-box !important;
    font-family: 'Inconsolata';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    color: #787878;
    background-color: #E7E7E7;
    padding: 16px 16px 16px 47px;
    background-image: url('/assets/images/icons/search.svg');
    background-position: 15px 15px;
    background-size: 28px 28px;
    background-repeat: no-repeat;
    
    border: none;
    @media screen and (max-width: 768px) {
      background-size: 18px 18px;
      padding: 12px 12px 12px 40px !important;
      background-position: 10px 12px;
      font-size: 16px;
      line-height: 18px;
    }
  }
  .nft-list{
    border-top: #6073F6 2px solid;
    max-height: 240px;

    overflow: auto;
    /* padding-bottom: 13.5px; */
    background-color: #F3F3F3;
    // padding: 0px 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 11px 18px;
    align-items: center;
    justify-content: center;
    ::-webkit-scrollbar {
      width: 9px; /* set width of scrollbar */
      // height: 28px;
    }
    
    ::-webkit-scrollbar-track {
      background:none; /* set background color of track */
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: black; /* set background color of thumb */
      border-radius: 5px; /* set border radius of thumb */
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* set background color of thumb on hover */
    }
  }
`

interface SelectImageProps {
  selected: boolean;
}

const SelectImage = styled.img<SelectImageProps>`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 3px;
  border: ${props => props.selected && '2px solid red'};
`

const SelectNFTBox = (
  { setFormData, formData }: any
) => {
  const [showOptions, setShowOptions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showTokens, setShowTokens] = useState(Object.values(TOKEN_ARRAY));

  const { myNFTs } = useGlobalContext()

  useEffect(() => {
    // filter tokens according to search input
    let filtered_arr = Object.values(TOKEN_ARRAY).filter(item => item.value.toLowerCase().includes(searchInput.toLowerCase()));
    // console.log("showTokens", showTokens, filtered_arr, searchInput)
    setShowTokens(filtered_arr)
  }, [searchInput])

  return (
    <SelectNFTBoxStyle>
      <SelectBox
        onClick={() => { setShowOptions(!showOptions) }}
      >
        {
          formData.selectedNFTs.length > 0 ? formData.selectedNFTs.length + 'NFTs Chosen' : 'Select NFT’s from wallet'
        }
        {
          showOptions
            ?
            <img src={SELECT_UP_ICON} alt="img-down" />
            :
            <img src={SELECT_DOWN_ICON} alt="img-up" />
        }
      </SelectBox>
      {
        showOptions &&
        <OptionBox>
          <input
            type="text"
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
            value={searchInput}
            autoFocus
          />
          <div className='nft-list'>
            {
              myNFTs.map((nft: NFTDataProps, index) => {
                return (
                  <SelectImage
                    key={index}
                    src={getExactImageFormat(nft.image)}
                    selected={formData.selectedNFTs.includes(nft)}
                    onClick={() => {
                      // remove nft from selected list if it's already added
                      if (formData.selectedNFTs.includes(nft)) {
                        let newArray: NFTDataProps[] = formData.selectedNFTs;
                        const index = newArray.indexOf(nft);
                        newArray.splice(index, 1);
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          selectedNFTs: newArray
                        }));

                      } else {
                        // check if number of selected nfts is over 10 (if not, add that nft to selected list)
                        if (formData.selectedNFTs.length > 9) {
                        } else {
                          let newArray: NFTDataProps[] = formData.selectedNFTs;
                          newArray.push(nft);
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            selectedNFTs: newArray
                          }));
                        }
                      }

                    }}
                  />
                )

              })
            }
          </div>

        </OptionBox>
      }
    </SelectNFTBoxStyle>
  )
}

export default SelectNFTBox