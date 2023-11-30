import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom"

export const LinkedinIcon = styled(BsLinkedin)`
    font-size: 30px;
    color: #000;

    &:hover {
        color: #4040f7;
        cursor: pointer; 
    }
`
export const GithubIcon = styled(BsGithub)` 
    font-size: 30px;
    color: #000;

    &:hover {
        color: #494949;
        cursor: pointer; 
    }
`
export const InstagramIcon = styled(FaInstagram)`
    font-size: 30px;
    color: #000;

    &:hover {
        color: #e9004e;
        cursor: pointer; 
    }    
`
export const WhatsappIcon = styled(FaWhatsapp)`
    font-size: 30px;
    color: #000;

    &:hover {
        color: #077907;
        cursor: pointer; 
    }
`

export const FooterContainer = styled.div`
    background: #fff; 
    padding: 80px 0 20px 0;

    @media screen and (max-width: 400px) {
        padding: 110px 0 30px 0;
    }
`
export const FooterProfileContainer = styled.div`
    text-align: center; 
    color: #000000; 
    width: 40%; 
    margin: auto; 

    @media screen and (max-width: 1000px) {
        width: 50%;
    }

    @media screen and (max-width: 800px) {
        width: 60%;
    }

    @media screen and (max-width: 600px) {
        width: 80%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
    }
`
export const FooterProfileWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 25px 0;
`
export const FooterTitle = styled.h2`
    font-size: 30px;
`
export const FooterDescription = styled.p`
    text-align: justify;
    line-height: 25px;
`
export const FooterName = styled.p`
    text-align: center;
`
export const FooterNumber = styled.p`
    text-align: center;
`
export const FooterLinksContainer = styled.ul`
    list-style: none; 
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
`
export const FooterLinksWrapper = styled(Link)`
`

export const RightsReservedContainer = styled.div`
    margin: 90px 0 10px 0;
`
export const FooterReserved = styled.h5`
    font-size: 16px;
    text-align: center;
    color: rgb(0, 0, 0);

    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`