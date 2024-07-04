import React from 'react';
import './styles.css';
import Logo from '../assets/red-dead-redemption-2-logo.jpg'


function Header() {


  return (
    <>
    <header>
      <img id="logo" src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li><a href="./visaog.html">VISÃO GERAL</a></li>
          <li><a href="./personagem.html">PERSONAGENS</a></li>
          <li><a href="./jogar.html">COMPRAR AGORA</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;