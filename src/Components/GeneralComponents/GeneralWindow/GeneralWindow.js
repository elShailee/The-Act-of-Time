import React from 'react';
import GeneralCloseButton from '../GeneralCloseButton/GeneralCloseButton';

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
  };

  const rightlyPositionedWindowStyle = {
    position: 'fixed',
    right: '7%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  };

  const composedWindowStyle = Object.assign(
    basicWindowStyle,
    props.windowPosition === 'right' ? rightlyPositionedWindowStyle : centeredWindowStyle
  );

  return (
    <div style={composedWindowStyle}>
      <GeneralCloseButton closeWindow={props.handleClose} />
      <div style={{ marginTop: '7px' }}>{props.children}</div>
    </div>
  );
}
