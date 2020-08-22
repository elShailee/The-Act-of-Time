import React from 'react';
import GeneralCloseButton from 'Components/GeneralComponents/GeneralCloseButton';

export default function GeneralWindow(props) {
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
    right: '7%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    //the transform makes the window's anchor point to be in its center instead of top left,
    //that way it is possible to center it easily instead of calculating its position according
    //to it's dimensions
  };

  const composedWindowStyle = Object.assign(
    basicWindowStyle,
    props.windowPosition === 'right' ? rightlyPositionedWindowStyle : centeredWindowStyle
  );

  return (
    <div style={composedWindowStyle}>
      <GeneralCloseButton closeWindow={props.handleClose} />
      <div id="contentContainer" style={{ marginTop: '7px' }}>
        {props.children}
      </div>
    </div>
  );
}
