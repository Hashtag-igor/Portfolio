import styled from "styled-components";
import { Link } from "react-router-dom"
import background from "../assets/background.png"

export const Container = styled.main`
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 40px;
    }
`
export const ProfileFirstContainer = styled.div`
    background-color: #fff;
`
export const ProfileSecondContainer = styled.div`
    background-color: #FAF6F0;
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
        height: 30vh;
    }

    @media screen and (max-width: 800px) {
        height: 40vh;
    }

    @media screen and (max-width: 700px) {
        height: 36vh;
    }

    @media screen and (max-width: 500px) {
        height: 86vh;
    }

    @media screen and (max-width: 400px) {
        height: 85vh;
    }

    @media screen and (max-width: 340px) {
        height: 80vh;
    }

    @media (orientation: landscape) {
        /* Estilos para dispositivos em orientação deitada */
        height: 100vh; /* Ajuste a altura conforme necessário */
    }
`;

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

    @media screen and (max-width: 500px) {
        margin: 120px 0;
    }

    @media screen and (max-width: 400px) {
        margin: 100px auto;
    }

    @media screen and (max-width: 340px) {
        width: 95%;
        margin: 60px auto;
    }

    @media (orientation: landscape) {
        @media screen and (max-width: 1024px) {
            margin: 190px 0;
        }

        @media screen and (max-width: 890px) {
            margin: 100px 0;
        }

        @media screen and (max-width: 780px) {
            margin: 80px 0;
        }
    }
`
export const HomeNameLeft = styled.h1`
    color: white;
    font-size: 75px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px 30px;
    margin-bottom: 30px;


    @media screen and (max-width: 767px) {
        font-size: 68px;
    }

    @media screen and (max-width: 500px) {
        font-size: 75px;
        flex-direction: column;
    }

    @media screen and (max-width: 420px) {
        font-size: 72px;
    }

    @media screen and (max-width: 340px) {
        font-size: 60px;
        margin-bottom: 20px;
    }
`
export const HomeNameRight = styled.span`
    color: #f9004d;
`
export const HomeProfessionContainer = styled.div`
    overflow: hidden; 
    white-space: nowrap; 
    font-size: 2em;

    @media screen and (max-width: 1024px){ width: 54%; margin: auto; }

    @media screen and (max-width: 1000px){ width: 55%; }

    @media screen and (max-width: 970px){ width: 57%; } 

    @media screen and (max-width: 930px){ width: 59%; }

    @media screen and (max-width: 900px){ width: 61%; }

    @media screen and (max-width: 870px){ width: 63%; }

    @media screen and (max-width: 840px){ width: 66%; }

    @media screen and (max-width: 810px){ width: 68%; }

    @media screen and (max-width: 780px){ width: 70%; }
    
    @media screen and (max-width: 760px){ width: 72%; }

    @media screen and (max-width: 740px){ width: 74%; }

    @media screen and (max-width: 720px){ width: 76%; }

    @media screen and (max-width: 700px){ width: 63%; }

    @media screen and (max-width: 680px){ width: 65%; }

    @media screen and (max-width: 660px){ width: 67%; }

    @media screen and (max-width: 640px){ width: 69%; }

    @media screen and (max-width: 620px){ width: 71%; }

    @media screen and (max-width: 600px){ width: 74%; }

    @media screen and (max-width: 580px){ width: 76%; }

    @media screen and (max-width: 560px){ width: 78%; }

    @media screen and (max-width: 550px){ width: 79%; }

    @media screen and (max-width: 530px){ width: 82%; }

    @media screen and (max-width: 520px){ width: 84%; }

    @media screen and (max-width: 510px){ width: 85%; }

    @media screen and (max-width: 500px){ width: 88%; }

    @media screen and (max-width: 485px){ width: 90%; }

    @media screen and (max-width: 477px){ width: 92%; }

    @media screen and (max-width: 465px){ width: 94%; }

    @media screen and (max-width: 455px){ width: 96%; }

    @media screen and (max-width: 445px){ width: 85%; }

    @media screen and (max-width: 435px){ width: 88%; }

    @media screen and (max-width: 420px){ width: 90%; }

    @media screen and (max-width: 410px){ width: 86%; }

    @media screen and (max-width: 400px){ width: 90%; }

    @media screen and (max-width: 380px){ width: 86%; }

    @media screen and (max-width: 365px){ width: 90%;}

    @media screen and (max-width: 350px){ width: 84%; }

    @media screen and (max-width: 340px){ width: 90%; }

    @media screen and (max-width: 335px){ width: 94%; }
