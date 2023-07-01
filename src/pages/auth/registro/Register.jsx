import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import logo  from '../../../assets/logo.png'

function Register() {
  return (
    <section className='Nutricionist_register'>
      <div className='Register_header'>
      <img className="logo" src={logo} alt="logo" />
      <h1 className='Register_title'><span>Reg</span>ister</h1>
      </div>
      <form action="" className='Register_form'>
        <div className='Register_wrapper user'>
          <i className="fa-regular fa-user Register_icon "></i>
          <input className='Register_input user' type="text" placeholder='Usuario'/>
        </div>

        <div className='Register_wrapper celular'>
          <i className="fa-solid fa-mobile Register_icon "></i>
          <input className='Register_input celular' type="tel" placeholder='Celular'/>
        </div>

        <div className='Register_wrapper email'>
          <i className="fa-regular fa-envelope Register_icon "></i>
          <input className='Register_input email' type="email" placeholder='Correo'/>
        </div>
        
        <div className='Register_wrapper password'>
          <i className="fa-solid fa-lock Register_icon "></i>
          <input className='Register_input password' type="password" placeholder='Contraseña'/>
        </div>
        <div className='Register_wrapper password_repeat'>
          <i className="fa-solid fa-lock Register_icon "></i>
          <input className='Register_input password_repeat' type="password" placeholder='Repita la contraseña'/>
        </div>
        <div className='container_btn'>
        <button className='Register_button'>Registrarse</button>
        </div>
        <div className='container_redirect'>
        <p className='Register_redirect'>¿Tienes una cuenta?<Link to='/login'
         className='Register_link'>Iniciar sesión</Link></p>
         </div>
      </form>
      
    </section>
  )
}

export {Register}