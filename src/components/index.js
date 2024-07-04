const textToType = "many";
const typingDiv = document.getElementById("test");
let index = 0;

function typeText() {
  typingDiv.textContent += textToType[index];
  index++;
  if (index < textToType.length) {
    setTimeout(typeText, 200); // Tempo em milissegundos entre cada caractere
  } else {
    // Após a conclusão do texto, reinicie o índice e limpe o conteúdo do elemento
    index = 0;
    typingDiv.textContent = "";
    setTimeout(typeText, 1000); // Tempo em milissegundos antes de reiniciar (1 segundo neste caso)
  }
}

import React from 'react';
import './styles.css';

function Button({ onClick, name, active }) {
  return (
    <div className='containerButton'>
      <button onClick={onClick} className={active ? 'button' : 'disableButton'}>{name}</button>
      <span>Seus dados serão hackeados agora</span>
    </div>
  );
}

export default Button;

typeText();
