/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useFiller() {
  const [isChecked, setIsChecked] = useState(false);
  const fillerStyle = useSpring({
    config: {
      mass: 1,
      tension: 240,
      friction: 20
    },
    to: {
      width: isChecked ? '0.6rem' : '0rem',
      height: isChecked ? '0.6rem' : '0rem',
    }
  });
  return [fillerStyle, setIsChecked];
};

export default useFiller;
