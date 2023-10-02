import React from 'react'

import telefone from "../assets/telefone.png"
import linkedin from "../assets/linkedin.png"

import { FooterContainer, FooterDescription, FooterName, FooterSocialContainer, FooterSocialIMG, FooterSocialLink } from "../styles/FooterStyles"

export default function Footer() {
  return (
    <FooterContainer id="fale-comigo">
      <FooterName>Igor Perdigão</FooterName>
      <FooterDescription>Para mais informações</FooterDescription>

      <FooterSocialContainer>
        <FooterSocialLink href="https://www.linkedin.com/in/igor-perdigao-silva/" target="_blank" rel="noopener noreferrer">
          <FooterSocialIMG src={linkedin} alt="LinkedIn" />
        </FooterSocialLink>

        <FooterSocialLink href="igor_contatos@hotmail.com">
          <FooterSocialIMG src={telefone} alt="Email" />
        </FooterSocialLink>
      </FooterSocialContainer>
    </FooterContainer>
  )
}
