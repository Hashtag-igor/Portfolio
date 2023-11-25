//imagens
import igor from "../assets/igor.jpeg"

//components
import Footer from "../components/Footer"
import HeaderHome from "../components/HeaderHome"
import Card from "../components/Card"
import projectsData from '../components/ProjectsData';

//styled-components exports
import { Container, ProfileInfoButton, ProfileInfoContainer, ProfileInfoDescription, ProfileInfoTitle, ProfileSectionContainer,
         ProfileSectionIMG, ProjectCardContainer, ProjectSectionContainer, ProjectSectionTitle, HomeInfoContainer, HomeNameLeft, HomeNameRight, HomeProfession, 
         HomeProfileInfo, AllProjects, AllProjectsContainer, Background, ProfileHeaderSectionContainer, ProfileFirstContainer,
         ProfileSecondContainer} from "../styles/HomeStyles"


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
      
      <Container>
        <ProfileFirstContainer>
          <ProfileHeaderSectionContainer id="sobre">
            <ProfileSectionIMG src={igor} alt="Igor Perdigão" />
            <ProfileInfoContainer>
              <ProfileInfoTitle>Sobre mim</ProfileInfoTitle>
              <ProfileInfoDescription>
                Olá, meu nome é Igor Perdigão! Sou um entusiasta desenvolvedor Frontend Junior, motivado pela paixão em criar experiências digitais envolventes e responsivas. Ao longo de meus projetos pessoais e estudos, construí um sólido conhecimento em HTML, CSS, JavaScript, Node.js e React.js. <br /><br />
                Minha jornada no desenvolvimento web é marcada por uma busca constante por desafios, aprendizado e evolução. <br /><br />
                Estou ansioso para continuar crescendo profissionalmente e colaborar em projetos que inspirem e atendam às necessidades dos usuários.
              </ProfileInfoDescription>
              <ProfileInfoButton>Entre em contato</ProfileInfoButton>
            </ProfileInfoContainer>
          </ProfileHeaderSectionContainer>
        </ProfileFirstContainer>

        {/* //HABILIDADES */}
        <ProfileSecondContainer>
          <div style={{width: "100%", padding: "90px 0"}}>
            <div style={{textAlign: "center"}}>
              <h2>Meu Conjunto de Habilidades</h2>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", border: "1px solid red", margin: "40px 0", textAlign: "center"}}>
              <div style={{width: "25%"}}>
                <span>ICONE</span>
                <h4>Desenvolvimento Web</h4>
                <p>Ampla experiência em desenvolvimento frontend, com ênfase em tecnologias de ponta.</p>
              </div>
              <div style={{width: "25%"}}>
                <span>ICONE</span>
                <h4>Web Design</h4>
                <p>Habilidade em criar layouts modernos e responsivos, com foco na experiência do usuário.</p>
              </div>
              <div style={{width: "25%"}}>
                <span>ICONE</span>
                <h4>Gerenciamentos de versões</h4>
                <p>Experiência em ferramentas de gerenciamento de versão para controle de projetos.</p>
              </div>
            </div>
          </div>
        </ProfileSecondContainer>

        <ProjectSectionContainer id="projetos-id">
          <ProjectSectionTitle>Principais Projetos</ProjectSectionTitle>
          <ProjectCardContainer>
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
      </Container>
      <Footer />
    </>
  )
}
