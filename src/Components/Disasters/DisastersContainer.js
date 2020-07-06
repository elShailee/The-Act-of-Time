import React from 'react';
import './DisastersContainer.css';
import DisasterCounter from './DisasterCounter';
import DisastersIcon from './DisastersIcon';

export default function DisastersContainer() {
  return (
    <div id="disastersContainer">
      <DisastersIcon />
      <DisasterCounter />
    </div>
  );
}
