import React from 'react';
import './Map.css';
import MapCompass from './MapCompass';
import ZoomSlider from './ZoomSlider';
import WorldMap from './WorldMap';

export default function Map() {
	return (
		<div id='mapComponent'>
			<WorldMap></WorldMap>
			<div id='mapNavigationTools'>
				<MapCompass />
				<ZoomSlider />
			</div>
		</div>
	);
}
