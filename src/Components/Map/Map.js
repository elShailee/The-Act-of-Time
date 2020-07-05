import React from 'react';
import './Map.css';
import MapCompass from './MapCompass';
import MapZoomSlider from './MapZoomSlider';

export default function Map() {
  return (
    <div id="mapComponent">
      <div id="mapNavigationTools">
        <MapCompass></MapCompass>
        <MapZoomSlider></MapZoomSlider>
      </div>
    </div>
  );
}
