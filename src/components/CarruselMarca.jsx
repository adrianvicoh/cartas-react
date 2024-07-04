import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarruselMarca({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.url}
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.Description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselMarca;