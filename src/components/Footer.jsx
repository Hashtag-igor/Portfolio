import React from 'react'

import telefone from "../assets/telefone.png"
import linkedin from "../assets/linkedin.png"

export default function Footer() {
  return (
    <footer id="fale-comigo">
        <h5>Rodolfo Mori</h5>
        <p>Para mais informações</p>

        <div className="social">
          <a href="https://www.linkedin.com/in/rodolfomori/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a href="tel:+5511968290271">
            <img src={telefone} alt="Telefone" />
          </a>
        </div>
      </footer>
  )
}
