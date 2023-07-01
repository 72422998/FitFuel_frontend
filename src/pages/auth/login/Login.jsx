import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import logo from '../../../assets/logo.png'


function Login() {
  return (
    <section className='login'>
        <div className="login_logo_container">
        <img src={logo} className='login_logo' alt="" />
        <h1 className='login_titulo'>Login</h1>
        </div>
        <form action="" className='login_form'>
            <div className='login_box'>
                <i className="fa-regular fa-envelope login_icon_email"></i>
                <input className='login_input email' type="email" placeholder='Correo'/>
            </div>
            <div className='login_box'>
                <i className="fa-solid fa-lock login_icon_password"></i>
                <input className='login_input' type="password" placeholder='******' />
            </div>
            
            <button className='login_btn'>Iniciar Sesion</button>
            <p className='login_indicador'>O iniciar con:</p>
            <div className='login_redes'>
            <i  className="fa-brands fa-google login_icon_google" ></i>
            <i className="fa-brands fa-facebook login_icon_facebook fa-face"></i>
            </div>

            <div className="login_box_redirect">
            <p className='login_redirect'>¿No tienes una cuenta?<Link to='/register'
         className='login_link'>Register</Link></p>
            </div>
        </form>
        
    </section>
  )
}

export {Login}