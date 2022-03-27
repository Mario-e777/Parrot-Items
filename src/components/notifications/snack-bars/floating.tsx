/* React stuff */
import React, { useEffect } from 'react';

/* Modules */
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

/* Animation hooks */
import useNotification from '../../../animations/useNotification';

interface SnackInterface {
  id: string,
  isSuccess: boolean,
  isError: boolean,
  duration: number
};
const SnackBarContainer = animated(styled.div<SnackInterface>`
  /* Custom props */
  --right-inactive: -19rem;
  --base-size: 0.94rem;

  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  right: var(--right-inactive);
  top: var(--base-size);
  ${props => props.duration && css`animation-duration: ${props.duration}ms;`}
  z-index: +9999;
  
  & div {
    padding: var(--base-size);
    padding-left: calc(1.44rem + var(--base-size));
    flex-direction: column;
    width: fit-content;
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
    font-size: var(--base-size);
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
        background-color: var(--green);
        border: 1px solid var(--green);
        color: var(--black);
      `}
      ${props => props.isError && css`
        background-color: var(--orange);
        border: 1px solid var(--orange);
      `}
    }
  }
`);

export default function floatingSnackBar(props: SnackInterface) {
  const [notificationStyle, setIsShowing] = useNotification();
  useEffect(() => {
    setIsShowing(true)
    setTimeout(() => setIsShowing(false), 3333);
  }, []);
  return (
    <SnackBarContainer
      {...props}
      style={{ ...notificationStyle }}
    >
      <div>
        <p>Usuario o contraseña incorrecta</p>
      </div>
    </SnackBarContainer>
  );
};
