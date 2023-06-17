import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='navbar'>
        <span className='logo'>FitFuel</span>
        <ul className={`nav_items ${isOpen && 'open'}`}>
            <li className='element'><Link to='/' className='link'>Inicio</Link></li>
            <li className='element'><Link to='/servicios' className='link'>Servicios</Link></li>
            <li className='element'><Link to='/sobre-nosotros' className='link'>Sobre nosotros</Link></li>
            <li className='element'><Link to='/contactanos' className='link'>Contáctanos</Link></li>
            <li className='element'><Link to='/login' className='link'>Login</Link></li>
            <li className='element'><Link to='/register' className='link'>Register</Link></li>
        </ul>
        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={()=>{setIsOpen(!isOpen)}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
  )
}

export {Navbar}