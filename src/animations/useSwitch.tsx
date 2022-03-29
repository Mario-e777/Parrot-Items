/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

/* Utils */
import { getCssCustomProperty } from '../utils/funcions';

function useSwitch(status) {
  const [isSwitchOn, setIsSwitchOn] = useState(status);
  const switchStyle = useSpring({
    config: {
      mass: 1,
      tension: 280,
      friction: 14
    },
    to: {
      right: isSwitchOn ? '50%' : '0%',
      opacity: isSwitchOn ? '1' : '0.8',
      boxShadow: isSwitchOn 
        ? getCssCustomProperty('--shadow-hover')
        : getCssCustomProperty('--shadow-normal'),
    }
  });
  return [switchStyle, setIsSwitchOn];
};

export default useSwitch;
