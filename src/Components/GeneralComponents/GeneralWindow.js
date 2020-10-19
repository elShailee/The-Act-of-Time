import React from 'react';
import GeneralCloseButton from 'Components/GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, ...props }) {
  let composedClassName = 'generalWindow centered';
  if (props['rightSided']) composedClassName = 'generalWindow rightSided';

  return (
    <div className={composedClassName}>
      <GeneralCloseButton className="generalWindowCloseButton" unmountWindow={unmountGeneralWindow} />
      <div className="contentContainer">{children}</div>
    </div>
  );
}
