/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';
import uniqid from 'uniqid';

/* Animation hooks */
import useExpand from '../../animations/useExpand';
import useRotate from '../../animations/useRotate';

/* Assets */
import expandArrow from '../../assets/images/expandArrow.png';

const ItemExpand = animated(styled.div`
  background-color: var(--white);
  border-bottom: 1px solid var(--gray);
  overflow: hidden;
  
  .title-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--black);
    padding: 1rem 1.2rem;
    cursor: pointer;
    font-weight: bold;
    
    p {
      font-size: 1.06rem;
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
    padding: 1.4rem 1.28rem;
  }
  li {
    display: flex;
    align-items: center;
    padding-left: 0.4rem;
    font-size: 1rem;
    gap: 1rem;

    .gatsby-image-wrapper {
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--black);
      box-shadow: var(--shadow-normal);
      border-radius: 5px;
      background-color: var(--white);
      img {
        padding: 0.2rem;
      }
    }
  }
`);

/* Constants  */
const imageProps = {
  quality: 100,
  alt: 'Parrot benefit'
};
export default function itemExpand() {
  const [state, setState] = useState({
    isExpanded: false,
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
        <p>Drinks</p>
        <div className='expand-button' >
          <span>(2)</span>
          <animated.img style={{ ...rotateStyle }} className='open' src={expandArrow} />
        </div>
      </div>
      <ul
        id={state.expandID}
        className='open'
      >
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Beer</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
        <li>
          <StaticImage 
            {...imageProps}
            src='https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg'
          />
          <p>Soda</p>
        </li>
      </ul>
    </ItemExpand>
  )
}
