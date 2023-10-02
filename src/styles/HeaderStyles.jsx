import styled from "styled-components";
import background from "../assets/background.png"

export const HeaderContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-color: #191919;
`
export const HeaderNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 25px;
`
export const HeaderLogoLeft = styled.h2`
    color: #ffffff;
    font-size: 40px;
    font-weight: 500;
`
export const HeaderLogoRight = styled.span`
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
export const HeaderProfileInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 7%;
`
export const HeaderNameLeft = styled.h1`
    color: white;
    font-size: 75px;
`
export const HeaderNameRight = styled.span`
    color: #f9004d;
`
export const HeaderProfession = styled.h3`
    color: white;
    font-size: 25px;
`