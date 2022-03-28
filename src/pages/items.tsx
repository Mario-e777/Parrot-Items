/* React & Gatsby stuff */
import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

/* Components */
import GlobalLayout from '../components/layouts/global';
import Filters from '../components/filters';
import ItemExpand from '../components/itemExpand';

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
  
  & .items-section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    
    & .items-container {
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding: 0rem 0 1rem 0;
      max-width: 26rem;
      overflow-y: hidden;
      border-radius: 5px;
      align-items: center;
    
      .items {
        width: 100%;
        overflow-y: overlay;
        overflow-x: hidden;
        border-radius: 0 0 5px 5px;
        box-shadow: var(--shadow-normal);
        height: fit-content;
        max-height: 27rem;
      }

      h2 {
        position: sticky;
        top: 0;
        border-radius: 5px 5px 0 0;
        width: 100%;
        color: var(--white);
        background-color: var(--black);
        box-shadow: var(--shadow-normal);
        padding: 1.08rem 1.28rem;
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }

  & .privacy-terms-container {
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 0.92rem;
    gap: 0.7rem;
    color: var(--white);
    padding: 1rem 0;
    
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
  return (
    <PageTransition>
      <GlobalLayout>
        <ItemsContainer>
          <div className='brand-container' >
            <img src={Brand} />
          </div>
          <div className='items-section' >
            <div className='items-container' >
              <h2>La Casa De Toño - Items status</h2>
              <div className='items' >
                <ItemExpand />
                <ItemExpand />
                <ItemExpand />
              </div>
            </div>
          </div>
          <Filters />
          <p className="privacy-terms-container" >
            <a target='_blank' href="https://pos.parrotsoftware.io/contacto/" >Contácto</a> |
            <a target='_blank' href="https://parrotsoftware.zendesk.com/hc/es" >Centro de ayuda</a>
          </p>
        </ItemsContainer>
      </GlobalLayout>
    </PageTransition>
  )
};
