import React, {useState, useEffect, useLayoutEffect} from 'react'

import { HeaderContainer, HeaderLI, HeaderLinks, HeaderLogoLeft, HeaderLogoRight, HeaderUL, HeaderLinksFixed, HeaderNavbarFixed,
         HeaderLogoLeftFixed, HeaderContainerFixed, HeaderLogoRightFixed, HeaderULFixed, HeaderLIFixed, HeaderNavbar} from "../styles/HeaderStyles"
    

export default function Header() {
  const [headerState, setHeaderState] = useState('normal');
  const [isMobile, setIsMobile] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let isScrolling = false;

    // Função para atualizar a largura da janela quando a janela for redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adicionar um ouvinte de evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Função para lidar com o scroll
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        const scrollY = window.scrollY;
        const headerActivationHeight = 340;
        const scrollThreshold = 50;
        const isHeaderFixed = scrollY > headerActivationHeight;

        if (isHeaderFixed && headerState !== 'fixed') {
          setHeaderState('fixed');
        } else if (!isHeaderFixed && headerState !== 'normal') {
          if (scrollY <= scrollThreshold) {
            setHeaderState('normal');
          }
        }

        setTimeout(() => {
          isScrolling = false;
        }, 50);
      }
    };

    // Adicionar um ouvinte de evento de rolagem da janela
    window.addEventListener('scroll', handleScroll);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerState]);

  return (
    <>
          {headerState === 'fixed' ? (
            <HeaderContainerFixed>
              <HeaderNavbarFixed>
                <HeaderLogoLeftFixed to="/" onClick={handleLogoClick}>Portfó<HeaderLogoRightFixed>lio</HeaderLogoRightFixed></HeaderLogoLeftFixed>
                <HeaderULFixed>
                  <HeaderLIFixed><HeaderLinksFixed href="#sobre">Sobre</HeaderLinksFixed></HeaderLIFixed>
                  <HeaderLIFixed><HeaderLinksFixed href="#projetos-id">Projetos</HeaderLinksFixed></HeaderLIFixed>
                  <HeaderLIFixed><HeaderLinksFixed href="#fale-comigo">Fale comigo</HeaderLinksFixed></HeaderLIFixed>
                </HeaderULFixed>
              </HeaderNavbarFixed>
            </HeaderContainerFixed>
          ) : (
            <HeaderContainer id="home">
              <HeaderNavbar>
                <HeaderLogoLeft to="/" onClick={handleLogoClick}>Portfó<HeaderLogoRight>lio</HeaderLogoRight></HeaderLogoLeft>
                <HeaderUL>
                  <HeaderLI><HeaderLinks href="#sobre">Sobre</HeaderLinks></HeaderLI>
                  <HeaderLI><HeaderLinks href="#projetos-id">Projetos</HeaderLinks></HeaderLI>
                  <HeaderLI><HeaderLinks href="#fale-comigo">Fale comigo</HeaderLinks></HeaderLI>
                </HeaderUL>
              </HeaderNavbar>
            </HeaderContainer>
          )}
      </>
  )
}
