/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';
import uniqid from 'uniqid';

/* Components */
import Switch from '../elements/switch';

/* Animation hooks */
import useExpand from '../../animations/useExpand';
import useRotate from '../../animations/useRotate';

/* Assets */
import expandArrow from '../../assets/images/expandArrow.png';

const ProductExpand = animated(styled.div`
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);
  overflow: hidden;
  
  .title-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--black);
    padding: 1.1rem 1.2rem;
    cursor: pointer;
    font-weight: bold;
    
    p {
      font-size: 1.0rem;
      transition-duration: 333ms;
    }
  }

  .expand-button {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    img { 
      width: 1rem;
      height: 1rem;
    }
  }

  ul {
    background-color: var(--gray);
    display: grid;
    gap: 1rem;
    padding: 1.5rem 1.28rem;
  }

  li {
    padding: 0 0.4rem;
    font-size: 0.94rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    
    div {
      gap: 1rem;
      display: flex;
      display: flex;

      span {
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
    }

    img {
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--black);
      box-shadow: var(--shadow-normal);
      border-radius: 5px;
      background-color: var(--white);
      padding: 0.2rem;
    }
  }
`);

export default function itemExpand(props: {
  name: string,
  categoryData: Array<any>,
}) {
  /* Hooks stuff */
  const [fillerStyle, setIsExpanded] = useExpand();
  const [rotateStyle, setIsRotated] = useRotate();
  const [state, setState] = useState({
    isExpanded: false,
    statusIsOn: false,
    elementID: uniqid(),
    expandID: uniqid(),
  });

  /* Functions */
  const expandProduct = () => {
    setState({ ...state, isExpanded: !state.isExpanded });
  };

  /* Effects */
  useEffect(() => {
    const EXPAND_HEIGHT = document.getElementById(state.expandID)?.getBoundingClientRect().height;
    const ELEMENT_HEIGHT = document.getElementById(state.elementID)?.getBoundingClientRect().height;
    const BASE_FONT_SIZE = parseInt(window.getComputedStyle(document.getElementsByTagName('html')[0], null).getPropertyValue('font-size').replace('px', ''))

    setIsRotated(!state.isExpanded);
    setIsExpanded({
      listHeihg: `${(EXPAND_HEIGHT + ELEMENT_HEIGHT) / BASE_FONT_SIZE}rem`,
      height: `${ELEMENT_HEIGHT / BASE_FONT_SIZE}rem`,
      isOpen: state.isExpanded
    });
  }, [state.isExpanded, props]);

  return (
    <ProductExpand style={{ ...fillerStyle }} >
      <div id={state.elementID} onClick={expandProduct} className='title-button' >
        <p>{props.name}</p>
        <div className='expand-button' >
          <span>({props.categoryData.length})</span>
          <animated.img style={{ ...rotateStyle }} className='open' src={expandArrow} />
        </div>
      </div>
      <ul
        id={state.expandID}
      >
        {props.categoryData.map((product, index) => {
          return (
            <Switch
              index={index}
              product={product}
              status={product.availability}
              itemId={product.uuid}
            />
          )
        })}
      </ul>
    </ProductExpand>
  )
};
