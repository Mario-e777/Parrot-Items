/* React & Gatsby stuff */
import React, { useRef, useEffect } from 'react';

/* Modules */
import styled from 'styled-components';

/* Components */
import Input from '../components/elements/input';
import FilterButton from '../components/elements/filterButton';

/* Styled components */
const GalleryContainer = styled.div`
  box-shadow: var(--shadow-normal);
  display: flex;
  align-items: flex-start;
  justify-content: start;
  background-color: var(--white);
  border-radius: 0 0 0 9rem;
  overflow: hidden;
  flex-direction: column;
  color: var(--black);
  padding: 0 4rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  gap: 1.2rem;

  & .filters-title-input-container {
    width: 100%;
    display: grid;
    gap: 1rem
  }
  & .filters-title-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  & .filters-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  & .filters-title {
    font-size: 2.1rem;
    font-weight: bold;
  }
  & .filters-description {
    font-size: 1.02rem;
  }
`;

export default function Filters({ options, parentState }) {
  return (
    <GalleryContainer>
      <div className='filters-title-input-container' >
        <div className='filters-title-container' >
          <p className='filters-title' >Filtros</p>
          <Input onChange={event =>  parentState.setState({ ...parentState.state, textToSearch: event.target.value })} outline type='text' placeholder='Buscar producto' />
        </div>
        <p className='filters-description' >Puedes filtrar los productos por categoria o buscar por coincidencia.</p>
      </div>
      <div className='filters-container' >
        {options.map(option => <FilterButton parentState={parentState} option={option} />)}
      </div>
    </GalleryContainer>
  )
}
