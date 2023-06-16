import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_page'>
            <li className='footer_list'><Link to='/' className='footer_link'>Inicio</Link></li>
            <li className='footer_list'><Link to='/servicios' className='footer_link'>Servicios</Link></li>
            <li className='footer_list'><Link to='/sobre-nosotros' className='footer_link'>Sobre nosotros</Link></li>
            <li className='footer_list'><Link to='/contactanos' className='footer_link'>Contáctanos</Link></li>
        </div>
        <div className='footer_social'>
          <a href=""  className='footer_social_icon'><i class="fa-brands fa-facebook"></i><span className='fb'></span></a>
          <a href="" className='footer_social_icon'><i class="fa-brands fa-twitter"></i><span className='twtr'></span></a>
          <a href="" className='footer_social_icon'><i class="fa-brands fa-instagram"></i><span className='inst'></span></a>
          {/* <a href="" className='footer_social_icon'><i class="fa-brands fa-whatsapp"></i><span className='inst'></span></a> */}
        </div>
    </footer>
  )
}

export {Footer}