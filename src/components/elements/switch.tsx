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
    padding: 0 0.4rem;
    font-size: 0.94rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    
    .product-container {
      gap: 1rem;
      display: flex;
      display: flex;

      .product-data-container {
        .product-name {
          font-weight: bold;
        }
        .product-description {
          font-size: 0.88rem;
          margin-bottom: 0.4rem;
          padding: 0.2rem 0.6rem 0 0;
        }
        .product-price {
          font-weight: bold;
        }
      }

      img {
        width: 3rem;
        height: 3rem;
        min-width: 3rem;
        min-height: 3rem;
        border: 1px solid var(--black);
        box-shadow: var(--shadow-normal);
        border-radius: 5px;
        background-color: var(--white);
        padding: 0.2rem;
        object-fit: cover;
      }
    }

    .status-switch {
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
    }
`;

export default function Switch({ itemId, status, product, index }) {
  const [state, setState] = useState({
    statusOn: status === 'AVAILABLE' ? true : false,
  });
  const [switchStyle, setIsSwitchOn] = useSwitch(status === 'AVAILABLE' ? true : false);

  const switchStatus = () => {
    setIsSwitchOn(!state.statusOn);
    updateItems(state.statusOn ? 'UNAVAILABLE' : 'AVAILABLE', itemId);
    setState({ ...state, statusOn: !state.statusOn });
  };

  return (
    <SwitchContainer key={product + index} >
      <div className='product-container' style={!state.statusOn ? { opacity: 0.5 } : {}} >
        <img alt='Product' src={product.imageUrl} />
        <span className='product-data-container' >
          <p className='product-name' >{product.name}</p>
          <p className='product-description'>{product.description}</p>
          <p className='product-price' >${product.price}</p>
        </span>
      </div>

      <div>
        <div onClick={() => switchStatus()} className='status-switch' >
          <animated.span style={{ ...switchStyle }} />
        </div>
      </div>
    </SwitchContainer>
  )
};
