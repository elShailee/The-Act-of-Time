import React, { useState } from 'react';
import './Map.css';
import FocusedMap from './FocusedMap/FocusedMap';
import MapCompass from './MapCompass';
// import ZoomSlider from './ZoomSlider';
import MapChunk from 'Screens/Gameplay/Components/Map/MapChunk';
// import WorldMap from './WorldMap';

export default function Map() {
	const [screen, setScreen] = useState(false);

	return (
		<div id='mapComponent'>
			{screen ? <FocusedMap /> : <MapChunk />}
			<div id='mapNavigationTools'>
				<MapCompass onClick={() => setScreen(!screen)} />
				{/* <ZoomSlider  /> */}
			</div>
		</div>
	);
}
