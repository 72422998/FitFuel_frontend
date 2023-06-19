import React from 'react'
import { Slider } from './slider/Slider'
import { Testimonios } from './testimonios/Testimonios'
import { Descripcion } from './descripcion/Descripcion'
import { Offer } from './offer/Offer'

const Inicio = () => {
  return (
    <main>
      <Slider></Slider>
      <Offer></Offer>
      <Descripcion></Descripcion>
      <Testimonios></Testimonios>
    </main>
  )
}

export {Inicio}