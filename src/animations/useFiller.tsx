/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useFiller() {
  const [isFilled, setIsFilled] = useState(false);
  const fillerStyle = useSpring({
    config: {
      mass: 0.5,
      tension: 440,
      friction: 24
    },
    to: {
      width: isFilled ? '0.6rem' : '0rem',
      height: isFilled ? '0.6rem' : '0rem',
    }
  });
  return [fillerStyle, setIsFilled];
};

export default useFiller;
