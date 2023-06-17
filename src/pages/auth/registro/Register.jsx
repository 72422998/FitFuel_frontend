import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

function Register() {
  return (
    <section className='Nutricionist_register'>
      <h1 className='Register_title'>Register</h1>
      <form action="" className='Register_form'>
        <div className='Register_wrapper_user'>
          <i class="fa-regular fa-user Register_icon user"></i>
          <input className='Register_input user' type="text" placeholder='Usuario'/>
        </div>
        <div className='Register_wrapper_email'>
          <i className="fa-regular fa-envelope Register_icon email"></i>
          <input className='Register_input email' type="email" placeholder='Correo'/>
        </div>
        <div className='Register_wrapper_celular'>
          <i class="fa-solid fa-mobile Register_icon celular"></i>
          <input className='Register_input celular' type="tel" placeholder='Celular'/>
        </div>
        <div className='Register_wrapper_password'>
          <i className="fa-solid fa-lock Register_icon password"></i>
          <input className='Register_input password' type="password" placeholder='Contraseña'/>
        </div>
        <div className='Register_wrapper_password_repeat'>
          <i className="fa-solid fa-lock Register_icon password"></i>
          <input className='Register_input password_repeat' type="password" placeholder='Repita la contraseña'/>
        </div>
        <button className='Register_button'>Registrarse</button>
      </form>
      <p className='Register_redirect'>¿Tienes una cuenta?<Link to='/login'
         className='Register_link'>Iniciar sesión</Link></p>
    </section>
  )
}

export {Register}