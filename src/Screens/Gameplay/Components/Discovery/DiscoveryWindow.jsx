import React, { useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import styles, { UpperInterface, InventoryContainer } from './styles_window';
import CraftingInterface from './CraftingInterface';

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

	const TabsNavBar = (
		<GeneralNavBar
			buttons={navBarButtons}
			barStyle={styles.NavBar}
			buttonStyle={styles.NavButton}
			pressedButtonStyle={styles.PressedNavButton}
			spacerStyle={styles.NavSpacer}
		/>
	);

	return (
		<GeneralWindow
			unmountGeneralWindow={unmountDiscoveryWindow}
			position='rightSided'
			title={TabsNavBar}
			contentContainerStyle={styles.WindowContentContainer}
			windowContainerStyle={styles.WindowContainer}
			closeButtonStyle={styles.CloseButton}
		>
			<UpperInterface>
				{activeInterface === 'Craft' && <CraftingInterface />}
				{activeInterface === 'Harvest' && 'Harvesting Interface'}
			</UpperInterface>
			<InventoryContainer />
		</GeneralWindow>
	);
}
