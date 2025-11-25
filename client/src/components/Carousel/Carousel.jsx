import React, { useState } from 'react';
import { CarouselWrapper, CarouselContainer, CarouselSlide, CarouselImage, CarouselButton, CarouselDots, Dot } from './Carousel.styles';

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        {images.map((image, index) => (
          <CarouselSlide key={index} $isActive={index === currentIndex}>
            <CarouselImage src={image.src} alt={image.alt} />
          </CarouselSlide>
        ))}
      </CarouselContainer>

      <CarouselButton direction="left" onClick={goToPrevious}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </CarouselButton>

      <CarouselButton direction="right" onClick={goToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </CarouselButton>

      <CarouselDots>
        {images.map((_, index) => (
          <Dot 
            key={index} 
            $isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselDots>
    </CarouselWrapper>
  );
}
