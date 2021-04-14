import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';

export default function CraftingWindow({ unmountCraftingWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCraftingWindow} rightSided>
			<br />
			<br />
			<br />
			Crafting Window
		</GeneralWindow>
	);
}
