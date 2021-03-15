import React from 'react';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function SeenWindow({ unmountSeenWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSeenWindow}>
			<br />
			<br />
			<br />
			Seen Window
		</GeneralWindow>
	);
}
