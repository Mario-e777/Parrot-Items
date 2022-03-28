/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useRotate() {
  const [isRotated, setIsRotated] = useState(false);
  const rotateStyle = useSpring({
    config: {
      mass: 1,
      tension: 340,
      friction: 30
    },
    to: {
      transform: isRotated ? 'rotate(0deg)' : 'rotate(180deg)',
    }
  });
  return [rotateStyle, setIsRotated];
};

export default useRotate;
