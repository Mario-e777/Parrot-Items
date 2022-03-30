/* React & Gatsby stuff */
import React, { useState } from 'react';

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';

/* Animation hooks */
import useShadow from '../../animations/useShadow';

const FilterButton = animated(styled.div`
  font-size: 0.92rem;
  box-shadow: var(--shadow-normal);
  border: 1px solid var(--black);
  border-radius: 5px;
  display: flex;
  font-weight: bold;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  p {
    width: 100%;
    text-align: center;
  }
  
  .selected-indicator {
    background-color: var(--orange);
    opacity: 0.5;
    border-radius: 2px 0 0 2px;
    display: block;
    height: 4rem;
    width: 1.2rem;
    
  }
  .active { opacity: 1 }
`);

export default function filterButton({ parentState, option }) {
  const [filterActive, setFilterActive] = useState(false);
  const [shadowStyle, setIsHovered] = useShadow();
  return (
    <FilterButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...shadowStyle }}
      onClick={() => {
        setFilterActive(!filterActive)
        parentState.state.filterBy[parentState.state.filterBy.indexOf(option)]
          ? parentState.setState({ ...parentState.state, filterBy: parentState.state.filterBy.filter(opt => opt !== option) })
          : parentState.setState({ ...parentState.state, filterBy: [...parentState.state.filterBy, option] });
      }}>
      <span className={`selected-indicator ${filterActive && 'active'}`} />
      <p>{option}</p>
    </FilterButton>
  )
}
