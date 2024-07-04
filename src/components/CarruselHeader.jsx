import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarruselHeader({ noticias }) {
  return (
    <Carousel>
      {noticias.map((noticia, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={noticia.Imagen} 
            alt={`Slide ${index}`}
          />
          <Carousel.Caption>
            <h3>{noticia.Titulo}</h3> 
            <p>{noticia.description}</p> 
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselHeader;