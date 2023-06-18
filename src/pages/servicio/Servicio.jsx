import React,{useState,useEffect} from 'react'
import { FetchService } from '../../api/FetchService'
import './servicio.css'
import { Link } from 'react-router-dom'
import {DotLoader} from 'react-spinners'
import robot from '../../assets/robotica.png'
const Servicio = () => {
  const [servicios,setServicios]= useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const obtenerServicios = async()=>{
      try {
        const data = await FetchService();
        setServicios(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
        setIsLoading(false);
      }
    }
    obtenerServicios()
  },[]);
  
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
      {
        isLoading ? (
          <div className='loader-container'>
            <DotLoader color='#1B7E69' loading={isLoading}></DotLoader>
          </div>
        ):servicios.length === 0 ? (
          <div className="NoServicios_container">
            <p className='NoServicios_texto'>No se encontraron servicios</p>
            <img className='NoServicios_imagen' src={robot} alt="" />
          </div>
        ):(
          servicios.map((servicio) => (
          <div key={servicio.id} className='Nutricionista_tarjeta'>
            <Link to={`/servicios/detalle/${servicio.id}`}>
              <img src={servicio.nutricionista.foto} alt="nutricionista" className='Nutricionista_imagen'/>
              <div className='Nutricionista_content'>
                <h3>{servicio.nutricionista.nombre}</h3>
                <p>{servicio.nutricionista.categoria}</p>
              </div>
            </Link>
          </div>
          ))
      )}
    </div>
    </section>
  );
}

export {Servicio}