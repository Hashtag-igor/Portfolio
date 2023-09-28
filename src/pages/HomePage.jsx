import financialSystem from "../assets/financialSystem.png"
import movie from "../assets/movie.png"
import igor from "../assets/igor.jpeg"
import goalStore from "../assets/goalStore.png"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="sobre">
          <img src={igor} alt="Igor Perdigão" />
          <div>
            <h2>Sobre mim</h2>
            <p>Eu sou um Programador Front End, tenho experiência e conhecimento criando aplicações com HTML, CSS, JavaScript, React e Node.</p>
            <button>Entre em contato</button>
          </div>
        </section>

        <section className="projetos" id="projetos-id">
          <h2>Principais Projetos</h2>

          <div className="card-projetos">
            <div className="card">
              <img src={goalStore} alt="Projeto Goal Store Shirts" />
              <h5>Starbucks</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</p>
              <a href="https://starbucks-rodolfo.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>

            <div className="card">
              <img src={financialSystem} alt="Projeto de Controle Financeiro" />
              <h5>Cronometro</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</p>
              <a href="https://cronometro-mpdz.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>

            <div className="card">
              <img src={movie} alt="MovieDB icon" />
              <h5>Movie Streaming</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad error harum doloribus labore,
                odio necessitatibus officia illum rem veritatis possimus aut</p>
              <a href="https://peaceful-starlight-02739b.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
