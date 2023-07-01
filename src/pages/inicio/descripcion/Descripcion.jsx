import React from 'react'
import imagen from  '../../../assets/descripcion-index.jpg'
import './descripcion.css'
const Descripcion = () => {
  return (

    <section className='descripcion'>
      <div className='warper_descripcion'>
      <h1 className='descripcion_titulo'>Fit Fuel</h1>
      <p className='descripcion_empresa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex ab quaerat excepturi adipisci consectetur nobis magni minima quidem numquam? Quo officiis inventore repellendus aspernatur. Hic quisquam expedita ipsa nam.</p>
        
      <img className='descripcion_imagen' src={imagen}alt="fitfuel" />
      
      </div>
    </section>
  )
}

export {Descripcion}