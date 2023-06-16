import React,{useState} from 'react'
import './appointment.css'
import axios from 'axios'
const Appointment = () => {

  const [formdata,setFormData]= useState({
    nombre:'',
    apellido:'',
    celular:'',
    correo:'',
    hora:'',
    notas: '',
  })
  const handleChange = (event)=>{
    const {   name,value    } = event.target;
    setFormData((prevData)=>({
      ...prevData, [name]: value
    }))
    
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:3000/citas/save",formdata).then((response)=>{
      console.log("Cita guardada: ", response.data)
    }).catch((error)=>{
      console.error("Error al guardar la cita: ", error)
    })
  }
  return (
    <section className='appointment_section'>
        <form onSubmit={handleSubmit} className='appointment_form'>
            <i className="fa-solid fa-user"></i>
            <label for="name">Nombre:</label>
            <input  onChange={handleChange} id='name' name='nombre' value={formdata.nombre} type="text" />
            <label for="lastname">Apellido: </label>
            <input type="text" name="apellido" onChange={handleChange} value={formdata.apellido} id="lastname" />
            <i className="fa-solid fa-mobile"></i>
            <label for="phone">Celular:</label>
            <input  onChange={handleChange} id="phone" type="text" name='celular' value={formdata.celular} />
            <i class="fa-solid fa-envelope"></i>
            <label for="email">Correo:</label>
            <input  onChange={handleChange} id='email' type="text"  name='correo' value={formdata.correo}/>
            <i class="fa-solid fa-calendar-day"></i>
            <input  onChange={handleChange} type="date" />
            <input  onChange={handleChange} type="time" name='hora' value={formdata.hora}/>
            <textarea name="notas" id="" cols="30" rows="10" onChange={handleChange} value={formdata.notas}></textarea>
            <button type='submit'>Reservar</button>
        </form>
    </section>
  )
}

export  {Appointment}