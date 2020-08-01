import React from 'react';
import './Map.css';
import MapCompass from './MapCompass';
import MapZoomSlider from './MapZoomSlider';

export default function Map() {
  return (
    <div
      id="mapComponent"
      onClick={() => {
        console.log('Map Component Clicked');
      }}
    >
      <div id="mapNavigationTools">
        <MapCompass />
        <MapZoomSlider />
      </div>
    </div>
  );
}
