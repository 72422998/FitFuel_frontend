import React, { useState } from 'react'
import clienteimg1 from '../../../assets/testimonio1.jpg'
import clienteimg2 from '../../../assets/testimonio2.jpg'
import clienteimg3 from '../../../assets/testimonio3.jpg'
import './testimonios.css'
const Testimonios = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const testimonios = [
    '"Lorem ipsum dolor sit amet consectetur adiopson"',
    '"Testimonio 2"',
    '"Testimonio 3"'
  ]
  const imagenes = [clienteimg1, clienteimg2, clienteimg3]

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className='testimonios'>
      <div className="imagen_container">
      <img src={imagenes[activeIndex]} alt="testimonio" className='testimonios_image' />
      </div>
      <p className='testimonios_text'>{testimonios[activeIndex]}</p>
      <div className='testimonios_esferas'>
        {testimonios.map((_, index) => (
        <span key={index} className={`testimonios_esfera ${
        activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
        </span>
        ))}
      {/* <span className='testimonios_esfera' ></span>
      <span className='testimonios_esfera' ></span>
      <span className='testimonios_esfera' ></span> */}
      </div>
    </section>
  )
}

export {Testimonios}