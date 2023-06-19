import React, {useState, useEffect} from 'react'
import './offer.css'

function Offer() {
    const [remainingTime, setRemainingTime] = useState(null);
    useEffect(()=>{
        const endTime = new Date('2023-06-30T23:59:59')
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDiff = endTime - currentTime;
            if (timeDiff <= 0) {
                clearInterval(interval);
                setRemainingTime(null);
            }else{
                const days = Math.floor(timeDiff / (1000 * 80 * 60 * 24))
                const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDiff / 1000) % 60)
                setRemainingTime({days, hours, minutes, seconds})
            }
        }, 1000)
        return () => clearInterval(interval)
    }, []);

  return (
    <section className='oferta-section'>
        <div className='oferta-container'>
            <div className="oferta-description">
                <h2 className='titulo'>!Oferta Especial!</h2>
                <p className='subtitulo'>Aprovecha nuestra increible oferta por tiempo limitado</p>
            </div>
            <div className="oferta-timer">
                {
                    remainingTime && (
                        <div className="timer-box">
              <div className="time-box">
                <div className="time">{remainingTime.days}</div>
                <div className="time-label">Días</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time">{remainingTime.hours}</div>
                <div className="time-label">Horas</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time">{remainingTime.minutes}</div>
                <div className="time-label">Minutos</div>
              </div>
              <div className="time-separator">:</div>
              <div className="time-box">
                <div className="time">{remainingTime.seconds}</div>
                <div className="time-label">Segundos</div>
              </div>
            </div>
                    )
                }
                {!remainingTime && <p>La oferta ha expirado</p>}
            </div>
        </div>
    </section>
  )
}

export {Offer}
