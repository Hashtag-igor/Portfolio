import Projects from '../components/Projects'

import desktopImage1 from "../assets/movie/desktop-home.png"
import desktopImage2 from "../assets/movie/desktop-search.png"
import desktopImage3 from "../assets/movie/desktop-profile.png"

import tabletImage1 from "../assets/movie/tablet-home.png"
import tabletImage2 from "../assets/movie/tablet-search.png"
import tabletImage3 from "../assets/movie/tablet-profile.png"

import mobileImage1 from "../assets/movie/mobile-home.png"
import mobileImage2 from "../assets/movie/mobile-search.png"
import mobileImage3 from "../assets/movie/mobile-profile.png"


export default function MovieStreaming() {
  const MovieStreamingData = {
    title: "Movie Streaming",
    description: "Este projeto desenvolvido em React é um serviço de streaming que proporciona aos usuários acesso a um vasto catálogo de filmes e programas de TV, incluindo os títulos mais bem avaliados, populares, próximos e atualmente em exibição. Com a capacidade de pesquisar títulos de todo o mundo, os usuários podem explorar as avaliações críticas, a sinopse e muitos outros detalhes relevantes para tomar decisões informadas sobre o que assistir.",
    link: "testando.com",
    carouselsData: [
      {
        title: "Desktop Version",
        images: [desktopImage1, desktopImage2, desktopImage3]
      },
      {
        title: "Tablet Version",
        images: [tabletImage1, tabletImage2, tabletImage3]
      },
      {
        title: "Mobile Version",
        images: [mobileImage1, mobileImage2, mobileImage3]
      },
    ]
  }

  return (
    <div>
      <Projects {...MovieStreamingData} carouselsData={MovieStreamingData.carouselsData} />
    </div>
  )
}
