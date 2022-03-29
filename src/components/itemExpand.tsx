/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';
import uniqid from 'uniqid';

/* Components */
import Switch from '../components/elements/switch';

/* Animation hooks */
import useExpand from '../animations/useExpand';
import useRotate from '../animations/useRotate';

/* Assets */
import expandArrow from '../assets/images/expandArrow.png';

const ItemExpand = animated(styled.div`
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

export default function itemExpand(props) {
  const [state, setState] = useState({
    isExpanded: false,
    statusIsOn: false,
    elementID: uniqid(),
    expandID: uniqid(),
  });
  const [fillerStyle, setIsExpanded] = useExpand();
  const [rotateStyle, setIsRotated] = useRotate();

  const expandItem = () => {
    setState({ ...state, isExpanded: !state.isExpanded });
  };

  useEffect(() => {
    setIsRotated(!state.isExpanded);
    setIsExpanded({ listHeihg: `${document.getElementById(state.expandID)?.getBoundingClientRect().height + document.getElementById(state.elementID)?.getBoundingClientRect().height}px`, height: `${document.getElementById(state.elementID)?.getBoundingClientRect().height}px`, isOpen: state.isExpanded });
  }, [state.isExpanded]);

  return (
    <ItemExpand style={{ ...fillerStyle }} >
      <div id={state.elementID} onClick={expandItem} className='title-button' >
        <p>{props.name}</p>
        <div className='expand-button' >
          <span>({props.categoryData.length})</span>
          <animated.img style={{ ...rotateStyle }} className='open' src={expandArrow} />
        </div>
      </div>
      <ul
        id={state.expandID}
        className='open'
      >
        {props.categoryData.map(product => (
          <li>
            <div style={product.availability === 'UNAVAILABLE' ? { opacity: 0.5 } : {}} >
              <img src={product.imageUrl} />
              <span>
                <p className='product-name' >{product.name}</p>
                <p className='product-description'>{product.description}</p>
                <p className='product-price' >${product.price}</p>
              </span>
            </div>

            <div>
              <Switch parentState={props.parentState} status={product.availability} itemId={product.uuid} />
            </div>
          </li>
        ))}
      </ul>
    </ItemExpand>
  )
}
