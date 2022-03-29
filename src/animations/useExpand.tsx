/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useExpand() {
  const [isExpanded, setIsExpanded] = useState({ height: '0rem', listHeihg: '0rem', isOpen: false });
  const fillerStyle = useSpring({
    config: {
      mass: 1,
      tension: 144,
      friction: 22
    },
    to: {
      height: !isExpanded.isOpen ? isExpanded.listHeihg : isExpanded.height,
    }
  });
  return [fillerStyle, setIsExpanded];
};

export default useExpand;
