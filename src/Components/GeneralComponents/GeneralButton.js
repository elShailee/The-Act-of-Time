import React, { useState } from 'react';
import './GeneralButton.css';

export default function GeneralButton({ className, id, onButtonClick, children }) {
  const classNamePlusButton = className + ' button';
  const [composedClassName, setComposedClassName] = useState(classNamePlusButton);

  return (
    <div
      id={id}
      className={composedClassName}
      onClick={onButtonClick}
      onMouseOver={() => setComposedClassName(classNamePlusButton + ' onHover')}
      onMouseLeave={() => setComposedClassName(classNamePlusButton)}
      onMouseDown={() => setComposedClassName(classNamePlusButton + ' onMousePress')}
      onMouseUp={() => setComposedClassName(classNamePlusButton + ' onHover')}
    >
      {children}
    </div>
  );
}
