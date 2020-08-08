import React, { useState } from 'react';

export default function GeneralButton(props) {
  const generalStyle = {
    backgroundColor: props.color,
    borderRadius: '5px',
    border: '1px solid black',
    textAlign: 'center',
    lineHeight: '2.5rem',
    fontSize: '0.875rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const onHoverStyle = {
    filter: 'brightness(115%) saturate(65%)',
  };

  const atClickStyle = {
    filter: 'brightness(100%) saturate(65%)',
  };

  const [composedStyle, setComposedStyle] = useState(generalStyle);

  return (
    <div
      id={props.id}
      className="GeneralButton"
      onClick={props.onClick}
      style={composedStyle}
      onMouseOver={() => setComposedStyle({ ...generalStyle, ...onHoverStyle })}
      onMouseLeave={() => setComposedStyle(generalStyle)}
      onMouseDown={() => setComposedStyle({ ...generalStyle, ...atClickStyle })}
      onMouseUp={() => setComposedStyle({ ...generalStyle, ...onHoverStyle })}
    >
      {props.children}
    </div>
  );
}
