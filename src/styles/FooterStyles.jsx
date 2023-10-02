import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #000;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const FooterName = styled.h5`
    color: white;
    font-size: 30px;
`
export const FooterDescription = styled.p`
    color: white;
    font-size: 18px;
    margin-top: 14px;
    margin-bottom: 30px;
`
export const FooterSocialContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const FooterSocialIMG = styled.img`
    height: 24px;
    border-radius: 50%;
`
export const FooterSocialLink = styled.a`
    background-color: #f9004d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    cursor: pointer;

    &:hover {
        transform: scale(1.3);
        transition: 0.5s;
    }
`