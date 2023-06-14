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
    <section className='Nutricionista_servicio'>
      <select name="Tipo de servicio" id="tipo_servicio" className='Nutricionista_select'>
        <option value="Tipo_de_servicio">Tipo de servicio</option>
        <option value="Nutricion_deportivo">Nutricion Deportiva</option>
        <option value="Nutricion_infantil">Nutricion Infantil</option>
        <option value="Nutricion_vegetariana">Dieta vegetariana</option>
        <option value="Nutricion_bajar_peso">Bajar de peso</option>
        <option value="Nutricion_subir_peso">Subir de peso</option>
        <option value="Nutricion_enfermedades_cronicas">Enfermedades cronicas</option>
      </select>
    <div className='Nutricionista_tarjetas'>
      {servicios.map((servicio) => (
          <div key={servicio.id} className='Nutricionista_tarjeta'>
            <img className='Nutricionista_imagen' src={cliente} alt="Nutricionista"/>
            <h3 className='Nutricionista_nombre' >{servicio.profesion}</h3>
          </div>
        
      ))}
    </div>
    </section>
  );
}

export {Servicio}