`

export const HomeProfession = styled.h3`
    color: white;
    margin-top: 2px;
    overflow: hidden;
    display: inline-block;
    border-right: .15em solid orange;
    position: relative;
    animation: typing-erasing 8s steps(30, end) infinite;

    @keyframes typing-erasing {
        0%, 100% { width: 0; }
        25%, 75% { width: 100%; }
        50% { width: 100%; }
    }

    @media screen and (max-width: 700px){ font-size: 30px; }

    @media screen and (max-width: 445px){ font-size: 26px; }

    @media screen and (max-width: 410px){ font-size: 24px; }

    @media screen and (max-width: 380px){ font-size: 22px; }

    @media screen and (max-width: 350px){ font-size: 20px; }
`;


//PROFILE SECTION
export const ProfileHeaderSectionContainer = styled.section`
    display: flex;
    align-items: center;
    /* padding: 170px 15%; */
    width: 80%;
    padding: 130px 0;
    margin: auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 180px 0 240px 0;
    }

    @media screen and (max-width: 800px) {
        width: 90%;
        margin: auto;
        padding: 130px 0 220px 0;
    }

    @media screen and (max-width: 700px) {
        padding: 150px 0 220px 0;
    }

    @media screen and (max-width: 500px) {
        text-align: center;
        width: 95%;
    }

    @media screen and (max-width: 400px) {
        padding: 120px 0 240px 0;
    }
`
export const ProfileSectionIMG = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 100%;
    /* border: 2px solid #f9004d; */
    border: 3px solid white;
    margin-right: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.459), 0 6px 20px rgba(0, 0, 0, 0.15);




    @media screen and (max-width: 1024px) {
        height: 450px;
        width: 450px;
        margin: 0 auto 60px auto;
    }

    @media screen and (max-width: 768px) {
        height: 400px;
        width: 400px;
    }

    @media screen and (max-width: 600px) {
        height: 350px;
        width: 350px;
    }

    @media screen and (max-width: 400px) {
        height: 250px;
        width: 250px;
    }
`
export const ProfileInfoContainer = styled.div`
    @media screen and (max-width: 600px) {
        width: 92%;
    }

    @media screen and (max-width: 359px) {
        width: 95%;
    }
`
export const ProfileInfoTitle = styled.h2`
    color: #000000;
    font-size: 70px;

    @media screen and (max-width: 500px) {
        text-align: center;
    }

    @media screen and (max-width: 420px) {
        font-size: 66px;
    }

    @media screen and (max-width: 360px) {
        font-size: 58px;
        margin-bottom: 30px;
    }
`
export const ProfileInfoDescription = styled.p`
    color: #000000;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 60px;
    line-height: 28px;
    text-align: justify;

    @media screen and (max-width: 359px) {
        text-align: justify;
        line-height: 30px;
        width: 95%;
        margin: 20px auto 60px auto;
    }
`
export const ProfileInfoButton = styled(Link)`
    color: white;
    background: #f9004d;
    padding: 15px 25px;
    font-size: 20px;
    border: none;
    border-radius: 26px;
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        color: #f9004d;
        border: 3px solid #f9004d;
        transition: 0.5s;
    }
`


//HABILITIES
export const ProfileSectionContainer = styled.section`
    display: flex;
    align-items: center;
    width: 80%;
    margin: auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 180px 0 240px 0;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
        margin: auto;
        padding: 150px 0 220px 0;
    }

    @media screen and (max-width: 500px) {
        text-align: center;
        width: 95%;
    }

    @media screen and (max-width: 400px) {
        padding: 120px 0 240px 0;
    }
`
export const ProfileSecondWrapper = styled.div`
    width: 100%;
    padding: 130px 0 40px 0;

    @media screen and (max-width: 560px) {
        padding: 100px 0 30px 0;
    }
`
export const HabilitiesHeader = styled.div`
    text-align: center;
    width: 60%;
    margin: auto;
    line-height: 25px;

    @media screen and (max-width: 1150px) {
        width: 80%;
    }

    @media screen and (max-width: 900px) {
        width: 70%;
    }

    @media screen and (max-width: 830px) {
        width: 80%;
    }

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    @media screen and (max-width: 720px) {
        width: 90%;
    }

`
export const HabilitiesTitle = styled.h2`
    font-size: 42px;
    margin-bottom: 18px;

    @media screen and (max-width: 720px) {
        margin-bottom: 20px;
        width: 100%;
        font-size: 36px;
    }

    @media screen and (max-width: 560px) {
        font-size: 38px;
        line-height: 45px;
    }

    @media screen and (max-width: 500px) {
        font-size: 36px;
        line-height: 45px;
    }

    @media screen and (max-width: 400px) {
        font-size: 33px;
        line-height: 45px;
    }
`
export const HabilitiesHeaderDescription = styled.p`
    font-size: 20px;

    @media screen and (max-width: 890px) {
        text-align: justify;
    }
`
export const HabilitiesContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;  
    margin: 70px 0 80px 0; 
    text-align: center;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }

    @media screen and (max-width: 560px) {
        margin: 70px 0 50px 0; 
    }
