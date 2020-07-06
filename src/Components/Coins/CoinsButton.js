import React from 'react';
import './CoinsButton.css';

export default function CoinsButton({ showOrHideCoinsTab }) {
  return (
    <div id="coinsButton" onClick={() => showOrHideCoinsTab()}>
      Coins
    </div>
  );
}
