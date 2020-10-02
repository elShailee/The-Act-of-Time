import React from 'react';
import GeneralCloseButton from 'Components/GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, windowPosition, unmountGeneralWindow }) {
  const isWindowRightSided = windowPosition === 'right' || windowPosition === 'Right';
  let composedClassName = isWindowRightSided
    ? 'generalWindow rightSided'
    : 'generalWindow centered';

  return (
    <div className={composedClassName}>
      <GeneralCloseButton
        className="generalWindowCloseButton"
        unmountWindow={unmountGeneralWindow}
      />
      <div className="contentContainer">{children}</div>
    </div>
  );
}
