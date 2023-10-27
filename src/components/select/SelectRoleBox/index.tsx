import { TOKEN_ARRAY } from 'constants/document'
import { SELECT_DOWN_ICON, SELECT_UP_ICON } from 'constants/image.constants'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SelectRoleBoxStyle = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
`

const SelectBox = styled.div`
  max-width: 540px;
  width: 100%;
  height: 58px;
  background: #CECECE;
  border-radius: 3px;
  color: #767676;
  font-size: 16px;
  font-family: 'Open Sans';
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
    height: 43px;
    height: 43px;
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
    color: #767676;
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
  .option-list{
    border-top: #6073F6 2px solid;
    max-height: 120px;
    height: 100%;
    overflow: auto;
    /* padding-bottom: 13.5px; */
    background-color: #F3F3F3;
    // padding: 0px 5px;
    .option{
      font-family: 'Inconsolata';
      font-style: normal;
      color: #767676;
      font-size: 16px;
      font-family: 'Open Sans';
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 7.5px 9px;
      cursor: pointer;
      border-radius: 5px;
      
      &:hover{
        background: #ddd;
      }
      img{
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
      @media screen and (max-width: 768px) {
        color: rgba(0, 0, 0, 0.25);
        font-size: 16px;
        font-family: Open Sans;
        font-weight: 400;
        img{
          width: 20px;
          height: 20px;
        }
      }
    }
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
const options = [
  {
    value: "Founder",
    tag: "Founder"
  },
  {
    value: "Moderator",
    tag: "Moderator"
  },
  {
    value: "Community member",
    tag: "Community"
  },
]

const SelectRoleBox = (
  { setFormData, formData }: any
) => {
  const [showOptions, setShowOptions] = useState(false);


  return (
    <SelectRoleBoxStyle>
      <SelectBox
        onClick={() => { setShowOptions(!showOptions) }}
      >
        {
          formData.role ? formData.role : 'Select role'
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
          
          <div className='option-list'>
            {
              options.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='option'
                    onClick={() => {
                      setFormData((formData) => ({
                        ...formData,
                        role: item.tag
                      }));
                      setShowOptions(false)
                    }}
                  >
                    {
                      item.value
                    }
                  </div>
                )
              })
            }
          </div>
          {/* <div> ADA </div> */}
        </OptionBox>
      }
    </SelectRoleBoxStyle>
  )
}

export default SelectRoleBox