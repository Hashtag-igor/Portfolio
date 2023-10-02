import styled from "styled-components";

export const HomeContainer = styled.main``

//PROFILE SECTION
export const ProfileSectionContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 100px 15%;
    background-color: #000000;
`
export const ProfileSectionIMG = styled.img`
    height: 400px;
    border-radius: 100%;
    /* border: 2px solid #f9004d; */
    border: 2px solid white;
    margin-right: 30px;
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
    margin-top: 15px;
    margin-bottom: 60px;
`
export const ProfileInfoButton = styled.button`
    color: white;
    background: #f9004d;
    height: 50px;
    width: 180px;
    font-size: 18px;
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
    padding: 110px 0;
`
export const ProjectSectionTitle = styled.h2`
    color: white;
    font-size: 75px;
    text-align: center;
`
export const ProjectCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
`
export const ProjectCardWrapper = styled.div`
    background-color: #000000;
    height: 500px;
    width: 335px;
    border-radius: 20px;
    padding: 20px 35px;
    text-align: center;
`
export const ProjectCardIMG = styled.img`
    height: 100px;
    margin: 10px 0;
`
export const ProjectCardName = styled.h5`
    color: white;
    font-size: 24px;
`
export const ProjectCardDescription = styled.p`
    color: #e2b9c6;
    margin-top: 20px;
    margin-bottom: 40px;
`
export const ProjectLink = styled.a`
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
`