import React from 'react';
import GeneralWindow from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralWindow';

export default function EnergyPurchaseWindow({ unmountEnergyPurchaseWindow }) {
	return (
		<GeneralWindow unmountGeneralWindow={unmountEnergyPurchaseWindow}>
			<br />
			<br />
			<br />
			Buy Energy
			<br />
			<br />
			<br />
			<br />
			Earn Energy
		</GeneralWindow>
	);
}
