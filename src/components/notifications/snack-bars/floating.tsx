/* React stuff */
import React from 'react';

/* Modules */
import styled, { css } from 'styled-components';

interface Status {
  isSuccess: boolean,
  isError: boolean,
  duration: number
};

const FloatingContainer = styled.div<Status>`
  /* Custom props */
  --right-inactive: -19rem;
  --top-n-right-active: 0.94rem;

  width: fit-content;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  right: var(--right-inactive);
  top: var(--top-n-right-active);
  ${props => props.duration && css`animation-duration: ${props.duration}ms;`}
  animation-name: fromTop;
  z-index: +9999;

  & div {
    flex-direction: column;
    width: 18rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
    box-shadow: var(--shadow-normal);
    background-color: var(--black);
    position: relative;
    overflow: hidden;
    font-size: 0.94rem;
    border: 1px solid var(--black);

    &::after {
      content: 'ℹ';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      width: 1.44rem;
      height: 100%;
      border-top: 1px solid var(--orange);
      font-size: 1rem;

      ${props => props.isSuccess && css`
        background-color: var(--orange);
        border: 1px solid var(--orange);
      `}
      ${props => props.isError && css`
        background-color: var(--orange);
        border: 1px solid var(--orange);
      `}
    }
    
  }

  @keyframes fromTop {
    0% { right: var(--right-inactive); }
    20% { right: var(--top-n-right-active); }
    50% { right: var(--top-n-right-active); }
    80% { right: var(--top-n-right-active); }
    100% { right: var(--right-inactive); }
  }
`;

export default function floating(props) {
  return (
    <FloatingContainer {...props} >
      <div>
        <p>Wrong email or password</p>
      </div>
    </FloatingContainer>
  );
};
