import React from 'react'

import { FooterContainer, FooterName, FooterSocialContainer, FooterSocialLinkWrapper, GithubIcon, LinkedinIcon, FooterTitle,
         FooterInfoContainer, FooterSocialWrapper, FooterLink, RightsReservedContainer, MailIcoon, FooterInfoWrapper,
         PhoneIcon } from "../styles/FooterStyles"

export default function Footer() {
  return (
    <FooterContainer id="fale-comigo">
      <FooterSocialContainer>
        <FooterSocialWrapper>
          <FooterTitle>REDES SOCIAIS</FooterTitle>
          <FooterSocialLinkWrapper href="https://www.linkedin.com/in/igor-perdigao-silva/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            <FooterLink>Linkedin</FooterLink>
          </FooterSocialLinkWrapper>
          <FooterSocialLinkWrapper href="https://github.com/Hashtag-igor" target='_blank' rel="noopener noreferrer">
            <GithubIcon />
            <FooterLink>Github</FooterLink>
          </FooterSocialLinkWrapper>
        </FooterSocialWrapper>

        <FooterInfoContainer>
            <FooterTitle>CONTATO</FooterTitle>
            <FooterInfoWrapper>
              <PhoneIcon />
              <FooterLink>whatsapp (31) 99802-3935</FooterLink>
            </FooterInfoWrapper>
            <FooterInfoWrapper>
              <MailIcoon />
              <FooterLink>igor_contatos@hotmail.com</FooterLink>
            </FooterInfoWrapper>
        </FooterInfoContainer>
      </FooterSocialContainer>

      <RightsReservedContainer>
        <FooterName>© 2023 Igor Perdigão. Todos os direitos reservados.</FooterName>
      </RightsReservedContainer>
    </FooterContainer>
  )
}
