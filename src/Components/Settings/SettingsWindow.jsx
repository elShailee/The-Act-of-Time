import React from "react";
import GeneralWindow from "Components/GeneralComponents/GeneralWindow";

export default function SettingsWindow({ unmountSettingsWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountSettingsWindow}>
			<form>
				<br />
				<label htmlFor='masterVolume'>Master</label>
				<br />
				<input type='range' min='0' max='100' value='73' step='1' name='masterVolume' id='masterVolume' />
				<hr />
				<br />
				<label htmlFor='masterVolume'>Music</label>
				<br />
				<input type='range' min='0' max='100' value='32' step='1' name='masterVolume' id='masterVolume' />
				<hr />
				<br />
				<label htmlFor='masterVolume'>SFX</label>
				<br />
				<input type='range' min='0' max='100' value='55' step='1' name='masterVolume' id='masterVolume' />
				<hr />
				<br />
				<label htmlFor='masterVolume'>Ambient</label>
				<br />
				<input type='range' min='0' max='100' value='41' step='1' name='masterVolume' id='masterVolume' />
				<hr />
				<br />
			</form>
		</GeneralWindow>
	);
}
