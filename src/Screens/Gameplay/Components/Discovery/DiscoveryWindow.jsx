import React, { useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import {
	CraftContainer,
	HarvestContainer,
	InventoryContainer,
	WindowContentContainerStyles,
	WindowContainerStyles,
	BarStyle,
	ButtonStyle,
	PressedButtonStyle,
	SpacerStyle,
	CloseButtonStyle,
} from './styles';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const [activeInterface, setActiveInterface] = useState('Craft');

	const navBarButtons = [
		{
			title: 'Craft',
			func: () => setActiveInterface('Craft'),
		},
		{
			title: 'Harvest',
			func: () => setActiveInterface('Harvest'),
		},
	];

	const tabsNavBar = (
		<GeneralNavBar
			buttons={navBarButtons}
			barStyle={BarStyle}
			buttonStyle={ButtonStyle}
			pressedButtonStyle={PressedButtonStyle}
			spacerStyle={SpacerStyle}
		/>
	);

	return (
		<GeneralWindow
			unmountGeneralWindow={unmountDiscoveryWindow}
			position='rightSided'
			title={tabsNavBar}
			contentContainerStyle={WindowContentContainerStyles}
			windowContainerStyle={WindowContainerStyles}
			closeButtonStyle={CloseButtonStyle}
		>
			{activeInterface === 'Craft' && <CraftContainer>Crafting Interface</CraftContainer>}
			{activeInterface === 'Harvest' && <HarvestContainer>Harvesting Interface</HarvestContainer>}
			<InventoryContainer />
		</GeneralWindow>
	);
}
