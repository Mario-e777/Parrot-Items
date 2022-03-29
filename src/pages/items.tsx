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

/* Styled components */
const ItemsContainer = styled.div`
  position: relative;
  overflow: overlay;
  
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

  & .privacy-terms-container {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;
    color: var(--white);
    /* padding: 1rem 0; */
    
    a {
      color: var(--white);
      cursor: pointer;
      padding: 0 0.5rem;
      text-align: center;
      &:hover { text-decoration-line: underline; }
    }
  }
`;

export default function Items() {
  const [state, setState] = useState({
    categories: [],
    filterBy: [],
    textToSearch: ''
  });

  return (
    <PageTransition>
      <GlobalLayout>
        <ItemsContainer>
          <div className='brand-container' >
            <img src={Brand} />
          </div>
          <Products parentState={{ state, setState }} />
          <Filters options={state.categories} parentState={{ state, setState }} />
          <p className="privacy-terms-container" >
            <a target='_blank' href="https://parrotsoftware.zendesk.com/hc/es" >Ayuda</a> |
            <a target='_blank' href="https://pos.parrotsoftware.io/contacto/" >Contácto</a> 
          </p>
        </ItemsContainer>
      </GlobalLayout>
    </PageTransition>
  )
};
