import React from 'react';
import './MapCompass.css';
import texts from 'texts';

export default function MapCompass({ onClick }) {
	return (
		<div id='mapCompass' onClick={onClick}>
			{texts.gameplay.map.mapCompass.title}
		</div>
	);
}
