import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { FaPhone } from "react-icons/fa" 

export const FooterContainer = styled.footer`
    background-color: #000;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`
export const FooterSocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        gap: 60px 0;
    }
`
export const FooterSocialWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
`
export const FooterTitle = styled.h2`
    /* color: #f9004d; */
    
    margin-bottom: 10px;
    font-size: 32px;

    @media screen and (max-width: 767px) {
        font-size: 26px;
    }

    @media screen and (max-width: 600px) {
        font-size: 22px;
    }
`
export const LinkedinIcon = styled(BsLinkedin)`
    color: #4040f7;
    margin-right: 6px;
`
export const MailIcoon = styled(AiOutlineMail)`
    color: #f9004d;
    margin-right: 6px;
    font-size: 20px;
`
export const GithubIcon = styled(BsGithub)`
    color: #fff;
    margin-right: 6px;
`
export const PhoneIcon = styled(FaPhone)`
    color: #077907;
    margin-right: 6px;
`
export const FooterInfoContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-direction: column; 
`
export const FooterInfoWrapper = styled.div`
    display: flex;
`
export const FooterSocialLinkWrapper = styled.a`
    display: flex;
`
export const FooterLink = styled.h3`
    cursor: pointer;

    &:hover {
        color: #f9004d;
    }

    @media screen and (max-width: 600px) {
        font-size: 16px;
    }
`
export const RightsReservedContainer = styled.div`
    margin-top: 80px;
`
export const FooterName = styled.h5`
    font-size: 16px;
    text-align: center;

    @media screen and (max-width: 400px) {
        font-size: 14px;
    }
`