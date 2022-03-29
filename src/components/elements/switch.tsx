/* React & Gatsby stuff */
import React, { useState, useEffect } from 'react';

/* Modules */
import { animated } from 'react-spring';

/* Animation hooks */
import useSwitch from '../../animations/useSwitch';

/* Endpoints & utils */
import { updateItems } from '../../endpoints/items';
 
export default function Switch({ itemId, status, parentState }) {
  const [state, setState] = useState({
    statusOn: status === 'AVAILABLE' ? true : false,
    loaded: false,
  });
  const [switchStyle, setIsSwitchOn] = useSwitch(status === 'AVAILABLE' ? true : false);

  const switchStatus = () => {
    setIsSwitchOn(!state.statusOn);
    updateItems(state.statusOn ? 'UNAVAILABLE' : 'AVAILABLE', itemId);
    setState({ ...state, statusOn: !state.statusOn });
    parentState.setState({ ...parentState.state, reload: !parentState.state.reload });
  };

  return (
    <div onClick={() => switchStatus()} className='status-switch' >
      <animated.span style={{ ...switchStyle }} />
    </div>
  )
};
