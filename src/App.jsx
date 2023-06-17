import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './pages/inicio/Inicio'
import { Servicio } from './pages/servicio/Servicio'
import {SobreNosotros} from './pages/sobrenosotros/SobreNosotros'
import { Contactanos } from './pages/contactanos/Contactanos'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Login } from './pages/auth/login/Login'
import { Register } from './pages/auth/registro/Register'
import { Servicio_detalle } from './pages/servicio_detalle/Servicio_detalle'
import { Appointment } from './pages/appointment/Appointment'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/servicios' element={<Servicio></Servicio>}></Route>
          <Route path='/servicios/detalle/:id' element={<Servicio_detalle/>}  />
          <Route path='/sobre-nosotros' element={<SobreNosotros></SobreNosotros>}></Route>
          <Route path='/contactanos' element={<Contactanos></Contactanos>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/servicios/detalle/cita' element={<Appointment/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
