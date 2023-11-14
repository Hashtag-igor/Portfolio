import Projects from './Projects'

import financialSystem from "../assets/financialSystem.png"

export default function FinancialSystem() {
  const FinancialSystemData = {
    title: "Financial System",
    img: financialSystem,
    technologiesUsed: "Tecnologias Utilizadas: React, Node.js e Mongodb",
    description: "Projeto atualmente em desenvolvimento..",
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

