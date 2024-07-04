import React from "react";
import Logo from '../../assets/red-dead-redemption-2-logo.jpg'
import './footer.css'

function Footer() {


    return (

        <div>
            <footer>
                <img style={{ objectFit: 'contain' }} id="logo" src={Logo} alt="Logo" />
                <span>Todos os direitos reservados © </span>
                <span> Desenvolvido por Ryan Marinho</span>

                <nav class="footer-navigation">
                        <ul class="footer-list">
                                <li>VISÃO GERAL</li>
                                <li>PERSONAGENS</li>
                                <li>JOGAR</li>
                        </ul>

                </nav>
            </footer>
        </div>

    )
}

export default Footer;