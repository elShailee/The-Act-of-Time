import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';

export default function SettingsWindow({ unmountSettingsWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSettingsWindow}>
			<form>
				<br />
				<label htmlFor='masterVolume'>Master</label>
				<br />
				<input type='range' min='0' max='100' defaultValue='73' step='1' name='masterVolume' id='masterVolume' />
				<hr />
				<br />
				<label htmlFor='music'>Music</label>
				<br />
				<input type='range' min='0' max='100' defaultValue='32' step='1' name='music' id='music' />
				<hr />
				<br />
				<label htmlFor='sfx'>SFX</label>
				<br />
				<input type='range' min='0' max='100' defaultValue='55' step='1' name='sfx' id='sfx' />
				<hr />
				<br />
				<label htmlFor='ambient'>Ambient</label>
				<br />
				<input type='range' min='0' max='100' defaultValue='41' step='1' name='ambient' id='ambient' />
				<hr />
				<br />
			</form>
		</GeneralWindow>
	);
}
