import React from 'react';
import GeneralButton from './GeneralButton';
import './GeneralCloseButton.css';

export default function GeneralCloseButton({ unmountWindow, className }) {
  return (
    <GeneralButton className={className + ' generalCloseButton bordered'} onClick={unmountWindow}>
      X
    </GeneralButton>
  );
}
