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
          <a href=""  className='footer_social_icon'><i className="fa-brands fa-facebook"></i></a>
          <a href="" className='footer_social_icon'><i className="fa-brands fa-twitter"></i></a>
          <a href="" className='footer_social_icon'><i className="fa-brands fa-instagram"></i></a>
        </div>
    </footer>
  )
}

export {Footer}