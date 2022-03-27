/* React & Gatsby stuff */
import React, { ButtonHTMLAttributes } from 'react';

/* Modules */
import styled from 'styled-components';
import { animated } from 'react-spring';

/* Animation hooks */
import useShadow from '../../animations/useShadow';

/* Styled components */
const ButtonContainer = animated(styled.button`
  font-size: 0.97rem;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: var(--black);
  color: var(--white);
  box-shadow: var(--shadow-normal);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`);

export default function Button(props: ButtonHTMLAttributes<any>) {
  const [shadowStyle, setIsHovered] = useShadow();
  return (
    <ButtonContainer
      {...props}
      style={{ ...shadowStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
    </ButtonContainer>
  )
};
