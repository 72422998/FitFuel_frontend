import React,{useState,useEffect} from 'react'
import { FetchService } from '../../api/FetchService'

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
    <div>Hola</div>
  )
}

export {Servicio}