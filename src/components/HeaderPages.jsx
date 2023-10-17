import  { useState, useEffect } from 'react'

import { HeaderContainer, HeaderLogoLeft, HeaderLogoRight, HeaderNavbarFixed, HeaderLogoLeftFixed, HeaderContainerFixed, 
         HeaderLogoRightFixed, HeaderNavbar } from "../styles/HeaderStyles"

export default function HeaderPages() {
  const [headerState, setHeaderState] = useState('normal');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLogoClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <HeaderLogoLeftFixed onClick={handleLogoClick}>
              Portfó<HeaderLogoRightFixed>lio</HeaderLogoRightFixed>
            </HeaderLogoLeftFixed>
          </HeaderNavbarFixed>
        </HeaderContainerFixed>
      ) : (
        <HeaderContainer id="home">
          <HeaderNavbar>
            <HeaderLogoLeft to="/" onClick={handleLogoClick}>
              Portfó<HeaderLogoRight>lio</HeaderLogoRight>
            </HeaderLogoLeft>
          </HeaderNavbar>
      </HeaderContainer>
      )}
    </>
  )
}
