import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';

export default function SeenWindow({ unmountSeenWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSeenWindow} rightSided>
			<br />
			<br />
			<br />
			Seen Window
			<br />
			<br />
			<br />
			<br />
		</GeneralWindow>
	);
}
