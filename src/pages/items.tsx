/* React & Gatsby stuff */
import React, { useState } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

/* Components */
import GlobalLayout from '../components/layouts/global';
import Filters from '../components/filters';
import Products from '../components/products';

/* Modules */
import styled from 'styled-components';

/* Assets */
import Brand from '../assets/svgs/brand.svg';

/* Modules */
import { destroyTokens } from '../utils/funcions';

/* Styled components */
const ProductsContainer = styled.div`
  position: relative;
  overflow: overlay;
  background-color: var(--orange);
  display: grid;
  grid-template-columns: minmax(24rem, 0.8fr) 1fr;
  grid-template-rows: 1fr 0.1fr;
  row-gap: 1.5rem;
  
  & .brand-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
    position: absolute;
    top: 1.4rem;
    left: 1.5rem;

    img {
      max-width: 9.4rem;
      width: 100%;
    }
  }

  & .helpl-links {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;
    color: var(--white);
    grid-column: 1/2;
    grid-row: 2/3;
    
    a {
      color: var(--white);
      cursor: pointer;
      padding: 0 0.5rem;
      text-align: center;
    }
  }

  & .close-sesion {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;
    color: var(--white);
    
    button {
      text-decoration-line: underline;
      width: fit-content;
      color: var(--white);
      background-color: transparent;
      cursor: pointer;
      padding: 0 0.5rem;
      border: none;
      text-align: center;
    }
  }

  @media screen and (max-width: 780px) {
    align-self: center;
    height: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 2rem;
  }
`;

export default function products() {
  const [state, setState] = useState({
    categories: [],
    filterBy: [],
  });

  return (
    <PageTransition>
      <GlobalLayout>
        <ProductsContainer>
          <div className='brand-container' >
            <img src={Brand} />
          </div>
          <Products parentState={{ state, setState }} />
          <Filters options={state.categories} parentState={{ state, setState }} />
          <p className="helpl-links" >
            <a target='_blank' href="https://parrotsoftware.zendesk.com/hc/es" >Ayuda</a> |
            <a target='_blank' href="https://pos.parrotsoftware.io/contacto/" >Contácto</a>
          </p>
          <p className="close-sesion" >
            <button onClick={destroyTokens} >Cerrar sesión</button>
          </p>
        </ProductsContainer>
      </GlobalLayout>
    </PageTransition>
  )
};
