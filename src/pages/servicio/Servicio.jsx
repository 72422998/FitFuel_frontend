import React,{useState,useEffect} from 'react'
import { FetchService } from '../../api/FetchService'
import cliente from "../../assets/cliente1.jpg"
import './servicio.css'
import { Link } from 'react-router-dom'
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
            <img className='Nutricionista_imagen' src={servicio.nutricionista.foto} alt="Nutricionista"></img>
            <h3 className='Nutricionista_nombre' >{servicio.nutricionista.profesion}</h3>
            <p className='Nutricionista_servicos'>{servicio.nombre}</p>
            <button><Link to={`/servicios/detalle/${servicio.id}`} className='Nutricionista_link'>Ver detalle</Link></button>
          </div>
        
      ))}
      
    </div>
    </section>
  );
}

export {Servicio}