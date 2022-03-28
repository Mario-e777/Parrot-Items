/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useExpand() {
  const [isExpanded, setIsExpanded] = useState({ height: '0px', listHeihg: '0px', isOpen: false });
  const fillerStyle = useSpring({
    config: {
      mass: 1,
      tension: 340,
      friction: 30
    },
    to: {
      height: isExpanded.isOpen ? isExpanded.listHeihg : isExpanded.height,
    }
  });
  return [fillerStyle, setIsExpanded];
};

export default useExpand;
