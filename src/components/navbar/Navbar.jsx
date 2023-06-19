import React, {useState} from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false);
  }
  return (
    <nav className='navbar'>
        <div className=''>
        <span className='logo'>FitFuel</span>
        </div>
        <ul className={`nav_items ${isOpen && 'open'}`}>
            <li className='element' onClick={closeMenu}><NavLink to='/' className="link" activeclassname='active'>Inicio</NavLink></li>
            <li className='element' onClick={closeMenu}><NavLink to='/servicios' className="link" activeclassname='active' >Servicios</NavLink></li>
            <li className='element' onClick={closeMenu}><NavLink to='/sobre-nosotros' className="link" aactiveclassname='active'>Nosotros</NavLink></li>
            <li className='element' onClick={closeMenu}><NavLink to='/contactanos' className="link" activeclassname='active'>Contáctanos</NavLink></li>
            <ul className='auth'>
            <li className='element' onClick={closeMenu}><NavLink to='/login' className="link" activeclassname='active'>Login</NavLink></li>
            <li className='element' onClick={closeMenu}><NavLink to='/register' className="link" activeclassname='active'>Register</NavLink></li>
            </ul>
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