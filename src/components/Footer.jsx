import { FooterContainer, FooterName,  GithubIcon, LinkedinIcon, RightsReservedContainer, WhatsappIcon, InstagramIcon, FooterLinksContainer, 
         FooterProfileWrapper, FooterProfileContainer, FooterTitle, FooterDescription, FooterNumber, FooterReserved, FooterLinksWrapper} from "../styles/FooterStyles"

export default function Footer() {
  return (
    <FooterContainer id='fale-comigo'>
      <FooterProfileContainer>
        <FooterProfileWrapper>
          <FooterTitle>Aberto à Conversa!</FooterTitle>
          <FooterDescription>Estou entusiasmado para aprender mais sobre seus projetos. Juntos, podemos explorar maneiras de transformar suas ideias em realidade. Estou ansioso para discutir como podemos colaborar e alcançar objetivos comuns.</FooterDescription>
          <FooterName>igor_contatos@hotmail.com</FooterName>
          <FooterNumber>(31) 99802-3935</FooterNumber>
          <FooterLinksContainer>
            <FooterLinksWrapper to="https://www.instagram.com/igorperdigao_s/" target="_blank">
              <InstagramIcon />
            </FooterLinksWrapper>
            <FooterLinksWrapper to="https://www.linkedin.com/in/igor-perdigao-silva/" target="_blank">
              <LinkedinIcon />
            </FooterLinksWrapper>
            <FooterLinksWrapper to="https://github.com/Hashtag-igor" target="_blank">
              <GithubIcon />
            </FooterLinksWrapper>
            <FooterLinksWrapper to="https://wa.me/5531998023935" target="_blank">
              <WhatsappIcon />
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterProfileWrapper>
      </FooterProfileContainer>

      <RightsReservedContainer>
        <FooterReserved>© 2023 Igor Perdigão. Todos os direitos reservados.</FooterReserved>
      </RightsReservedContainer>
    </FooterContainer>
  )
}
