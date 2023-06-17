import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './servicio_detalle.css'
import { Link } from 'react-router-dom';
import { Comentarios } from './comentarios/Comentarios';
const Servicio_detalle = () => {
    const {id} = useParams();
    const [servicio,setServicio] = useState(null);
    
    useEffect(()=>{
        axios.get(`
        http://localhost:3000/servicios/${id}
        `).then(response =>{
            setServicio(response.data);
        }).catch(error=>{
            console.log(`
            error al obtener el servicio
            `,error);
        }
    )}, [id])
    
    if(!servicio){
        return <div>
            Error al cargar el servicio
        </div>
    }
    
  return (
  


        <section className='servicio_detalle'>
        
        <div className='detalle_video'>
            <iframe src={`https://www.youtube.com/embed/${servicio.nutricionista.video}`}  allowFullScreen  title='Michaela' className='detalle_youtube'></iframe>
        </div>
        <div className='detalle_contenido'>
            <h2 className='detalle_nombre'>{servicio.nutricionista.profesion}</h2>
            <div className='detalle_wrap'>
            <p className='detalle_profesion'>{servicio.nombre}</p>
            <p className='detalle_precio'>S/{servicio.precio}</p>
            </div>
            <p className='detalle_descripcion'>{servicio.nutricionista.descripcion}</p>
            <div className='detalle_redes'>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-whatsapp detalle_redes_icon"></i>{servicio.nutricionista.whatsapp}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-facebook detalle_redes_icon"></i>{servicio.nutricionista.facebook}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-instagram detalle_redes_icon"></i>{servicio.nutricionista.instagram}</a>
                <a href="" className='detalle_redes_link'><i className="fa-brands fa-linkedin detalle_redes_icon"></i>{servicio.nutricionista.linkedin}</a>
            </div>
            <div className='detalle_btn'>
            <button ><Link to={'/servicios/detalle/cita'} className='detalle_link'>Agendar</Link></button>
            </div>
        </div>
        <Comentarios></Comentarios>
        </section>
        

  )
}

export  {Servicio_detalle}