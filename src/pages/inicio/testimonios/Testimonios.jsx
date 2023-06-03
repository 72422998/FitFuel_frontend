import React from 'react'
import clienteimg from '../../../assets/cliente1.jpg'
import './testimonios.css'
const Testimonios = () => {
  return (
    <section className='testimonios'>
      <img src={clienteimg} alt="testimonio" className='testimonios_image' />
      <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
      <div className='testimonios_esferas'>
      <span className='testimonios_esfera' ></span>
      <span className='testimonios_esfera' ></span>
      <span className='testimonios_esfera' ></span>
      </div>
    </section>
  )
}

export {Testimonios}