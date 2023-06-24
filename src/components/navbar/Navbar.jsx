import React, {useState} from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import "./navbar.css"
import logoIcon from '../../assets/logo.png'

const Navbar = ({isDarkMode, toggleDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const closeMenu = () => {
    setIsOpen(false);
  }
  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className='logo_container'>
        <img className='logo_icon' src={logoIcon} alt="" />
        <Link to='/' className='logo_text'><span>Fit</span>fuel</Link>
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
            <button onClick={toggleDarkMode} className='btn_mode'>
              <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
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