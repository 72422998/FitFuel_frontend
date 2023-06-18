import React from 'react'
import "./contactanos.css"

const Contactanos = () => {
  return (

    
<div className='contactanos'>
  
<form className='form_contactanos'>
<label htmlFor="nombre" className="colocar_nombre">Nombre:
<span className="obligatorio">*</span></label>
<input type="nombre" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"></input>

<label htmlFor="email" className="colocar_email">Email:
<span className="obligatorio">*</span></label>
<input type="email" name='introducir_email' id='email' required="obligatorio" placeholder='Escribe tu Email' ></input>

<label htmlFor="asunto" className="colocar_asunto">Asunto:
<span className="obligatorio">*</span></label>
<input type="text" name='introducir_asunto' id='asunto' required="obligatorio" placeholder='Escribe tu Asunto'/>
    
<label className="nota">Dejanos una Nota:</label>
<textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu nota..."></textarea>
<div className='boton_container'>
    <button className="boton" type="submit" name='enviar_formulario' id='enviar'>Enviar</button>
    </div>
    </form>
    </div>
    
    
  )
}

export {Contactanos}