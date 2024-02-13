import Projects from './Projects'

import movie from "../assets/movie.png"

import desktopImage1 from "../assets/movie/desktop-home.png"
import desktopImage2 from "../assets/movie/desktop-homecard.png"
import desktopImage3 from "../assets/movie/desktop-search.png"
import desktopImage4 from "../assets/movie/desktop-profile.png"
import desktopImage5 from "../assets/movie/desktop-cast.png"
import desktopImage6 from "../assets/movie/desktop-gallery.png"


import tabletImage1 from "../assets/movie/tablet-home.png"
import tabletImage2 from "../assets/movie/tablet-search.png"
import tabletImage3 from "../assets/movie/tablet-profile.png"
import tabletImage4 from "../assets/movie/tablet-cast.png"
import tabletImage5 from "../assets/movie/tablet-gallery.png"


import mobileImage1 from "../assets/movie/mobile-home.png"
import mobileImage2 from "../assets/movie/mobile-search.png"
import mobileImage3 from "../assets/movie/mobile-menu.png"
import mobileImage4 from "../assets/movie/mobile-profile.png"
import mobileImage5 from "../assets/movie/mobile-cast.png"
import mobileImage6 from "../assets/movie/mobile-gallery.png"


export default function MovieStreaming() {
  const MovieStreamingData = {
    title: "Movie Streaming",
    img: movie,
    technologiesUsed: "Tecnologias Utilizadas: React e API (moviedb API: https://www.themoviedb.org/).",
    dependencies: "Dependências Baixadas: React-Router-Dom, Styled-Components, React-Icons, React-Slick, Slick-Carousel e Axios.",
    description: "Este projeto desenvolvido em React é um serviço de streaming que proporciona aos usuários acesso a um vasto catálogo de filmes e programas de TV, incluindo os títulos mais bem avaliados, populares, próximos e atualmente em exibição. Com a capacidade de pesquisar títulos de todo o mundo, os usuários podem explorar as avaliações críticas, a sinopse e muitos outros detalhes relevantes para tomar decisões informadas sobre o que assistir.",
    firstlink: "https://github.com/Hashtag-igor/Movie-Streaming",
    link: "https://movie-streaming-ivory.vercel.app/",
    carouselsData: [
      {
        title: "Desktop Version Images",
        images: [desktopImage1, desktopImage2, desktopImage3, desktopImage3, desktopImage4, desktopImage5, desktopImage6]
      },
      {
        title: "Tablet Version Images",
        images: [tabletImage1, tabletImage2, tabletImage3, tabletImage4, tabletImage5]
      },
      {
        title: "Mobile Version Images",
        images: [mobileImage1, mobileImage2, mobileImage3, mobileImage4, mobileImage5, mobileImage6]
      },
    ]
  }

  return (
    <>
      <Projects {...MovieStreamingData} carouselsData={MovieStreamingData.carouselsData} />
    </>
  )
}
