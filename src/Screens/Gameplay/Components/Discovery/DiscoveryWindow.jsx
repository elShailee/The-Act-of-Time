import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import { windowBarStyle, windowNavButtonStyle } from './styles';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const navBarButtons = [
		{
			title: 'Craft',
			func: () => console.log('Craft'),
		},
		{
			title: 'Harvest',
			func: () => console.log('Harvest'),
		},
	];

	const title = <GeneralNavBar buttons={navBarButtons} barStyle={windowBarStyle} buttonStyle={windowNavButtonStyle} />;

	return (
		<GeneralWindow unmountGeneralWindow={unmountDiscoveryWindow} position='rightSided' title={title}>
			<br />
			<br />
			<br />
			Discovery Window
			<br />
			<br />
			<br />
			<br />
		</GeneralWindow>
	);
}
