/* React & Gatsby stuff */
import React, { ButtonHTMLAttributes } from 'react';

/* Modules */
import { animated } from 'react-spring';

/* Animation hooks */
import useShadow from '../../animations/useShadow';

/* Styled components */
const ButtonContainer = {
  fontSize: '0.97rem',
  padding: '0.8rem 1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'var(--black)',
  color: 'var(--white)',
  boxShadow: 'var(--shadow-normal)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function Button(props: ButtonHTMLAttributes<any>) {
  const [shadowStyle, setIsHovered] = useShadow();
  return (
    <animated.button
      style={{ ...ButtonContainer, ...shadowStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {props.children}
    </animated.button>
  )
};
