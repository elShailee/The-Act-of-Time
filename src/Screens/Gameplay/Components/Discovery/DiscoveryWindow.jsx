import React, { useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import styles, { UpperInterface, InventoryContainer } from './styles';

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
			{activeInterface === 'Craft' && <UpperInterface>Crafting Interface</UpperInterface>}
			{activeInterface === 'Harvest' && <UpperInterface>Harvesting Interface</UpperInterface>}
			<InventoryContainer />
		</GeneralWindow>
	);
}
