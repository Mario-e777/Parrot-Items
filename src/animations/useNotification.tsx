/* React & Gatsby stuff */
import { useState } from 'react';

/* Modules */
import { useSpring } from 'react-spring';

function useNotification() {
  const [isShowing, setIsShowing] = useState(false);
  const notificationStyle = useSpring({
    config: {
      mass: 1,
      tension: 380,
      friction: 28,
    },
    to: {
      right: isShowing ? '0.94rem' : '-19rem',
    },
    loop: { reverse: true },
  });
  return [notificationStyle, setIsShowing];
};

export default useNotification;
