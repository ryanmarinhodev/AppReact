import React from "react";
import Video from '../../assets/video.mp4'
import './detalhes.css'



function Detalhes() {

   
    return (
        <>
          <div id="banner"></div>
            <div id="trailer-container">
                <div class="content">
                    <video controls class="trailer">
                        <source src={Video} type="mp4" />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id="sinopse">
                        <p class="description">
                            Conheça a EMOCIONANTE história de “Red Dead Redemption 2.” Os jogadores assumem o papel de Arthur Morgan, um fora-da-lei no Velho Oeste americano. 
                            A crônica segue a gangue de bandidos liderada por Dutch van der Linde enquanto eles fazem um último esforço para sobreviver 
                            em um mundo que está mudando rapidamente.
                        </p>
                        <button class="button">Comprar Jogo</button>
                    </div>
                </div>
            </div>

        </>


    )
    
}

export default Detalhes