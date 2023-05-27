import React, { useMemo } from 'react';
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

	const EnergyPurchaseWindowAsVar = useMemo(
		() => <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />,
		[dispatch],
	);
	const CoinsPurchaseWindowAsVar = useMemo(
		() => <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />,
		[dispatch],
	);
	const SettingsWindowAsVar = useMemo(
		() => <SettingsWindow unmountSettingsWindow={() => dispatch(unmountComponents(['SettingsWindow']))} />,
		[dispatch],
	);
	const ActionsWindowAsVar = useMemo(
		() => <ActionsWindow unmountActionsWindow={() => dispatch(unmountComponents(['ActionsWindow']))} />,
		[dispatch],
	);
	const DiscoveryWindowAsVar = useMemo(
		() => (
			<div style={{ visibility: isDiscoveryWindowMounted ? 'visible' : 'hidden' }}>
				<DiscoveryWindow unmountDiscoveryWindow={() => dispatch(unmountComponents(['DiscoveryWindow']))} />
			</div>
		),
		[dispatch, isDiscoveryWindowMounted],
	);
	const SeenWindowAsVar = useMemo(
		() => <SeenWindow unmountSeenWindow={() => dispatch(unmountComponents(['SeenWindow']))} />,
		[dispatch],
	);

	return (
		<div>
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isSettingsWindowMounted && SettingsWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
			{DiscoveryWindowAsVar}
			{isSeenWindowMounted && SeenWindowAsVar}
		</div>
	);
}
