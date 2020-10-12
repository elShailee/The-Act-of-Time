import React from 'react';
import './MapCompass.css';
import { mapCompassTexts } from 'Texts/gameplayTexts';

export default function MapCompass() {
  return <div id="mapCompass">{mapCompassTexts.title}</div>;
}
