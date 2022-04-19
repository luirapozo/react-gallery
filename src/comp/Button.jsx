import React from 'react';
import '../stylesheet/Button.css';

function Button({ esBotonDeClick, manejarClick, text }){
  return(
    <button 
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={manejarClick}>
      {text}
    </button>
  );
}

export default Button;