import React from 'react';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';
import SettingsWindow from 'Components/Settings/SettingsWindow';
import ActionsWindow from 'Components/Actions/ActionsWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(state => state.MountedComponents.CoinsPurchaseWindow);
	const isEnergyPurchaseWindowMounted = useSelector(state => state.MountedComponents.EnergyPurchaseWindow);
	const isActionsWindowMounted = useSelector(state => state.MountedComponents.ActionsWindow);
	const isSettingsWindowMounted = useSelector(state => state.MountedComponents.SettingsWindow);

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
