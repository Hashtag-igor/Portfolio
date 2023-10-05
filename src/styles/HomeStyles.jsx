import styled from "styled-components";
import { Link } from "react-router-dom"
import background from "../assets/background.png"

export const HomeContainer = styled.main`
    background-color: #000000;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 40px;
    }
`

export const Background = styled.div`
    height: 90vh;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`
export const HomeInfoContainer = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    background-color: #191919;

    @media screen and (max-width: 1024px) {
        height: 25vh;
    }
`
export const HomeProfileInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 7%; 
    
    @media screen and (max-width: 1024px) {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 80px 0;
    }
`
export const HomeNameLeft = styled.h1`
    color: white;
    font-size: 75px;
`
export const HomeNameRight = styled.span`
    color: #f9004d;
`
export const HomeProfession = styled.h3`
    color: white;
    font-size: 25px;
    margin-top: 10px;
`


//PROFILE SECTION
export const ProfileSectionContainer = styled.section`
    display: flex;
    align-items: center;
    /* padding: 170px 15%; */
    width: 80%;
    padding: 240px 0;
    margin: auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 180px 0 240px 0;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
export const ProfileSectionIMG = styled.img`
    height: 400px;
    border-radius: 100%;
    /* border: 2px solid #f9004d; */
    border: 2px solid white;
    margin-right: 50px;

    @media screen and (max-width: 1024px) {
        height: 450px;
        margin: 0 auto 60px auto;
    }
`
export const ProfileInfoContainer = styled.div`
    
`
export const ProfileInfoTitle = styled.h2`
    color: white;
    font-size: 75px;
`
export const ProfileInfoDescription = styled.p`
    color: #e2b9c6;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 60px;
    line-height: 28px;
`
export const ProfileInfoButton = styled.button`
    color: white;
    background: #f9004d;
    height: 50px;
    width: 200px;
    font-size: 20px;
    border: none;
    border-radius: 26px;
    cursor: pointer;

    &:hover {
        background-color: black;
        border: 3px solid #f9004d;
        transition: 0.5s;
    }
`


//PROJECT SECTION
export const ProjectSectionContainer = styled.section`
    background-color: #191919;
    padding: 160px 0;
`
export const ProjectSectionTitle = styled.h2`
    color: white;
    font-size: 75px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 60px;
    }

    @media screen and (max-width: 600px) {
        font-size: 50px;
    }
    @media screen and (max-width: 600px) {
        font-size: 40px;
    }
`
export const ProjectCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
    }
`
export const ProjectCardWrapper = styled.div`
    background-color: #000000;
    height: 500px;
    width: 335px;
    border-radius: 20px;
    padding: 20px 35px;
    text-align: center;

    @media screen and (max-width: 1024px) {
        width: 90%;
        margin: 15px auto;
        height: 520px;
    }
`
export const ProjectCardIMG = styled.img`
    height: 100px;
    margin: 10px 0;

    @media screen and (max-width: 1024px) {
        height: 120px;
        width: 160px;
        margin: 15px 0;
    }
`
export const ProjectCardName = styled.h5`
    color: white;
    font-size: 26px;
`
export const ProjectCardDescription = styled.p`
    color: #e2b9c6;
    margin-top: 30px;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) {
        line-height: 25px;
        text-align: justify;
        font-size: 18px;
    }
`
export const ProjectLink = styled(Link)`
    background-color: #f9004d;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.5s;
    text-decoration: none;

    &:hover {
        background-color: transparent;
        border: 2px solid #f9004d;
    }

    @media screen and (max-width: 1024px) {
        padding: 15px 40px;
        font-size: 18px;
    }
`
export const AllProjects = styled(Link)`
    color: white;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: transparent;
        color: #f9004d;
    }

    @media screen and (max-width: 1024px) {
        font-size: 18px;
    }
`
export const AllProjectsContainer = styled.div`
    text-align: center;
    margin-top: 50px;
`