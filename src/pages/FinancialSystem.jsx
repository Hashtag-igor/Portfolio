import Projects from '../components/Projects'

export default function FinancialSystem() {

  const FinancialSystemData = {
    title: "Financial System",
    technologiesUsed: "Tecnologias Utilizadas: React, Node.js e Mongodb",
    description: "Projeto atualmente em desenvolvimento..",
    firstlink: "https://github.com/Hashtag-igor/Financial-System",
    link: "Em breve estará disponivel o link do projeto com hospedagem Amazon Web Services (AWS)..",
    carouselsImages: [
      {images: ['teste']},
      {images: ['teste']},
      {images: ['teste']},
    ] ,
  }

  return (
    <>
      <Projects {...FinancialSystemData} carouselsData={FinancialSystemData.carouselsImages} />
    </>
  )
}

// import Projects from '../components/Projects'

// export default function FinancialSystem() {

//   const FinancialSystemData = {
//     title: "Financial System",
//     technologiesUsed: "React, Node.js e Mongodb",
//     description: "Projeto atualmente em desenvolvimento..",
//     firstlink: "https://github.com/Hashtag-igor/Financial-System",
//     link: "Em breve estará disponivel o link do projeto com hospedagem Amazon Web Services (AWS)..",
//     carouselsData: [
//       {
//         title: "Desktop Version Images",
//       },
//       {
//         title: "Tablet Version Images",
//       },
//       {
//         title: "Mobile Version Images",
//       },
//     ]
//   }

//   return (
//     <div>
//       <Projects {...FinancialSystemData} carouselsData={FinancialSystemData.carouselsImages} />
//     </div>
//   )
// }
