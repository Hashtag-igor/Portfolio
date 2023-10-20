import styled from "styled-components";

import { Link } from "react-router-dom"

export const ProjectsContainer = styled.div`
    margin: 30px 0 100px 0;
`
export const ProjectsWrapper = styled.div`
    width: 90%;
    margin: auto;
`
export const ProjectsTitle = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;

    @media screen and (max-width: 420px) {
        font-size: 35px;
    }
`
export const ProjectsInfoContainer = styled.div`
`
export const ProjectsInfoTitle = styled.h2`
    margin-top: 30px; 
    margin-bottom: 10px;
    font-size: 26px;
`
export const ProjectsParagraph = styled(Link)`
    color: black;
    display: block;
    margin-bottom: 5px;
    transition: 0.3s;

    &:hover {
        color: #f9004d;
        cursor: pointer;
    }
`
export const ProjectsInfoDependencies = styled.p`
    margin-top: 10px;
`
export const ProjectsInfoDescription = styled.p`
    text-align: justify;
    margin-top: 10px;
`
export const ProjectsRepoContainer = styled.div`
    margin-bottom: 50px;
`
export const ProjectsRepoTitle = styled.h2`
    margin: 50px 0 10px 0; 
    font-size: 26px;
`
export const LinksProjectsContainer = styled.div`
    margin: 50px 0 10px 0;
`
export const LinksProjectsTitle = styled.h2`
    margin: 30px 0 10px 0;
    font-size: 26px;
`
export const ProjectsMapImagesContainer = styled.div`
`
export const ProjectsMapImagesWrapper = styled.div`
`
export const ProjectsMapImagesTitle = styled.h2`
    margin: 60px 0 50px 0;
    font-size: 26px;

    @media screen and (max-width: 767px) {
        text-align: center;
        margin: 80px 0 40px 0;
        font-size: 28px;
    }

    @media screen and (max-width: 389px) {
        text-align: center;
        margin: 80px 0 40px 0;
        font-size: 24px;
    }
`