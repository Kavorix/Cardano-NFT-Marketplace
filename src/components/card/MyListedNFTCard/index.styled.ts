import styled from 'styled-components'
const MyListedNFTCardStyle = styled.div`
  position: relative;
  border-radius: 3px;
  max-width: 256px;
  width: 100%;
`

const ListedBadge = styled.div`
  position: absolute;
  right: 0px;
  z-index: 10;
  top: 8px;
  background: #8896f8;
  width: 110px;
  height: 26px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  font-family: 'Open Sans';
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
`

const BundleBadge = styled.div`
  position: absolute;
  right: 0px;
  z-index: 10;
  top: 34px;
  background: #afb9fa;
  width: 110px;
  height: 26px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  font-family: 'Open Sans';
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
`

export {
  MyListedNFTCardStyle,
  ListedBadge,
  BundleBadge
}