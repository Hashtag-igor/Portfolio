import { Link } from "react-router-dom";
import styled from "styled-components";

//HeaderPage
export const HeaderNavbarPages = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 70px 20px 70px;

  @media screen and (max-width: 1300px) {
    padding: 25px 60px 20px 60px;
  }

  @media screen and (max-width: 1100px) {
    padding: 25px 50px 20px 50px;
  }

  @media screen and (max-width: 800px) {
    padding: 25px 30px;
  }

  @media screen and (max-width: 500px) {
    padding: 25px 20px 20px 20px;
  }

  @media screen and (max-width: 380px) {
    padding: 25px 15px 20px 15px;
  }
`
export const HeaderNavbarFixedPages = styled.nav`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 50px;

  @media screen and (max-width: 800px) {
    padding: 25px 30px;
  }

  @media screen and (max-width: 500px) {
    padding: 25px 20px 20px 20px;
  }

  @media screen and (max-width: 380px) {
    padding: 25px 15px 20px 15px;
  }
`
export const HeaderLogoLeftFixedPages = styled(Link)`
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
`
export const HeaderLinksFixedPages = styled(Link)`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`



export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #191919;
`
export const HeaderNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 30px;
`
export const HeaderLogoLeft = styled(Link)`
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;

  @media screen and (max-width: 770px) {
    margin-right: 20px;
  }
`
export const HeaderLogoRight = styled.a`
    color: #f9004d;
`
export const HeaderUL = styled.ul`
  display: flex;
  justify-content: space-between;

    @media screen and (max-width: 700px) {
      display: none;
    }
`

export const HeaderLI = styled.li`
    color: white;
    list-style: none;
    display: inline-block;
    font-size: 25px;
    margin-right: 30px;
    cursor: pointer;

    &:hover {
      color: #f9004d;
    }
`
export const HeaderLinks = styled.a`
    text-decoration: none;
    color: white;
`


//Header Fixed
export const HeaderContainerFixed = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: #191919;
  height: 80px;
  z-index: 999;
  top: 0;
`
export const HeaderNavbarFixed = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: auto;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
`
export const HeaderLogoLeftFixed = styled(Link)`
  color: #ffffff;
  font-size: 40px;
  font-weight: 500;
  flex: 1;

  @media screen and (max-width: 700px) {
    font-size: 28px;
    margin: 0 20px 0 20px;
    flex: 0;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }

  @media screen and (max-width: 580px) {
    margin: 0 10px 0 13px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }

  @media screen and (max-width: 370px) {
    font-size: 14px;
  }

  @media screen and (max-width: 340px) {
    margin: 0 6px 0 5px;
  }
`
export const HeaderLogoRightFixed = styled.a`
    color: #f9004d;
`
export const HeaderULFixed = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    flex: 2;

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 350px) {
    justify-content: space-between;
  }


`
export const HeaderLIFixed = styled.li`
    color: white;
    list-style: none;
    display: inline-block;
    font-size: 22px;
    margin-right: 30px;
    cursor: pointer;

    @media screen and (max-width: 580px) {
      font-size: 18px;
      margin-right: 0;
    }

    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`
export const HeaderLinksFixed = styled.a`
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }

  @media screen and (max-width: 580px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }

  @media screen and (max-width: 370px) {
    font-size: 14px;
  }
`
export const HeaderProfileInfoFixed = styled.div`

`
export const HeaderNameLeftFixed = styled.h1`

`
export const HeaderNameRightFixed = styled.span`

`
export const HeaderProfessionFixed = styled.h3`

`


//Mobile Page
export const PaginaOverlayMobile = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background-color: #f9004d;
    overflow: hidden;
    transition: height 0.3s ease;
    display: flex;
    align-items: flex-start;
    z-index: 2;
    
    &.pagina-overlay-aberto {
      height: 100vh;
      width: 100%;
      background-color: #fff;
    }
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 768px) {
      z-index: 1;

      &.pagina-overlay-aberto {
        height: 400vh;
      }
    }
  }
`;

export const PaginaConteudoMobileContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 40px;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 1;
    
    &.pagina-overlay-aberto & {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 40px 30px;
  }

  @media screen and (max-width: 330px) {
    padding: 30px 20px;
  }
`;

export const PaginaConteudoMobileWrapper = styled.div`
  width: 80%;
  display: flex; 
  flex-direction: column;
  gap: 30px 0;

  @media screen and (max-width: 340px) {
    gap: 24px 0;
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 768px) {
      gap: 18px 0;
    }
  }
`

export const PaginaConteudoMobileTitle = styled(Link)`
  margin-bottom: 30px; 
  font-size: 52px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #f9004d;
  text-shadow: 1px 2px 1px rgb(0, 0, 0);
  font-weight: bolder;

  @media screen and (max-width: 500px) {
    font-size: 44px;
  }

  @media screen and (max-width: 340px) {
    margin-bottom: 15px;
  }

`

export const PaginaConteudoMobileSubTitle = styled.h2`
  font-size: 34px; 
  color: #191919;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }
  
  @media screen and (max-width: 340px) {
    margin-top: 15px;
    font-size: 28px;
  }

  @media (orientation: landscape) {
    @media screen and (max-width: 768px) {
      margin-top: 12px;
    }
  }
`

export const MenuToggleMobile = styled.button`
  z-index: 2;

  @media screen and (max-width: 768px) {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 30px;
  }
`;

export const MenuIconMobile = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
    width: 55px;
    height: 8px;
    background: #f9004d;
    position: relative;
    display: flex;
    transition: transform 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 55px;
      height: 8px;
      background: #f9004d;
    }

    &::before {
      top: -13px;
    }

    &::after {
      bottom: -13px;
    }

    &.menu-icon-x {
      transform: rotate(45deg);
    }
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 14px 0;
  background-color: #0b3f1a;
  border-bottom: 1px solid #0a3d19;
  box-shadow: 3px 2px 2px #093817;
`;

export const NavbarWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`;

export const HeaderLinksMobilePage  = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 26px;
  margin-left: 20px;

  &:hover {
    color: #f9004d;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }

  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`