`
export const HabilitiesWrapper = styled.div`
    width: 25%; 
    display: flex; 
    flex-direction: column; 
    gap: 10px 0;

    @media screen and (max-width: 700px) {
        width: 70%;
        margin-bottom: 60px;
    }
`
export const HabilitiesImageContainer = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.295);
    margin: 10px auto;

    @media screen and (max-width: 700px) {
        width: 6rem;
        height: 6rem;
    }
`
export const HabilitiesImage = styled.img`
    overflow-clip-margin: content-box;
    overflow: clip;
`
export const HabilitiesName = styled.h4`
    font-size: 20px;
    margin-top: 5px;

    @media screen and (max-width: 700px) {
        font-size: 22px;
    }
`
export const HabilitiesDescription = styled.p`
    font-size: 16px;

    @media screen and (max-width: 700px) {
        font-size: 18px;
        text-align: justify;
    }

    
`

//PROJECT SECTION
export const ProjectSectionContainer = styled.section`
    background-color: #191919;
    padding: 120px 0 160px 0;

    @media screen and (max-width: 700px) {
        padding: 90px 0 160px 0;
    }

    @media screen and (max-width: 600px) {
        padding: 100px 0 160px 0;
    }
`
export const ProjectSectionTitle = styled.h2`
    color: white;
    font-size: 70px;
    text-align: center;

    @media screen and (max-width: 700px) {
        font-size: 64px;
    }

    @media screen and (max-width: 600px) {
        font-size: 52px;
    }

    @media screen and (max-width: 500px) {
        font-size: 44px;
    }

    @media screen and (max-width: 400px) {
        font-size: 40px;
    }

    @media screen and (max-width: 359px) {
        font-size: 34px;
    }
`
export const ProjectCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 60px;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        margin-top: 40px;
    }
`
export const ProjectCardWrapper = styled.div`
    /* background-color: #000000; */
    background-color: white;
    height: 530px;
    width: 335px;
    border-radius: 20px;
    padding: 20px 35px;
    text-align: center;
    margin: 0 0 80px 0;

    @media screen and (max-width: 1024px) {
        width: 90%;
        margin: 15px auto;
    }

    @media screen and (max-width: 768px) {
        height: 600px;
    }

    @media screen and (max-width: 600px) {
        height: 680px;
    }

    @media screen and (max-width: 500px) {
        height: 760px;
        width: 95%;
    }

    @media screen and (max-width: 400px) {
        height: 800px;
        /* width: 100%; */
    }

    @media screen and (max-width: 360px) {
        height: 800px;
        width: 100%;
        padding: 30px 0;
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

    @media screen and (max-width: 360px) {
        margin: 25px 0;
    }
`
export const ProjectCardName = styled.h5`
    /* color: white; */
    font-size: 30px;
`
export const ProjectCardDescription = styled.p`
    /* color: #e2b9c6; */
    margin-top: 30px;
    margin-bottom: 50px;
    text-align: justify;

    @media screen and (max-width: 1024px) {
        line-height: 25px;
        text-align: justify;
        font-size: 20px;
    }

    @media screen and (max-width: 360px) {
        width: 90%;
        margin: 30px auto 40px auto;
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
        color: #f9004d;
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
        font-size: 24px;
    }

    @media screen and (max-width: 400px) {
        font-size: 20px;
    }
`
export const AllProjectsContainer = styled.div`
    text-align: center;
    margin-top: 50px;

    @media screen and (max-width: 600px) {
        margin-top: 50px;
    }
`