import React, { useState, useEffect, useRef } from 'react';
import './slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playSlide, setPlaySlide] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slideAnimation = setInterval(() => {
      if (playSlide) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 10000);

    return () => clearInterval(slideAnimation);
  }, [playSlide, images]);

  const toggleSlide = () => {
    setPlaySlide((prevPlaySlide) => !prevPlaySlide);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="slider-container">
      {playSlide ? (
        <i className="fas fa-pause-circle fa-icon" onClick={toggleSlide}></i>
      ) : (
        <i className="fas fa-play-circle fa-icon" onClick={toggleSlide}></i>
      )}

      <div className="slider" ref={sliderRef}>
        {images.map((image, index) => (
          <div
            className="slide-image"
            style={{ width: `${100 / images.length}%`, height: '100%' }}
            key={index}
          >
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Slider };
