import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CarouselLeftButton, CarouselRightButton, CarouselWrapper, CarouselContainer, CarouselIMG } from "../styles/CarouselStyles"

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Função para avançar automaticamente para a próxima imagem a cada 10 segundos
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    }, 10000); // 10 segundos

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [currentImageIndex, images.length]);


  return (
    <CarouselContainer>
      <CarouselWrapper>
        <CarouselIMG src={images[currentImageIndex]} alt="Imagem do carrossel" />
        <CarouselLeftButton onClick={prevImage} direction="prev">Anterior</CarouselLeftButton>
        <CarouselRightButton onClick={nextImage} direction="next">Próxima</CarouselRightButton>
      </CarouselWrapper>
    </CarouselContainer>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired, // Validação de tipo para a propriedade 'images'
};

export default Carousel;
