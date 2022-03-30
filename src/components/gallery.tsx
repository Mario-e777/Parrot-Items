/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

/* Modules */
import styled from 'styled-components';
import { document } from 'browser-monads';

/* Styled components */
const GalleryContainer = styled.div`
  box-shadow: var(--shadow-normal);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-radius: 0 0 0 9rem;
  overflow: hidden;
  flex-direction: column;
  color: var(--black);
  padding: 0 4rem;
  padding-bottom: 4rem;

  & .images-container {
    position: relative;
    width: 100%;
    max-width: 32rem;
    height: calc(100vw / 2.33);
    max-height: 30rem;
    margin-bottom: 1rem;

    .image-text {
      position: absolute;
      opacity: 0;
      transition-duration: 333ms;
      
      p {
        max-width: 100%;
        font-size: 1.15rem;
        font-weight: 400;
        text-align: center;
        margin: 0 calc(100% / 7) 1rem calc(100% / 7);
      }
    }
    .active {
      opacity: 1;
    }
  }

  & .bullets-container {
    display: flex;
    gap: 2rem;
    font-size: 3.2rem;
    color: var(--orange);
    cursor: default;
    margin-top: 1rem;
    
    span {
      display: block;
      opacity: 0.5;
      width: 0.4rem;
      height: 0.4rem;
      background-color: var(--orange);
      border-radius: 100%;
    }
    .active {
      opacity: 1;
      box-shadow: var(--shadow-normal);
    }
  }

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

/* Constants */
const imageProps = {
  quality: 100,
  alt: 'Parrot benefit'
};
export default function Gallery() {
  const [state, setState] = useState({
    selectedImage: 0,
    images: [
      <div key='image-0' id='benefit-image-0' className='image-text' >
        <StaticImage {...imageProps}
          src={'https://pos.parrotsoftware.io/wp-content/uploads/2022/03/Home-Beneficio01.png'}
        />
        <p>Maneja todas tus marcas y canales en un solo dispositivo.</p>
      </div>,
      <div key='image-1' id='benefit-image-1' className='image-text' >
        <StaticImage {...imageProps}
          src={'https://pos.parrotsoftware.io/wp-content/uploads/2022/03/Home-Beneficio02.png'}
        />
        <p>Administra tu restaurante desde donde estés.</p>
      </div>,
      <div key='image-2' id='benefit-image-2' className='image-text' >
        <StaticImage {...imageProps}
          src={'https://pos.parrotsoftware.io/wp-content/uploads/2022/03/Home-Beneficio03.png'}
        />
        <p>Agiliza tu servicio al cliente automatizando actividades rutinarias.</p>
      </div>,
      <div key='image-3' id='benefit-image-3' className='image-text' >
        <StaticImage {...imageProps}
          src={'https://pos.parrotsoftware.io/wp-content/uploads/2022/03/Home-Beneficio04.png'}
        />
        <p>Obtenen mayor visibilidad y entendimiento de tu negocio en tiempo real.</p>
      </div>,
      <div key='image-4' id='benefit-image-4' className='image-text' style={{ maxWidth: '30rem' }} >
        <StaticImage {...imageProps}
          src={'https://pos.parrotsoftware.io/wp-content/uploads/2021/06/WebsiteArtboard-32.png'}
        />
        <p>Empoderamos a los restaurantes a ser su mejor versión.</p>
      </div>,
    ],
  });

  /* Gallery effect */
  useEffect(() => {
    setTimeout(() => {
      document.getElementById(`benefit-image-${state.selectedImage}`)?.classList.remove('active');
      document.getElementById(`bullet-${state.selectedImage}`)?.classList.remove('active');

      setState({
        ...state,
        selectedImage: state.selectedImage !== state.images.length - 1
          ? state.selectedImage + 1
          : 0,
      });
    }, 6000);

    document.getElementById(`benefit-image-${state.selectedImage}`)?.classList.add('active');
    document.getElementById(`bullet-${state.selectedImage}`)?.classList.add('active');
  }, [state.selectedImage]);

  return (
    <GalleryContainer>
      <div className='images-container'>
        {state.images}
      </div>
      <div className='bullets-container' >
        {state.images.map((img, index) => <span id={`bullet-${index}`} />)}
      </div>
    </GalleryContainer>
  )
};
