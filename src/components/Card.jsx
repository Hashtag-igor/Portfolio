import { ProjectCardWrapper, ProjectCardIMG, ProjectCardName, ProjectCardDescription, ProjectLink } from "../styles/HomeStyles";

const Card = ({ img, alt, name, description, link }) => {
  return (
    <ProjectCardWrapper>
      <ProjectCardIMG src={img} alt={alt} />
      <ProjectCardName>{name}</ProjectCardName>
      <ProjectCardDescription>{description}</ProjectCardDescription>
      <ProjectLink to={link}>Ver Projeto</ProjectLink>
    </ProjectCardWrapper>
  );
};

export default Card;

