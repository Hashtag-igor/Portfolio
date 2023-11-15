import Card from '../components/Card';
import Footer from '../components/Footer';

import projectsData from "../components/ProjectsData";
 

import { AllProjectsMapContainer, ProjectSectionTitle, AllProjectsContainer, AllProjectsWrapper } from '../styles/ProjectsStyles';

const AllProjects = () => {
  return (
    <AllProjectsContainer>
      <ProjectSectionTitle>Todos os Projetos</ProjectSectionTitle>
      <AllProjectsWrapper>
        <AllProjectsMapContainer>
          {projectsData.map((project, index) => (
            <Card
              key={index}
              img={project.img}
              alt={project.alt}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))}
        </AllProjectsMapContainer>
      </AllProjectsWrapper>
      
      <Footer />
    </AllProjectsContainer>
  );
};

export default AllProjects;
