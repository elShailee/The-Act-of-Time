import React from 'react';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function CraftingWindow({ unmountCraftingWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountCraftingWindow} rightSided={true}>
			<br />
			<br />
			<br />
			Crafting
			<br />
			<br />
			<br />
			<br />
		</GeneralWindow>
	);
}
