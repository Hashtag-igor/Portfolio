//imagens
import igor from "../assets/igor.jpeg"

//components
import Footer from "../components/Footer"
import HeaderHome from "../components/HeaderHome"
import Card from "../components/Card"
import projectsData from '../components/ProjectsData';

//styled-components exports
import { HomeContainer, ProfileInfoButton, ProfileInfoContainer, ProfileInfoDescription, ProfileInfoTitle, ProfileSectionContainer,
         ProfileSectionIMG, ProjectCardContainer, ProjectSectionContainer, ProjectSectionTitle, HomeInfoContainer, HomeNameLeft, HomeNameRight, HomeProfession, 
         HomeProfileInfo, AllProjects, AllProjectsContainer, Background} from "../styles/HomeStyles"


export default function HomePage() {
  return (
    <>
      <HeaderHome />

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
  
            {/* {projectsData.map((project, index) => ( */}
            {projectsData.filter((item, idx) => idx < 3).map((project, index) => (
              <Card
                key={index}
                img={project.img}
                alt={project.alt}
                name={project.name}
                description={project.description}
                link={project.link}
              />
            ))}
          </ProjectCardContainer>
          <AllProjectsContainer>
            <AllProjects to="/allprojects">Ver todos os projetos</AllProjects>
          </AllProjectsContainer>
        </ProjectSectionContainer>
      </HomeContainer>
      <Footer />
    </>
  )
}
