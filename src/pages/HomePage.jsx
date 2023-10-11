//imagens
import financialSystem from "../assets/financialSystem.png"
import movie from "../assets/movie.png"
import igor from "../assets/igor.jpeg"
import goalStore from "../assets/goalStore.png"

//components
import Footer from "../components/Footer"

//styled-components exports
import { HomeContainer, ProfileInfoButton, ProfileInfoContainer, ProfileInfoDescription, ProfileInfoTitle, ProfileSectionContainer,
         ProfileSectionIMG, ProjectCardContainer, ProjectCardDescription, ProjectCardIMG, ProjectCardName, ProjectCardWrapper,
         ProjectLink, ProjectSectionContainer, ProjectSectionTitle, HomeInfoContainer, HomeNameLeft, HomeNameRight, HomeProfession, 
         HomeProfileInfo, AllProjects, AllProjectsContainer, Background} from "../styles/HomeStyles"


export default function HomePage() {
  return (
    <>
      <HomeInfoContainer>
        <HomeProfileInfo>
          <HomeNameLeft>Igor <HomeNameRight>Perdigão</HomeNameRight></HomeNameLeft>
          <HomeProfession>Programador FullStack JR</HomeProfession>
        </HomeProfileInfo>
        <Background />        
      </HomeInfoContainer>
      <HomeContainer>
        <ProfileSectionContainer id="sobre">
          <ProfileSectionIMG src={igor} alt="Igor Perdigão" />
          <ProfileInfoContainer>
            <ProfileInfoTitle>Sobre mim</ProfileInfoTitle>
            <ProfileInfoDescription>
              Sou um desenvolvedor FullStack Junior altamente motivado e apaixonado por criar experiências digitais envolventes e responsivas. Tenho conhecimento sólido em HTML, CSS, JavaScript, Node.js e React.js, e estou em busca de oportunidades para expandir meu conjunto de habilidades enquanto contribuo para projetos desafiadores.
            </ProfileInfoDescription>
            <ProfileInfoButton>Entre em contato</ProfileInfoButton>
          </ProfileInfoContainer>
        </ProfileSectionContainer>

        <ProjectSectionContainer id="projetos-id">
          <ProjectSectionTitle>Principais Projetos</ProjectSectionTitle>
          <ProjectCardContainer>
            <ProjectCardWrapper>
              <ProjectCardIMG src={goalStore} alt="Projeto Goal Store Shirts" />
              <ProjectCardName>Goal Store Shirts</ProjectCardName>
              <ProjectCardDescription>
                Neste projeto fullstack, utilizei React, Node.js e MongoDB. O backend apresenta uma API personalizada para gerenciar camisas de time, consumida pelo frontend. O MongoDB armazena dados de usuários para registro e login. Usuários autenticados possuem acesso total, enquanto visitantes têm funcionalidades limitadas, como adicionar itens ao carrinho ou acessar áreas restritas.
              </ProjectCardDescription>
              <ProjectLink to="/goalstore">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>

            <ProjectCardWrapper>
              <ProjectCardIMG src={financialSystem} alt="Projeto de Controle Financeiro" />
              <ProjectCardName>Financial System</ProjectCardName>
              <ProjectCardDescription>
                Projeto fullstack de controle finánceiro. <br /><br /><br /> *Ainda em desenvolvimento...
              </ProjectCardDescription>
              <ProjectLink to="/financialsystem">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>

            <ProjectCardWrapper>
              <ProjectCardIMG src={movie} alt="MovieDB icon" />
              <ProjectCardName>Movie Streaming</ProjectCardName>
              <ProjectCardDescription>
                Este projeto desenvolvido em React é um serviço de streaming que proporciona aos usuários acesso a um vasto catálogo de filmes e programas de TV, incluindo os títulos mais bem avaliados, populares, próximos e atualmente em exibição. Com a capacidade de pesquisar títulos de todo o mundo, os usuários podem explorar as avaliações críticas, a sinopse e muitos outros detalhes relevantes para tomar decisões informadas sobre o que assistir.
              </ProjectCardDescription>
              <ProjectLink to="/moviestreaming">Ver Projeto</ProjectLink>
            </ProjectCardWrapper>
          </ProjectCardContainer>
          <AllProjectsContainer>
            <AllProjects to="https://github.com/Hashtag-igor?tab=repositories" target="_blank">Ver todos os projetos</AllProjects>
          </AllProjectsContainer>
        </ProjectSectionContainer>
      </HomeContainer>
      <Footer />
    </>
  )
}
