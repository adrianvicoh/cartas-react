import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarruselHeader({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.Imagen} 
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <p>{image.description}</p> 
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselHeader;