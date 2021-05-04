import React from 'react';
import './Map.css';
import FocusedMap from './FocusedMap/FocusedMap';
import MapCompass from './MapCompass';
import ZoomSlider from './ZoomSlider';

export default function Map() {
	return (
		<div id='mapComponent'>
			<FocusedMap />
			<div id='mapNavigationTools'>
				<MapCompass />
				<ZoomSlider />
			</div>
		</div>
	);
}
