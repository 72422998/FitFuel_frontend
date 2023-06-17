import React,{useState,useEffect} from 'react'
import './comentarios.css'
import axios from 'axios'

const Comentarios = () => {
    const [comentarios,setComentarios] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/comentarios/listar').then(response=>{
            setComentarios(response.data);
        }).catch(error=>{
            console.log(`
                error al cargar el comentario     
            `,error);
        })
    },[])
  return (
    <div>
            {/* <div className='Nutricionista_tarjetas'>
      {servicios.map((servicio) => (
          <div key={servicio.id} className='Nutricionista_tarjeta'>
            <img className='Nutricionista_imagen' src={servicio.nutricionista.foto} alt="Nutricionista"></img>
            <h3 className='Nutricionista_nombre' >{servicio.nutricionista.profesion}</h3>
            <p className='Nutricionista_servicos'>{servicio.nombre}</p>
            <button><Link to={`/servicios/detalle/${servicio.id}`} className='Nutricionista_link'>Ver detalle</Link></button>
          </div> */}
        {comentarios.map((comentario) => {
                <div key={comentario.servicios.id}>
                    <h1>{comentario.opinion}</h1>
                    <h1>Hola mundo</h1>
                </div>
            })}        
    </div>
  )
}

export {Comentarios}