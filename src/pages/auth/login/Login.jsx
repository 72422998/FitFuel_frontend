import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login() {
  return (
    <section className='Nutricionista_login'>
        <h1 className='Login_titulo'>Login</h1>
        <form action="" className='Login_form'>
            <div className='Login_wrapper_email'>
                <i className="fa-regular fa-envelope Login_icon email"></i>
                <input className='Login_input email' type="email" placeholder='Correo'/>
            </div>
            <div className='Login_wrapper_password'>
                <i className="fa-solid fa-lock Login_icon password"></i>
                <input className='Login_input password' type="password" placeholder='Contraseña' />
            </div>
            <div className='Login_redes'>
            <i  className="fa-brands fa-google Login_icon" ></i>
            <i className="fa-brands fa-facebook Login_icon fa-face"></i>
            </div>
            <button className='Login_button'>Iniciar Sesion</button>
        </form>
        <p className='Login_redirect'>¿No tienes una cuenta?<Link to='/register'
         className='Login_link'>Register</Link></p>
    </section>
  )
}

export {Login}