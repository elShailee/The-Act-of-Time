import React, { useState } from 'react';
import './GeneralButton.css';

//Instructions for adding style props below

export default function GeneralButton({ id, onButtonClick, children, ...props }) {
  let classNamePlusGeneralButton = 'generalButton';
  for (const variant in variantsDict) {
    props[variant] && (classNamePlusGeneralButton += ' ' + variant);
  }

  const [dynamicClassName, setDynamicClassName] = useState(classNamePlusGeneralButton);

  return (
    <div
      id={id}
      className={dynamicClassName}
      onClick={onButtonClick}
      onMouseOver={() => setDynamicClassName(classNamePlusGeneralButton + ' onHover')}
      onMouseLeave={() => setDynamicClassName(classNamePlusGeneralButton)}
      onMouseDown={() => setDynamicClassName(classNamePlusGeneralButton + ' onMousePress')}
      onMouseUp={() => setDynamicClassName(classNamePlusGeneralButton + ' onHover')}
    >
      {children}
    </div>
  );
}

const variantsDict = {
  uppercased: 'uppercased',
  outlined: 'outlined',
  closeButton: 'closeButton',
};

// If you want to add a new proped style for GeneralButton you need to:
// 1. Add the name of the prop into variantsDict above, just like the existing ones.
// 2. add the style you want to implement to GeneralButton.css under the selector .generalButton.yourNewPropName .
