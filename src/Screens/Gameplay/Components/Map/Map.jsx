import React from 'react';
import { BG, NavToolsContainer, ZoomSlider, MapCompass } from './styles';
import FocusedMap from './FocusedMap/FocusedMap';
import texts from 'texts';

export default function Map() {
	return (
		<BG>
			<FocusedMap />
			<NavToolsContainer>
				<ZoomSlider>{texts.gameplay.map.zoomSlider.title}</ZoomSlider>
				<MapCompass>{texts.gameplay.map.mapCompass.title}</MapCompass>
			</NavToolsContainer>
		</BG>
	);
}
