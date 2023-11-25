import React from 'react'

import { FooterContainer, FooterName, FooterSocialContainer, FooterSocialLinkWrapper, GithubIcon, LinkedinIcon, FooterTitle,
         FooterInfoContainer, FooterSocialWrapper, FooterLink, RightsReservedContainer, MailIcoon, FooterInfoWrapper,
         PhoneIcon } from "../styles/FooterStyles"

export default function Footer() {
  return (
    <div style={{background: "#fff" ,padding: "80px 0 20px 0"}} id='fale-comigo'>
      <div style={{textAlign: "center", color: "#000000", width: "40%", margin: "auto", border: "2px solid red"}}>
        <div>
          <h1>Vamos conversar?</h1>
          <p>Ficarei feliz em saber mais sobre seus projetos e como podemos trabalhar juntos para torná-los realidade</p>
          <p>igor_contatos@hotmail.com</p>
          <p>(31) 99802-3935</p>
          <ul style={{listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Github</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>
      
      {/* 
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
        </FooterContainer >
      */
      
      }

      <RightsReservedContainer>
        <FooterName>© 2023 Igor Perdigão. Todos os direitos reservados.</FooterName>
      </RightsReservedContainer>
    </div>
  )
}
