import Projects from './Projects'

import financialSystem from "../assets/financialSystem.png"

export default function FinancialSystem() {
  const FinancialSystemData = {
    title: "Financial System",
    img: financialSystem,
    technologiesUsed: "Tecnologias Utilizadas: React, Typescript , Node.js e Mongodb",
    description: "Estou trabalhando no desenvolvimento de um sistema financeiro pessoal que permite aos usuários criar contas, fazer login e acessar facilmente suas finanças mensais. O projeto inclui autenticação segura, visão abrangente das finanças atuais, arquivamento automático de meses anteriores e detalhes precisos sobre transações. Utilizo tecnologias avançadas, como Node.js, React, MongoDB e TypeScript para garantir uma implementação segura e eficaz. O objetivo é proporcionar aos usuários uma ferramenta intuitiva para gerenciar suas finanças pessoais. Vale lembrar que o projeto atualmente está em desenvolvimento..",
    firstlink: "https://github.com/Hashtag-igor/Financial-System",
    link: "Em breve estará disponivel o link do projeto com hospedagem Amazon Web Services (AWS)..",
    carouselsImages: [
      {images: ['Em breve..']},
      {images: ['Em breve..']},
      {images: ['Em breve..']},
    ] ,
  }

  return (
    <>
      <Projects {...FinancialSystemData} carouselsData={FinancialSystemData.carouselsImages} />
    </>
  )
}

