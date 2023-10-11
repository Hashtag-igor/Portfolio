import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    }
    
    a{
        text-decoration: none;
        color: #fff;
    }

    //Para corrigir o problema da página do menu sanduiche aberto
    @media screen and (max-width: 768px){
        .pagina-overlay-aberto .pagina-conteudo {
        transform: translateY(0);
        }
    }
`

export default GlobalStyle;