import React, { useContext } from 'react';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';
import CharacterWindow from 'Components/Character/CharacterWindow';

export default function AllTheFloatingWindows() {
	const { mountedComponentsDict, unmountComponents } = useContext(MountedComponentsContext);

	const isCoinsPurchaseWindowMounted = mountedComponentsDict.CoinsPurchaseWindow;
	const isEnergyPurchaseWindowMounted = mountedComponentsDict.EnergyPurchaseWindow;
	const isCharacterWindowMounted = mountedComponentsDict.CharacterWindow;

	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
	);
	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
	);
	const CharacterWindowAsVar = <CharacterWindow unmountCharacterWindow={() => unmountComponents(['CharacterWindow'])} />;
	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isCharacterWindowMounted && CharacterWindowAsVar}
		</div>
	);
}
