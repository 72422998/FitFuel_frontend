import React from 'react';
import './sobrenosotros.css';

const SobreNosotros = () => {
  return (
    <main>
      <section className='hero'>
        <span></span>
        <h1 className='hero_title'>Conócenos</h1>
        <p className='hero_subtitle'>Contactanos con profesionales altamente capacitados.</p>
      </section>
      <section className='empresa'>
          <p className='empresa_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex pariatur facere delectus eveniet commodi nam voluptatem veniam asperiores ipsa!</p>
      </section>
      <section className='logros'>
        <div className='mision'>
            <h1 className='mision_title'>Mision</h1>
            <p className='mision_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="vision">
          <h1 className='vision_title'>Vision</h1>
          <p className='vision_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </main>
  )
}

export {SobreNosotros}