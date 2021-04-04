import React from 'react';
import GeneralButton from './GeneralButton';

export default function GeneralCloseButton({ unmountWindow, className }) {
  return (
    <GeneralButton className={className} closeButton onButtonClick={unmountWindow}>
      X
    </GeneralButton>
  );
}
