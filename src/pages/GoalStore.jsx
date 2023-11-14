import Projects from './Projects'

import goalStore from "../assets/goalStore.png"

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
    img: goalStore,
    technologiesUsed: "Tecnologias Utilizadas: React, Node.js e MongoDB.",
    dependencies: "Dependências Baixadas: React-Router-Dom, Styled-Components e React-Icons. Por mais que não seja uma dependência em si, vale citar aqui que o uso do useContext foi uma das partes mais decisivas e importantes do projeto.",
    description: "Neste projeto pessoal, utilizei uma combinação de tecnologias de ponta, incluindo React para o frontend, Node.js para o backend e MongoDB como banco de dados. No backend, desenvolvi minha própria API dedicada a camisetas de times de futebol e integrei-a de forma eficaz ao frontend. Isso me permitiu criar diversas páginas na aplicação de acordo com os requisitos específicos de cada uma delas. Um aspecto chave deste projeto foi a integração com o MongoDB, que me permitiu estabelecer um sólido esquema para armazenar informações de usuários no banco de dados. Isso possibilitou a criação de um formulário de registro e login para os usuários da aplicação. Uma vez que um usuário faz o login em sua conta, ele ganha acesso completo a todas as funcionalidades da aplicação sem a necessidade de se desconectar. Para os visitantes que optam por não criar uma conta, eles ainda podem explorar o projeto, mas a funcionalidade de adicionar produtos ao carrinho fica restrita. Adicionalmente, os usuários não logados são impedidos de acessar áreas restritas destinadas a usuários autenticados.",
    firstlink: "https://github.com/Hashtag-igor/Goal-Store-Frontend",
    secondlink: "https://github.com/Hashtag-igor/Goal-Store-Backend",
    link: "https://goalstore.vercel.app/",
    carouselsData: [
      {
        title: "Desktop Version Images",
        images: [desktopImage1, desktopImage2, desktopImage3, desktopImage4, desktopImage5, desktopImage6]
      },
      {
        title: "Tablet Version Images",
        images: [tabletImage1, tabletImage2, tabletImage3, tabletImage4, tabletImage5, tabletImage6]
      },
      {
        title: "Mobile Version Images",
        images: [mobileImage1, mobileImage2, mobileImage3, mobileImage4, mobileImage5, mobileImage6, mobileImage7, mobileImage8]
      },
    ]
  }
  
  return (
    <>
      <Projects {...GoalStoreData} carouselsData={GoalStoreData.carouselsData} />
    </>
  )
}
