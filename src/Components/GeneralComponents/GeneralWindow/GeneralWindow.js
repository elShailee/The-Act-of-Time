import React from 'react';
import GeneralCloseButton from '../GeneralCloseButton/GeneralCloseButton';

export default function GeneralWindow({ content, closeWindow, windowPosition }) {
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
    windowPosition === 'right' ? rightlyPositionedWindowStyle : centeredWindowStyle
  );

  return (
    <div style={composedWindowStyle}>
      <GeneralCloseButton closeWindow={closeWindow} />
      <div id="contentContainer" style={{ marginTop: '7px' }}>
        {content}
      </div>
    </div>
  );
}
