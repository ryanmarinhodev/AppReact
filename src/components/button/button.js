import React from "react";
import './styles.css'

function Button({onClick}) {

  return (
    <div className="containerButton">
      <button className="button" onClick={() => onClick(0)}>Enviar</button>
    </div>

  )

}



export default Button;