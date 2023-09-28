import React from 'react'

import { HeaderContainer, HeaderNavbar, HeaderLogoLeft, HeaderLogoRight, HeaderUL, HeaderLI, HeaderLinks,
         HeaderNameLeft, HeaderNameRight, HeaderProfession, HeaderProfileInfo } from "../styles/HeaderStyles"

export default function Header() {
  return (
    <HeaderContainer id="home">
        <HeaderNavbar>
          <HeaderLogoLeft>Portfó<HeaderLogoRight>lio</HeaderLogoRight></HeaderLogoLeft>
          <HeaderUL>
            <HeaderLI><HeaderLinks href="#home">Home</HeaderLinks></HeaderLI>
            <HeaderLI><HeaderLinks href="#sobre">Sobre</HeaderLinks></HeaderLI>
            <HeaderLI><HeaderLinks href="#projetos-id">Projetos</HeaderLinks></HeaderLI>
            <HeaderLI><HeaderLinks href="#fale-comigo">Fale comigo</HeaderLinks></HeaderLI>
          </HeaderUL>
        </HeaderNavbar>

        <HeaderProfileInfo>
          <HeaderNameLeft>Igor <HeaderNameRight>Perdigão</HeaderNameRight></HeaderNameLeft>
          <HeaderProfession>Programador FullStack JR</HeaderProfession>
        </HeaderProfileInfo>
    </HeaderContainer>
  )
}
