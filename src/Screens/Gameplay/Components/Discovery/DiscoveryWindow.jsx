import './DiscoveryWindow.css';
import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountDiscoveryWindow} rightSided>
			<div id='discoverySettingWindow'> </div>
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
