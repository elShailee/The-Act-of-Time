import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import styles from './styles_window';
import React from 'react';

export default function NavBar({ setActiveInterface }) {
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

	return (
		<GeneralNavBar
			buttons={navBarButtons}
			barStyle={styles.NavBar}
			buttonStyle={styles.NavButton}
			pressedButtonStyle={styles.PressedNavButton}
			spacerStyle={styles.NavSpacer}
		/>
	);
}
