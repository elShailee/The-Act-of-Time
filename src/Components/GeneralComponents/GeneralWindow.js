import React from 'react';
import GeneralCloseButton from 'Components/GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ windowPosition, children, unmountGeneralWindow }) {
  const isWindowRightSided = windowPosition === 'right' || windowPosition === 'Right';
  const basicWindowStyle = {
    backgroundColor: '#ddcc66',
    textAlign: 'right',
    padding: '7px',
    borderRadius: '5px',
    zIndex: '1',
  };

  const centeredWindowStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    //the transform makes the window's anchor point to be in its center instead of top left,
    //that way it is possible to center it easily instead of calculating its position according
    //to it's dimensions
  };

  const rightlyPositionedWindowStyle = {
    position: 'fixed',
    right: '-8%',
    top: '55%',
    transform: 'translate(-50%,-50%)',
    //the transform makes the window's anchor point to be in its center instead of top left,
    //that way it is possible to center it easily instead of calculating its position according
    //to it's dimensions
  };

  const customizedWindowStyle = Object.assign(
    basicWindowStyle,
    isWindowRightSided ? rightlyPositionedWindowStyle : centeredWindowStyle
  );

  return (
    <div style={customizedWindowStyle}>
      <GeneralCloseButton unmountWindow={unmountGeneralWindow} />
      <div className="generalWindowContentContainer">{children}</div>
    </div>
  );
}
