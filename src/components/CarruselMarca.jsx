import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 190px; /* Ajusta la altura máxima de la imagen */
`;

const ProductCard = styled.div`
  padding: 50px
  text-align: center;
  max-width: 130px; /* Ajusta el ancho máximo del contenedor */
  margin: auto; /* Centra el contenedor */
  box-sizing: border-box;
`;

const ProductTitle = styled.h3`
  font-size: 14px; /* Ajusta el tamaño del texto del título */
`;

const ProductDescription = styled.p`
  font-size: 12px; /* Ajusta el tamaño del texto del precio */
`;

const CarruselMarca = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <Carousel 
      responsive={responsive} 
      infinite={true} 
      autoPlay={true} 
      autoPlaySpeed={9000}
      swipeable={true}
      draggable={true}
      slidesToSlide={5} 
    >
      {images.map((image, index) => (
        <ProductCard key={index}>
          <ProductImage
            src={image.Imagen}
            alt={`Product ${index}`}
          />
          <ProductTitle>{image.Nombre}</ProductTitle>
          <ProductDescription>{image.precio}</ProductDescription>
        </ProductCard>
      ))}
    </Carousel>
  );
}

export default CarruselMarca;