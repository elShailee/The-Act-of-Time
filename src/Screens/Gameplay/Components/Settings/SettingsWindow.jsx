import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import { Range } from './styles';

export default function SettingsWindow({ unmountSettingsWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSettingsWindow}>
			<form>
				<br />
				<label htmlFor='masterVolume'>Master</label>
				<br />
				<Range defaultValue='73' />
				<hr />
				<br />
				<label htmlFor='music'>Music</label>
				<br />
				<Range defaultValue='32' />
				<hr />
				<br />
				<label htmlFor='sfx'>SFX</label>
				<br />
				<Range defaultValue='55' />
				<hr />
				<br />
				<label htmlFor='ambient'>Ambient</label>
				<br />
				<Range defaultValue='41' />
				<hr />
				<br />
			</form>
		</GeneralWindow>
	);
}
