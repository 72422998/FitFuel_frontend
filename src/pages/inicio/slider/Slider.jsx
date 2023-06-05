import React, {useState} from 'react'
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa'
import image1 from '../../../assets/1.jpg'
import image2 from '../../../assets/2.jpg'
import image3 from '../../../assets/3.jpg'
import image4 from '../../../assets/4.jpg'
import './slider.css'
const Slider = () => {
  const [playSlide, setPlaySlide] = useState(true);
  return (
    <section className='slider-container'>
      {playSlide
      ?
      <FaPauseCircle className='fa-icon' onClick={()=>setPlaySlide(!playSlide)}/>
      :
      <FaPlayCircle className='fa-icon' onClick={()=>setPlaySlide(!playSlide)}/>
      }
      
      <div className={playSlide ? 'slider play-animation' : 'slider pause-animation'}>
        <div className='slide-image'>
          <img src={image1} alt="image" />
        </div>
        <div className='slide-image'>
          <img src={image2} alt="image" />
        </div>
        <div className='slide-image'>
          <img src={image3} alt="image" />
        </div>
        <div className='slide-image'>
          <img src={image4} alt="image" />
        </div>
        <div className='slide-image'>
          <img src={image1} alt="image" />
        </div>
      </div>
    </section>
  )
}

export {Slider}