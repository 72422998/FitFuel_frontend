import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_page'>
            <li className='element'><Link to='/' className='link'>Inicio</Link></li>
            <li className='element'><Link to='/servicios' className='link'>Servicios</Link></li>
            <li className='element'><Link to='/sobre-nosotros' className='link'>Sobre nosotros</Link></li>
            <li className='element'><Link to='/contactanos' className='link'>Contáctanos</Link></li></div>
        <div className='footer_social'></div>
    </footer>
  )
}

export {Footer}