import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from './pages/inicio/Inicio'
import { Servicio } from './pages/servicio/Servicio'
import {SobreNosotros} from './pages/sobrenosotros/SobreNosotros'
import { Contactanos } from './pages/contactanos/Contactanos'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/servicios' element={<Servicio></Servicio>}></Route>
          <Route path='/sobre-nosotros' element={<SobreNosotros></SobreNosotros>}></Route>
          <Route path='/contactanos' element={<Contactanos></Contactanos>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
