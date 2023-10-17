import Projects from '../components/Projects'

//desktop images
import desktopImage1 from "../assets/goal/desktop-home.png"
import desktopImage2 from "../assets/goal/desktop-footer.png"
import desktopImage3 from "../assets/goal/desktop-form.png"
import desktopImage4 from "../assets/goal/desktop-cart.png"
import desktopImage5 from "../assets/goal/desktop-profile.png"
import desktopImage6 from "../assets/goal/desktop-search.png"

//tablet images
import tabletImage1 from "../assets/goal/tablet-home.png"
import tabletImage2 from "../assets/goal/tablet-footer.png"
import tabletImage3 from "../assets/goal/tablet-form.png"
import tabletImage4 from "../assets/goal/tablet-cart.png"
import tabletImage5 from "../assets/goal/tablet-profile.png"
import tabletImage6 from "../assets/goal/tablet-search.png"

//mobile images
import mobileImage1 from "../assets/goal/mobile-home.png"
import mobileImage2 from "../assets/goal/mobile-footer.png"
import mobileImage3 from "../assets/goal/mobile-form.png"
import mobileImage4 from "../assets/goal/mobile-cart.png"
import mobileImage5 from "../assets/goal/mobile-home-scroll.png"
import mobileImage6 from "../assets/goal/mobile-profile.png"
import mobileImage7 from "../assets/goal/mobile-menu.png"
import mobileImage8 from "../assets/goal/mobile-pages.png"


export default function GoalStore() {
  const GoalStoreData = {
    title: "Goal Store Shirts",
    description: "Neste projeto fullstack, utilizei React, Node.js e MongoDB. O backend apresenta uma API personalizada para gerenciar camisas de time, consumida pelo frontend. O MongoDB armazena dados de usuários para registro e login. Usuários autenticados possuem acesso total, enquanto visitantes têm funcionalidades limitadas, como adicionar itens ao carrinho ou acessar áreas restritas.",
    link: "testando.com",
    carouselsData: [
      {
        title: "Desktop Version",
        images: [desktopImage1, desktopImage2, desktopImage3, desktopImage4, desktopImage5, desktopImage6]
      },
      {
        title: "Tablet Version",
        images: [tabletImage1, tabletImage2, tabletImage3, tabletImage4, tabletImage5, tabletImage6]
      },
      {
        title: "Mobile Version",
        images: [mobileImage1, mobileImage2, mobileImage3, mobileImage4, mobileImage5, mobileImage6, mobileImage7, mobileImage8]
      },
    ]
  }
  
  return (
    <div>
      <Projects {...GoalStoreData} carouselsData={GoalStoreData.carouselsData} />
    </div>
  )
}
