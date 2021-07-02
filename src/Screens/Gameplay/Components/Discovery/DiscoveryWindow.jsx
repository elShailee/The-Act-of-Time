import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import { WindowNavbar } from './styles';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const buttons = [
		{
			title: 'Crafting',
			func: () => console.log('Crafting'),
		},
		{
			title: 'Harvesting',
			func: () => console.log('Harvesting'),
		},
	];
	const title = <WindowNavbar buttons={buttons} />;

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
