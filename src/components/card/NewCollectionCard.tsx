import CustomImage from 'components/common/CustomImage'
import { VERIFIED_ICON_IMAGE } from 'constants/image.constants'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewCollectionCardStyle = styled(Link)`
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
  max-width: 380px;
  width: 100%;
  &:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02); 
  }
  @media screen and (max-width: 550px) {
    max-width: 156px;
  }

`

const CollectionImage = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 3px 3px 0px 0px;
  @media screen and (max-width: 550px) {
    width: 156px;
    height: 156px;
  }
`
const CollectionName = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 286px;
  font-size: 21px;
  font-weight: 700;
  color: black;
  font-family: Inconsolata;
  @media screen and (max-width: 550px) {
    font-size: 16px;
    -webkit-line-clamp: 1;
    white-space: nowrap;
    overflow: hidden!important;
    text-overflow: ellipsis;
    max-width: 100px;
    display: block;
  }
`


const CollectionTextFlex = styled.div`
  display: flex;
  height: 79px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  &:hover{
    background-color: #ddd;
  }
  @media screen and (max-width: 550px) {
    width: 156px;
    padding: 10px;
    gap: 3px;
    height: 37px;
  }
`

interface CollectionCardProps {
  hero: string;
  name: string;
  policyId: string;
}



const NewCollectionCard = ({
  hero, name, policyId
}: CollectionCardProps) => {
  return (
    <NewCollectionCardStyle to={"/collections/" + policyId}>
      <CollectionImage
        src={hero}
      />
      <CollectionTextFlex>
        <CollectionName>
          {name}
        </CollectionName>
        <CustomImage
          image={VERIFIED_ICON_IMAGE}
          width='33.5px'
          height='31.9px'
          smWidth='16px'
          smHeight='16px'
        />
      </CollectionTextFlex>
    </NewCollectionCardStyle>
  )
}

export default NewCollectionCard