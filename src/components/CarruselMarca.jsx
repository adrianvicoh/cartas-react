import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 50px; /* Ajusta la altura máxima de la imagen */
`;

const ProductCard = styled.div`
  padding: 10px;
  text-align: center;
  max-width: 75px; /* Ajusta el ancho máximo del contenedor */
  margin: auto; /* Centra el contenedor */
  box-sizing: border-box;
`;

const ProductTitle = styled.h3`
  font-size: 14px; /* Ajusta el tamaño del texto del título */
`;

const ProductDescription = styled.p`
  font-size: 12px; /* Ajusta el tamaño del texto de la descripción */
`;

const CarruselMarca = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
      autoPlaySpeed={3000}
      swipeable={true}
      draggable={true}
      slidesToSlide={4} // Desliza 4 productos a la vez
    >
      {images.map((image, index) => (
        <ProductCard key={index}>
          <ProductImage
            src={image.mna1v9pmt69h5rd}
            alt={`Product ${index}`}
          />
          <ProductTitle>{image.Titulo}</ProductTitle>
          <ProductDescription>{image.Description}</ProductDescription>
        </ProductCard>
      ))}
    </Carousel>
  );
}

export default CarruselMarca;