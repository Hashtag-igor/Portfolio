import  {useState, useEffect, useLayoutEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { HeaderContainer, HeaderLI, HeaderLinks, HeaderLogoLeft, HeaderLogoRight, HeaderUL, HeaderLinksFixed, HeaderNavbarFixed,
         HeaderLogoLeftFixed, HeaderContainerFixed, HeaderLogoRightFixed, HeaderULFixed, HeaderLIFixed, HeaderNavbar,
         MenuIconMobile, MenuToggleMobile, PaginaConteudoMobileContainer, PaginaConteudoMobileWrapper, PaginaOverlayMobile, 
         HeaderLinksMobilePage, PaginaConteudoMobileSubTitle, PaginaConteudoMobileTitle} from "../styles/HeaderStyles"
    

export default function HeaderHome() {
  const [headerState, setHeaderState] = useState('normal');
  const [isMobile, setIsMobile] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [aberto, setAberto] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const fecharMenu = () => {
    setAberto(false);
  };

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  useLayoutEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 700;
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
            <HeaderLogoLeftFixed to="/" onClick={handleLogoClick}>
              Portfó<HeaderLogoRightFixed>lio</HeaderLogoRightFixed>
            </HeaderLogoLeftFixed>
            <HeaderULFixed>
              <HeaderLIFixed>
                <HeaderLinksFixed href="#sobre">Sobre</HeaderLinksFixed>
              </HeaderLIFixed>
              <HeaderLIFixed>
                <HeaderLinksFixed href="#projetos-id">Projetos</HeaderLinksFixed>
              </HeaderLIFixed>
              <HeaderLIFixed>
                <HeaderLinksFixed href="#fale-comigo">Fale comigo</HeaderLinksFixed>
              </HeaderLIFixed>
            </HeaderULFixed>
          </HeaderNavbarFixed>
        </HeaderContainerFixed>
      ) : (
        <HeaderContainer id="home">
          <HeaderNavbar>
            <HeaderLogoLeft to="/" onClick={handleLogoClick}>
              Portfó<HeaderLogoRight>lio</HeaderLogoRight>
            </HeaderLogoLeft>
            <HeaderUL>
              <HeaderLI>
                <HeaderLinks href="#sobre">Sobre</HeaderLinks>
              </HeaderLI>
              <HeaderLI>
                <HeaderLinks href="#projetos-id">Projetos</HeaderLinks>
              </HeaderLI>
              <HeaderLI>
                <HeaderLinks href="#fale-comigo">Fale comigo</HeaderLinks>
              </HeaderLI>
            </HeaderUL>
          </HeaderNavbar>

          {isMobile && isVisible ? (
            <PaginaOverlayMobile className={`pagina-overlay ${aberto ? 'pagina-overlay-aberto' : ''}`}>
              <PaginaConteudoMobileContainer className="pagina-conteudo">
                <PaginaConteudoMobileTitle>HOME</PaginaConteudoMobileTitle>
                <PaginaConteudoMobileWrapper>
                  <PaginaConteudoMobileSubTitle>Projetos</PaginaConteudoMobileSubTitle>
                  <HeaderLinksMobilePage to="/goalstore">Goal Store Shirts</HeaderLinksMobilePage>
                  <HeaderLinksMobilePage to="/moviestreaming">Movie Streaming</HeaderLinksMobilePage>
                  <HeaderLinksMobilePage to="/financialsystem">Financial System</HeaderLinksMobilePage>
                  <HeaderLinksMobilePage to="/allprojects">Ver todos</HeaderLinksMobilePage>
                  <PaginaConteudoMobileSubTitle>Contato</PaginaConteudoMobileSubTitle>
                  <HeaderLinksMobilePage to="https://github.com/Hashtag-igor" target="_blank">Github</HeaderLinksMobilePage>
                  <HeaderLinksMobilePage to="https://www.linkedin.com/in/igor-perdigao-silva" target="_blank">Linkedin</HeaderLinksMobilePage>
                </PaginaConteudoMobileWrapper>
              </PaginaConteudoMobileContainer>
            </PaginaOverlayMobile>
          ) : (
            null
          )}

          {isMobile && isVisible ? 
              <MenuToggleMobile className="menu-toggle" onClick={toggleMenu}>
                <MenuIconMobile className={`menu-icon ${aberto ? 'menu-icon-x' : 'menu-icon-vazio'}`} onClick={fecharMenu}></MenuIconMobile> 
              </MenuToggleMobile> 
          :  
             null
            }    
      </HeaderContainer>
      )}
    </>
  );
  
}
