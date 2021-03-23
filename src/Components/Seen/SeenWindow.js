import React from 'react';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function SeenWindow({ unmountSeenWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSeenWindow} rightSided={true}>
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
