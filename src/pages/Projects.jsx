import Carousel from '../components/Carousel'
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

import { LinksProjectsContainer, LinksProjectsTitle, ProjectsContainer, ProjectsInfoContainer, ProjectsInfoDependencies, ProjectsInfoDescription,
         ProjectsInfoTitle, ProjectsMapImagesContainer, ProjectsMapImagesTitle, ProjectsMapImagesWrapper, ProjectsParagraph,
         ProjectsRepoContainer, ProjectsRepoTitle, ProjectTitle, ProjectsWrapper, ProjectIMG} from "../styles/ProjectsStyles"

export default function Projects({ title, img, description, link, carouselsData, firstlink, secondlink, technologiesUsed, dependencies }) {
  return (
    <>
      <ProjectsContainer>
        <ProjectsWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectIMG src={img}/>
          <ProjectsInfoContainer>
            <ProjectsInfoTitle>Sobre</ProjectsInfoTitle>
            <ProjectsInfoDescription>{technologiesUsed}</ProjectsInfoDescription>
            <ProjectsInfoDependencies>{dependencies}</ProjectsInfoDependencies>
            <ProjectsInfoDescription>{description}</ProjectsInfoDescription>
          </ProjectsInfoContainer>
          <ProjectsRepoContainer>
            <ProjectsRepoTitle>Repositório</ProjectsRepoTitle>
            <ProjectsParagraph to={firstlink} target='_blank'>{firstlink}</ProjectsParagraph>
            <ProjectsParagraph to={secondlink} target='_blank'>{secondlink}</ProjectsParagraph>
          </ProjectsRepoContainer>
          <LinksProjectsContainer>
              <LinksProjectsTitle>Link do Projeto</LinksProjectsTitle>
              <ProjectsParagraph to={link} target='_blank'>{link}</ProjectsParagraph>
            </LinksProjectsContainer>
          <ProjectsMapImagesContainer>
            {carouselsData.map((carouselData, index) => (
              <ProjectsMapImagesWrapper key={index}>
                <ProjectsMapImagesTitle>{carouselData.title}</ProjectsMapImagesTitle>
                <Carousel images={carouselData.images} />
              </ProjectsMapImagesWrapper>
            ))}
          </ProjectsMapImagesContainer>
        </ProjectsWrapper>
      </ProjectsContainer>

      <Footer />
    </>
  )
}

    Projects.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    carouselsData: PropTypes.arrayOf(
      PropTypes.shape({
        images: PropTypes.array.isRequired,
      })
    ).isRequired,   
  };
