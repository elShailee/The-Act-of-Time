import React from 'react';
import EnergyPurchaseWindow from 'Screens/Gameplay/Components/Energy/EnergyPurchaseWindow';
import CoinsPurchaseWindow from 'Screens/Gameplay/Components/Coins/CoinsPurchaseWindow';
import SettingsWindow from 'Screens/Gameplay/Components/Settings/SettingsWindow';
import ActionsWindow from 'Screens/Gameplay/Components/Actions/ActionsWindow';
import DiscoveryWindow from 'Screens/Gameplay/Components/Discovery/DiscoveryWindow/DiscoveryWindow';
import SeenWindow from 'Screens/Gameplay/Components/Seen/SeenWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isEnergyPurchaseWindowMounted = useSelector(isComponentMountedSelector('EnergyPurchaseWindow'));
	const isCoinsPurchaseWindowMounted = useSelector(isComponentMountedSelector('CoinsPurchaseWindow'));
	const isSettingsWindowMounted = useSelector(isComponentMountedSelector('SettingsWindow'));
	const isActionsWindowMounted = useSelector(isComponentMountedSelector('ActionsWindow'));
	const isDiscoveryWindowMounted = useSelector(isComponentMountedSelector('DiscoveryWindow'));
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));

	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />
	);
	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />
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
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isSettingsWindowMounted && SettingsWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
			{isDiscoveryWindowMounted && DiscoveryWindowAsVar}
			{isSeenWindowMounted && SeenWindowAsVar}
		</div>
	);
}
