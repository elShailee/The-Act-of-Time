import React from 'react';
import './Map.css';
import FocusedMap from './FocusedMap/FocusedMap';
import MapCompass from './MapCompass';
import ZoomSlider from './ZoomSlider';
import WorldMap from './WorldMap';

const screen = null;
export default function Map() {
	return (
		<div id='mapComponent'>
			screen ? <FocusedMap /> : <WorldMap />;
			<div id='mapNavigationTools'>
				<MapCompass />
				<ZoomSlider />
			</div>
		</div>
	);
}
