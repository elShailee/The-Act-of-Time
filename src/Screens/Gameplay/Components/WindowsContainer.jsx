import React from 'react';
import CoinsPurchaseWindow from 'Screens/Gameplay/Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Screens/Gameplay/Components/Energy/EnergyPurchaseWindow';
import SettingsWindow from 'Screens/Gameplay/Components/Settings/SettingsWindow';
import ActionsWindow from 'Screens/Gameplay/Components/Actions/ActionsWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
import { isMountedComponentSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(isMountedComponentSelector('CoinsPurchaseWindow'));
	const isEnergyPurchaseWindowMounted = useSelector(isMountedComponentSelector('EnergyPurchaseWindow'));
	const isSettingsWindowMounted = useSelector(isMountedComponentSelector('SettingsWindow'));
	const isActionsWindowMounted = useSelector(isMountedComponentSelector('ActionsWindow'));

	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />
	);
	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />
	);
	const SettingsWindowAsVar = (
		<SettingsWindow unmountSettingsWindow={() => dispatch(unmountComponents(['SettingsWindow']))} />
	);

	const ActionsWindowAsVar = <ActionsWindow unmountActionsWindow={() => dispatch(unmountComponents(['ActionsWindow']))} />;
	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isSettingsWindowMounted && SettingsWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
		</div>
	);
}
