import React from 'react'
import { Slider } from './slider/Slider'
import { Testimonios } from './testimonios/Testimonios'
import { Descripcion } from './descripcion/Descripcion'

const Inicio = () => {
  return (
    <div>
      <Slider></Slider>
      <Descripcion></Descripcion>
      <Testimonios></Testimonios>
    </div>
  )
}

export {Inicio}