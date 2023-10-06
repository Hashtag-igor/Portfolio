import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #191919;
`
export const HeaderNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 30px;
`
export const HeaderLogoLeft = styled(Link)`
    color: #ffffff;
    font-size: 40px;
    font-weight: 500;
`
export const HeaderLogoRight = styled.a`
    color: #f9004d;
`
export const HeaderUL = styled.ul`
    @media screen and (max-width: 700px) {
        display: none;
    }
`

export const HeaderLI = styled.li`
    color: white;
    list-style: none;
    display: inline-block;
    font-size: 25px;
    margin-right: 30px;
    cursor: pointer;

    &:hover {
        color: #f9004d;
    }
`
export const HeaderLinks = styled.a`
    text-decoration: none;
    color: white;
`


//Header Fixed
export const HeaderContainerFixed = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: #191919;
  height: 80px;
  z-index: 999;
  top: 0;
`
export const HeaderNavbarFixed = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: auto;
`
export const HeaderLogoLeftFixed = styled(Link)`
    color: #ffffff;
    font-size: 40px;
    font-weight: 500;
`
export const HeaderLogoRightFixed = styled.a`
    color: #f9004d;
`
export const HeaderULFixed = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 500px;
`
export const HeaderLIFixed = styled.li`
    color: white;
    list-style: none;
    display: inline-block;
    font-size: 22px;
    margin-right: 30px;
    cursor: pointer;
`
export const HeaderLinksFixed = styled.a`

`
export const HeaderProfileInfoFixed = styled.div`

`
export const HeaderNameLeftFixed = styled.h1`

`
export const HeaderNameRightFixed = styled.span`

`
export const HeaderProfessionFixed = styled.h3`

`


//Mobile Page
export const PaginaOverlayMobile = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: #f9004d;
    overflow: hidden;
    transition: height 0.3s ease;
    display: flex;
    align-items: flex-start;
    z-index: 2;
    
    &.pagina-overlay-aberto {
      height: 100vh;
      width: 100%;
      background-color: #fff;
    }
  }
`;

export const PaginaConteudoMobileContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 1;
    
    &.pagina-overlay-aberto & {
      transform: translateY(0);
    }
  }
`;

export const PaginaConteudoMobileWrapper = styled.div`
  width: 70%;
  display: flex; 
  flex-direction: column;
`

export const MenuToggleMobile = styled.button`
  z-index: 2;

  @media screen and (max-width: 768px) {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 30px;
  }
`;

export const MenuIconMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    width: 55px;
    height: 8px;
    background: #f9004d;
    position: relative;
    display: flex;
    transition: transform 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 55px;
      height: 8px;
      background: #f9004d;
    }

    &::before {
      top: -13px;
    }

    &::after {
      bottom: -13px;
    }

    &.menu-icon-x {
      transform: rotate(45deg);
    }
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 14px 0;
  background-color: #0b3f1a;
  border-bottom: 1px solid #0a3d19;
  box-shadow: 3px 2px 2px #093817;
`;

export const NavbarWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`;


export const HeaderLinksMobilePage  = styled.a`
    text-decoration: none;
    color: black;
`