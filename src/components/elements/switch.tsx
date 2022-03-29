/* React & Gatsby stuff */
import React, { useState } from 'react';

/* Modules */
import { animated } from 'react-spring';
import styled from 'styled-components';

/* Animation hooks */
import useSwitch from '../../animations/useSwitch';

/* Endpoints & utils */
import { updateItems } from '../../endpoints/products';

/* Styled components */
const SwitchContainer = styled.div`
  width: 1.8rem;
  height: 0.8rem;
  border-radius: 100px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--deep-gray);
  cursor: pointer;
  
  span {
    background-color: var(--orange);
    border-radius: 100%;
    display: block;
    height: 1rem;
    width: 1rem;
    position: absolute;
    box-shadow: var(--shadow-hover);
  }
`;

export default function Switch({ itemId, status, parentCallback, product, index }) {
  const [state, setState] = useState({
    statusOn: status === 'AVAILABLE' ? true : false,
  });
  const [switchStyle, setIsSwitchOn] = useSwitch(status === 'AVAILABLE' ? true : false);

  const switchStatus = () => {
    setIsSwitchOn(!state.statusOn);
    updateItems(state.statusOn ? 'UNAVAILABLE' : 'AVAILABLE', itemId);
    setState({ ...state, statusOn: !state.statusOn });
    parentCallback();
  };

  return (
    <li key={product + index} >
      <div style={state.statusOn ? { opacity: 0.5 } : {}} >
        <img src={product.imageUrl} />
        <span>
          <p className='product-name' >{product.name}</p>
          <p className='product-description'>{product.description}</p>
          <p className='product-price' >${product.price}</p>
        </span>
      </div>

      <div>
        <SwitchContainer onClick={() => switchStatus()} className='status-switch' >
          <animated.span style={{ ...switchStyle }} />
        </SwitchContainer>
      </div>
    </li>
  )
};
