import Projects from './Projects'

import pokedex from "../assets/pokedex.png"

import desktopImage1 from "../assets/pokedex/desktop-home.png"
import desktopImage2 from "../assets/pokedex/desktop-search.png"
import desktopImage3 from "../assets/pokedex/desktop-profile.png"

import tabletImage1 from "../assets/pokedex/tablet-home.png"
import tabletImage2 from "../assets/pokedex/tablet-search.png"
import tabletImage3 from "../assets/pokedex/tablet-profile.png"

import mobileImage1 from "../assets/pokedex/mobile-home.png"
import mobileImage2 from "../assets/pokedex/mobile-search.png"
import mobileImage3 from "../assets/pokedex/mobile-profile.png"


export default function Pokedex() {
  const PokedexData = {
    title: "Pokedex",
    img: pokedex,
    technologiesUsed: "Tecnologias Utilizadas: React e API (Pokemon API: https://pokeapi.co/api/v2/pokemon?limit=150&offset=0).",
    dependencies: "Dependências Baixadas: Axios, React-Router-Dom e Material-UI",
    description: "Desenvolvi uma Pokédex interativa, conectada à API de Pokémon, que apresenta os 150 primeiros Pokémon ou também conhecida como 'primeira geração'. Ao consumir os dados da API, crio cards para cada Pokémon, exibindo sua imagem, nome e tipo. Esses cards proporcionam uma visão rápida e organizada dos Pokémon iniciais. Quando o usuário seleciona um card específico, é automaticamente redirecionado para a página de perfil desse Pokémon em particular. Nessa página, são apresentadas informações detalhadas, oferecendo uma experiência completa de descoberta e exploração para os fãs de Pokémon.",
    firstlink: "https://github.com/Hashtag-igor/Pokedex",
    link: "https://pokedex-coral-nine.vercel.app/",
    carouselsData: [
      {
        title: "Desktop Version Images",
        images: [desktopImage1, desktopImage2, desktopImage3]
      },
      {
        title: "Tablet Version Images",
        images: [tabletImage1, tabletImage2, tabletImage3]
      },
      {
        title: "Mobile Version Images",
        images: [mobileImage1, mobileImage2, mobileImage3]
      },
    ]
  }

  return (
    <>
      <Projects {...PokedexData} carouselsData={PokedexData.carouselsData} />
    </>
  )
}
