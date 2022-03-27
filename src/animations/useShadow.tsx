/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

/* Utils */
import { getCssCustomProperty } from '../utils/funcions';

function useShadow() {
  const [isHovered, setIsHovered] = useState(false);
  const shadowStyle = useSpring({
    config: {
      mass: 1,
      tension: 240,
      friction: 20
    },
    to: {
      boxShadow: isHovered 
        ? getCssCustomProperty('--shadow-hover')
        : getCssCustomProperty('--shadow-normal'),
      transform: isHovered ? 'scale(1.00666)' : 'scale(1)'
    }
  });
  return [shadowStyle, setIsHovered];
};

export default useShadow;
