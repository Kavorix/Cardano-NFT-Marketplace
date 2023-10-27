import styled from 'styled-components';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavWrapper = styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fef8e6 !important;
  border-bottom: 2px solid #000;
  .nav-link{
    font-family: Inconsolata !important;
  }
  .btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
    color: black;
  }


  .navbar-toggler{
    border: #fef8e6 solid 1px;
  }
  .navbar-toggler-icon{
    width: 42px;
    height: 28px;
    background-image: url('/assets/images/icons/menu.svg');
  }
  .dropdown-menu{
    border-radius: 0px;
    padding: 0px;
    width: 100px !important;
    background: #fae39c;
    padding: 3.5px 0;
    border: none !important;
    &.show{
      border: 1px solid white !important;
    }
    .dropdown-item{
      font-family: Inconsolata;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.105px;
      padding: 8px 12px;
      &:hover{
        color: #6b6b6b;
        background: #fae39c;
      }
    }
  }
`;


export const NavContainer = styled(Container)`
  width: 100%;
  padding-left: 43px;
  padding-right: 18.61px;
  @media screen and (max-width: 768px) {
    padding-left: 22px;
    padding-right: 4px;
  }
`
export const NavFlex = styled(Nav)`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  padding-right: 1rem; /* Equivalent to Bootstrap's pe-3 */
  gap: 24px; /* Equivalent to Bootstrap's gap-5 */
  align-items: center;
  @media screen and (max-width: 670px) {
    align-items: start;
  }
`

export const DropdownToggle = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 700;
  line-height: 41px;
  padding: 0px;
  color: black;
  background: none !important;
  font-family: Inconsolata !important;
  border: none;
  &:hover{
    color: black !important;
  }
  &::after{
    border: 0px;
    padding-top: 7px;
    content: url('/assets/images/icons/down.svg');
  }
  @media screen and (max-width: 550px) {
    font-size: 28px;
    background: none;
    &::after{
      content: none;
    }
  }
`

export const DropdownMenu = styled(Dropdown.Menu)`
  @media screen and (max-width: 768px) {
    border: none !important;
  }
`

export const NavBrand = styled(Navbar.Brand)`
  margin-right: 85.5px;
  @media screen and (max-width: 850px) {
    margin-right: 20px;
  }
`

export const NavImage = styled.img`
  width: 53px;
  height: 42px;
`

export const NavbarLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: Inconsolata;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.105px;
  &:hover{
    color: #6b6b6b;
  }
  @media screen and (max-width: 550px) {
    font-size: 28px;
    font-weight: 700;
  }
`

export const MobileWalletIcon = styled.img`
  width: 42px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  right: 70px;
`

export const MobileProfileImage= styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  right: 70px;
  border-radius: 3px;
`