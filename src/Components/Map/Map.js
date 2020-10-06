import React from 'react';
import './Map.css';
import MapCompass from './MapCompass';
import ZoomSlider from './ZoomSlider';

export default function Map() {
  return (
    <div id="mapComponent">
      <div id="mapNavigationTools">
        <MapCompass />
        <ZoomSlider />
      </div>
    </div>
  );
}
