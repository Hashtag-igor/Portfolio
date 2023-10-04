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
export const HeaderUL = styled.ul``

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
