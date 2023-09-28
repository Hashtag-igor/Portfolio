import financialSystem from "../assets/financialSystem.png"
import movie from "../assets/movie.png"
import igor from "../assets/igor.jpeg"
import goalStore from "../assets/goalStore.png"

import Header from "../components/Header"
import Footer from "../components/Footer"

import { HomeContainer, ProfileInfoButton, ProfileInfoContainer, ProfileInfoDescription, ProfileInfoTitle, ProfileSectionContainer,
         ProfileSectionIMG, ProjectCardContainer, ProjectCardDescription, ProjectCardIMG, ProjectCardName, ProjectCardWrapper,
         ProjectLink, ProjectSectionContainer, ProjectSectionTitle } from "../styles/HomeStyles"

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeContainer>
        <ProfileSectionContainer id="sobre">
          <ProfileSectionIMG src={igor} alt="Igor Perdigão" />
          <ProfileInfoContainer>
            <ProfileInfoTitle>Sobre mim</ProfileInfoTitle>
            <ProfileInfoDescription>Eu sou um Programador Front End, tenho experiência e conhecimento criando aplicações com HTML, CSS, JavaScript, React e Node.</ProfileInfoDescription>
            <ProfileInfoButton>Entre em contato</ProfileInfoButton>
          </ProfileInfoContainer>
        </ProfileSectionContainer>

        <ProjectSectionContainer id="projetos-id">
          <ProjectSectionTitle>Principais Projetos</ProjectSectionTitle>
          <ProjectCardContainer>
            <ProjectCardWrapper>
              <ProjectCardIMG src={goalStore} alt="Projeto Goal Store Shirts" />
              <ProjectCardName>Goal Store Shirts</ProjectCardName>
              <ProjectCardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</ProjectCardDescription>
              <ProjectLink href="https://starbucks-rodolfo.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>

            <ProjectCardWrapper>
              <ProjectCardIMG src={financialSystem} alt="Projeto de Controle Financeiro" />
              <ProjectCardName>Financial System</ProjectCardName>
              <ProjectCardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</ProjectCardDescription>
              <ProjectLink href="https://cronometro-mpdz.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>

            <ProjectCardWrapper>
              <ProjectCardIMG src={movie} alt="MovieDB icon" />
              <ProjectCardName>Movie Streaming</ProjectCardName>
              <ProjectCardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</ProjectCardDescription>
              <ProjectLink href="https://peaceful-starlight-02739b.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>
          </ProjectCardContainer>
        </ProjectSectionContainer>
      </HomeContainer>
      <Footer />
    </>
  )
}
