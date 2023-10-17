import Projects from '../components/Projects'
import Carousel from "../components/Carousel"

export default function FinancialSystem() {

  const FinancialSystemData = {
    title: "Financial System",
    description: "bla bla bla",
    link: "bhenois244.com",
    carouselsImages: [
      {images: ['https://www.soccerbible.com/media/144608/aik-7-min.jpg', 'https://www.soccerbible.com/media/148758/fiorentina-1-min.jpg', 'https://www.soccerbible.com/media/149130/napoli-1-min.jpg', 'https://www.soccerbible.com/media/149111/chelsea-1-min.jpg']},
      {images: ['https://www.soccerbible.com/media/148758/fiorentina-1-min.jpg', 'https://www.soccerbible.com/media/149130/napoli-1-min.jpg', 'https://www.soccerbible.com/media/149111/chelsea-1-min.jpg']},
      {images: ['https://www.soccerbible.com/media/149130/napoli-1-min.jpg', 'https://www.soccerbible.com/media/149111/chelsea-1-min.jpg']},
    ] ,
  }

  return (
    <div>
      <Projects {...FinancialSystemData} carouselsData={FinancialSystemData.carouselsImages} />
      <Carousel images={FinancialSystemData.carouselsImages}/>
    </div>
  )
}
