//imagens
import igor from "../assets/igor.jpeg"
import notbook from "../assets/notebook.png"
import colors from "../assets/colors.png"
import files from "../assets/files.png"

//components
import Footer from "../components/Footer"
import HeaderHome from "../components/HeaderHome"
import Card from "../components/Card"
import projectsData from '../components/ProjectsData';

//styled-components exports
import { Container, ProfileInfoButton, ProfileInfoContainer, ProfileInfoDescription, ProfileInfoTitle, HabilitiesHeaderDescription,
         ProfileSectionIMG, ProjectCardContainer, ProjectSectionContainer, ProjectSectionTitle, HomeInfoContainer, HomeNameLeft, HomeNameRight, HomeProfession, 
         HomeProfileInfo, AllProjects, AllProjectsContainer, Background, ProfileHeaderSectionContainer, ProfileFirstContainer,
         ProfileSecondContainer, HomeProfessionContainer, ProfileSecondWrapper, HabilitiesHeader, HabilitiesTitle, HabilitiesContainer, HabilitiesWrapper,
         HabilitiesImageContainer, HabilitiesImage, HabilitiesName, HabilitiesDescription } from "../styles/HomeStyles"


export default function HomePage() {
  return (
    <>
      <HeaderHome />

      <HomeInfoContainer>
        <HomeProfileInfo>
          <HomeNameLeft>Igor <HomeNameRight>Perdigão</HomeNameRight></HomeNameLeft>
          <HomeProfessionContainer>
            
            <HomeProfession>Desenvolvedor Frontend Junior</HomeProfession>
          </HomeProfessionContainer>
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
              <ProfileInfoButton to="https://api.whatsapp.com/send/?phone=5531998023935&text&type=phone_number&app_absent=0" target="_blank">Entre em contato</ProfileInfoButton>
            </ProfileInfoContainer>
          </ProfileHeaderSectionContainer>
        </ProfileFirstContainer>

        <ProfileSecondContainer >
          <ProfileSecondWrapper id="habilidades">
            <HabilitiesHeader>
              <HabilitiesTitle>Meu Conjunto de Habilidades</HabilitiesTitle>
              <HabilitiesHeaderDescription>Conheça as capacidades e ferramentas que integro, habilitando-me a conceber soluções inovadoras e eficazes para satisfazer as demandas dos projetos e clientes.</HabilitiesHeaderDescription>
            </HabilitiesHeader>
            <HabilitiesContainer>
              <HabilitiesWrapper>
                <HabilitiesImageContainer>
                  <HabilitiesImage src={notbook} alt="" />
                </HabilitiesImageContainer>
                <HabilitiesName>Desenvolvimento Web</HabilitiesName>
                <HabilitiesDescription>Ampla experiência em desenvolvimento frontend, com ênfase em tecnologias de ponta.</HabilitiesDescription>
              </HabilitiesWrapper>
              <HabilitiesWrapper>
                <HabilitiesImageContainer>
                  <HabilitiesImage src={colors} alt="" />
                </HabilitiesImageContainer>
                <HabilitiesName>Web Design</HabilitiesName>
                <HabilitiesDescription>Habilidade em criar layouts modernos e responsivos, com foco na experiência do usuário.</HabilitiesDescription>
              </HabilitiesWrapper>
              <HabilitiesWrapper>
                <HabilitiesImageContainer>
                  <HabilitiesImage src={files} alt="" />
                </HabilitiesImageContainer>
                <HabilitiesName>Gerenciamentos de versões</HabilitiesName>
                <HabilitiesDescription>Experiência em ferramentas de gerenciamento de versão para controle de projetos.</HabilitiesDescription>
              </HabilitiesWrapper>
            </HabilitiesContainer>
          </ProfileSecondWrapper>
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
