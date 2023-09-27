import React from 'react'

export default function Header() {
  return (
    <header>
        <nav>
          <h2 className="portfolio">Portfó<span>lio</span></h2>
          <ul>
            <li><a className="link-menu" href="#home">Home</a></li>
            <li><a className="link-menu" href="#sobre">Sobre</a></li>
            <li><a className="link-menu" href="#projetos-id">Projetos</a></li>
            <li><a className="link-menu" href="#fale-comigo">Fale comigo</a></li>
          </ul>
        </nav>

        <div className="meu-nome">
          <h1>Igor <span>Perdigão</span></h1>
          <h3>Programador FullStack JR</h3>
        </div>
    </header>
  )
}
