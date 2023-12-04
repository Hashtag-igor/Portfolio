// projectData.js

import goalStore from "../assets/goalStore.png";
import movie from "../assets/movie.png";
import financialSystem from "../assets/financialSystem.png";
import pokedex from "../assets/pokedex.png"

const projectsData = [
    {
      img: goalStore,
      alt: "Projeto Goal Store Shirts",
      name: "Goal Store Shirts",
      description: "Neste projeto fullstack, utilizei React, Node.js e MongoDB. O backend apresenta uma API personalizada para gerenciar camisas de time, consumida pelo frontend. O MongoDB armazena dados de usuários para registro e login. Usuários autenticados possuem acesso total, enquanto visitantes têm funcionalidades limitadas, como adicionar itens ao carrinho ou acessar áreas restritas.",
      link: "/goalstore"
    },
    {
      img: movie,
      alt: "Projeto Movie Streaming",
      name: "Movie Streaming",
      description: "Este projeto desenvolvido em React é um serviço de streaming que proporciona aos usuários acesso a um vasto catálogo de filmes e programas de TV, incluindo os títulos mais bem avaliados, populares, próximos e atualmente em exibição. Com a capacidade de pesquisar títulos de todo o mundo, os usuários podem explorar as avaliações críticas, a sinopse e muitos outros detalhes relevantes para tomar decisões informadas sobre o que assistir.",
      link: "/moviestreaming"
    },
    {
      img: financialSystem,
      alt: "Projeto Financial System",
      name: "Financial System",
      description: "Estou trabalhando no desenvolvimento de um sistema financeiro que permite aos usuários criar contas, fazer login e acessar suas finanças mensais. O projeto inclui autenticação segura, visão abrangente das finanças atuais e arquivamento de meses anteriores. Utilizo Node.js, React, MongoDB e TypeScript para garantir uma implementação segura e eficaz. O objetivo é proporcionar aos usuários uma ferramenta para gerenciar suas finanças pessoais.",
      link: "/financialsystem"
    },
    {
      img: pokedex,
      alt: "Projeto Pokedex",
      name: "Pokedex",
      description: "Desenvolvi uma Pokédex interativa conectada à API de Pokémon, exibindo os 150 primeiros Pokémon em cards com imagem, nome e tipo para uma visão rápida. Ao clicar em um card, o usuário é redirecionado automaticamente para a página de perfil do Pokémon, apresentando informações detalhadas para uma experiência completa de descoberta e exploração pelos fãs de Pokémon.",
      link: "/pokedex"
    },
  ];

export default projectsData;
