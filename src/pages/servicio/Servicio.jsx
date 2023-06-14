import React,{useState,useEffect} from 'react'
import { FetchService } from '../../api/FetchService'
import cliente from "../../assets/cliente1.jpg"
import './servicio.css'

const Servicio = () => {
  const [servicios,setServicios]= useState([])
  useEffect(()=>{
    const obtenerServicios = async()=>{
      const data = await FetchService();
      
      setServicios(data);
    
    }
    obtenerServicios()
  },[])
  
  return (
    <section className='Nutricionista_tarjetas'>
      
      {servicios.map((servicio) => (
        
          <div key={servicio.id} className='Nutricionista_tarjeta'>
            <img className='Nutricionista_imagen' src={cliente} alt="Nutricionista"/>
            <h3 className='Nutricionista_nombre' >{servicio.profesion}</h3>
          </div>
        
      ))}
    </section>
  );
}

export {Servicio}