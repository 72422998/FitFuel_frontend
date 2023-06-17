import React,{useState} from 'react'
import './appointment.css'
import axios from 'axios'
const Appointment = () => {

  const [formdata,setFormData]= useState({
    nombre:'',
    apellido:'',
    calendar:'',
    celular:'',
    email:'',
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
            <div className='appointment_input'>
              <div className='appointment_label'>
              <i className="fa-solid fa-user"></i>
              <label htmlFor="name">Nombre:</label>
              </div>
              <input   className="input" onChange={handleChange} id='name' name='nombre' value={formdata.nombre} type="text" />
            </div>

            <div className='appointment_input'>
            <div className='appointment_label'>
            <i className="fa-solid fa-users"></i>
            <label htmlFor="lastname">Apellido: </label>
            </div>
            <input  className="input" type="text" name="apellido" onChange={handleChange} value={formdata.apellido} id="lastname" />
            </div>
            <div className='appointment_input'>
            <div className='appointment_label'>
            <i className="fa-solid fa-mobile"></i>
            <label htmlFor="phone">Celular:</label>
            </div>
            <input   className="input" onChange={handleChange} id="phone" type="text" name='celular' value={formdata.celular} />
            </div>
            <div className='appointment_input'>
              <div className='appointment_label'>
              <i className="fa-solid fa-envelope"></i>
              <label htmlFor="email">Correo:</label>
              </div>
              <input   className="input" onChange={handleChange} id='email' type="text"  name='email' value={formdata.email}/>
            </div>
            <div className='appointment_input'>
            <div className='appointment_label'>
            <i className="fa-solid fa-calendar-day"></i>
            <label htmlFor="fecha">Fecha:</label>
            </div>
            <input   className="input" onChange={handleChange} type="date" name='calendar' value={formdata.calendar} />
            </div>
            <div className='appointment_input'>
            <div className='appointment_label'>
            <i className="fa-sharp fa-solid fa-clock"></i>
            <label htmlFor="hora">Hora de la cita</label>
            </div>
            <input   className="input" onChange={handleChange} type="time" name='hora' value={formdata.hora}/>
            </div>
            <div className='appointment_input input_notas'>
            <div className='appointment_label'>
            <i className="fa-solid fa-file"></i>
            <label htmlFor="notas">Notas</label>
            </div>
            <textarea   className="input" name="notas" id="" cols="30" rows="10" onChange={handleChange} value={formdata.notas}></textarea>
            </div>
      
            <button className='appointment_btn' type='submit'>Reservar</button>
        </form>
    </section>
  )
}

export  {Appointment}