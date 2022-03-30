/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';

/* Animation hooks */
import useFiller from '../../animations/useFiller';

/* Styled components */
const CheckboxCotainer = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin-right: auto;
  position: relative;
  
  input { 
    width: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  p {
    font-size: 0.94rem;
  }
  .custom-checkbox {
    height: 1.1rem;
    width: 1.1rem;
    border: 1px solid var(--white);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent ;
    padding: 0;

    span {
      border-radius: 2px;
      display: block;
      background-color: var(--blue-light);
    }
  }
`;

export default function Checkbox({ text, parentState }) {
  const [state, setState] = useState(false);
  const [fillerStyle, setIsChecked] = useFiller();

  useEffect(() => { 
    parentState.setState({ ...parentState.state, rememberUser: state });
    setIsChecked(state);
  }, [state]);

  return (
    <CheckboxCotainer >
      <input tabIndex={-1} type='checkbox' onChange={() => setState(!state)} />
      <button aria-label='Remember me' type='button' onClick={() => setState(!state)} className='custom-checkbox' >
        <animated.span style={{ ...fillerStyle }} className='custom-checkbox-filler' />
      </button>
      <p>{text}</p>
    </CheckboxCotainer>
  )
};
