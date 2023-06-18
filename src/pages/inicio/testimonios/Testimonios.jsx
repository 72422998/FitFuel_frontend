import React from 'react'
import clienteimg from '../../../assets/cliente1.jpg'
import cliente2img from '../../../assets/cliente2.jpg'
import cliente3img from '../../../assets/cliente3.jpg'
import cliente4img from '../../../assets/cliente4.jpg'
import './testimonios.css'
const Testimonios = () => {
  return (
    <section className='testimonios'>
      <div className='slide'>
        <div className='slide-test'>
          <img src={clienteimg} alt="testimonio" className='testimonios_image' />
          <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
          {/* <div className='testimonios_esferas'>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
          </div> */}
        </div>
        <div className='slide-test'>
          <img src={cliente2img} alt="testimonio" className='testimonios_image' />
          <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
          {/* <div className='testimonios_esferas'>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
          </div> */}
        </div>
        <div className='slide-test'>
          <img src={cliente3img} alt="testimonio" className='testimonios_image' />
          <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
          {/* <div className='testimonios_esferas'>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
            <span className='testimonios_esfera' ></span>
          </div> */}
        </div>
        <div className='slide-test'>
            <img src={cliente4img} alt="testimonio" className='testimonios_image' />
            <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
            {/* <div className='testimonios_esferas'>
              <span className='testimonios_esfera' ></span>
              <span className='testimonios_esfera' ></span>
              <span className='testimonios_esfera' ></span>
            </div> */}
        </div>
        <div className='slide-test'>
            <img src={clienteimg} alt="testimonio" className='testimonios_image' />
            <p className='testimonios_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptatum inventore voluptas, amet veniam assumenda illo laudantium magni nostrum repellat unde recusandae id blanditiis in voluptatibus. Ex, tenetur nobis.</p>
            {/* <div className='testimonios_esferas'>
              <span className='testimonios_esfera' ></span>
              <span className='testimonios_esfera' ></span>
              <span className='testimonios_esfera' ></span>
            </div> */}
        </div>
      </div>
    </section>
  )
}

export { Testimonios }