import React from 'react';
import CoinsPurchaseWindow from 'Screens/Gameplay/Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Screens/Gameplay/Components/Energy/EnergyPurchaseWindow';
import SettingsWindow from 'Screens/Gameplay/Components/Settings/SettingsWindow';
import ActionsWindow from 'Screens/Gameplay/Components/Actions/ActionsWindow';
import DiscoveryWindow from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow';
import SeenWindow from 'Screens/Gameplay/Components/Seen/SeenWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(isComponentMountedSelector('CoinsPurchaseWindow'));
	const isEnergyPurchaseWindowMounted = useSelector(isComponentMountedSelector('EnergyPurchaseWindow'));
	const isSettingsWindowMounted = useSelector(isComponentMountedSelector('SettingsWindow'));
	const isActionsWindowMounted = useSelector(isComponentMountedSelector('ActionsWindow'));
	const isDiscoveryWindowMounted = useSelector(isComponentMountedSelector('DiscoveryWindow'));
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));

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
	const DiscoveryWindowAsVar = (
		<DiscoveryWindow unmountDiscoveryWindow={() => dispatch(unmountComponents(['DiscoveryWindow']))} />
	);
	const SeenWindowAsVar = <SeenWindow unmountSeenWindow={() => dispatch(unmountComponents(['SeenWindow']))} />;

	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isSettingsWindowMounted && SettingsWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
			{isDiscoveryWindowMounted && DiscoveryWindowAsVar}
			{isSeenWindowMounted && SeenWindowAsVar}
		</div>
	);
}
