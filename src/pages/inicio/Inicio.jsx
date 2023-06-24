import React from 'react'
import { Slider } from './slider/Slider'
import { Testimonios } from './testimonios/Testimonios'
import { Descripcion } from './descripcion/Descripcion'
import { Offer } from './offer/Offer'
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';

const Inicio = () => {

  const images = [
    bg1,
    bg2,
    bg3
  ]

  return (
    <>
      <Slider images={images}></Slider>
      <Offer></Offer>
      <Descripcion></Descripcion>
      <Testimonios></Testimonios>
    </>
  )
}

export {Inicio}