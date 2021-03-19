import React from 'react';
import CoinsPurchaseWindow from 'Screens/GameplayScreen/Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Screens/GameplayScreen/Components/Energy/EnergyPurchaseWindow';
import ActionsWindow from 'Screens/GameplayScreen/Components/Actions/ActionsWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(state => state.MountedComponents.CoinsPurchaseWindow);
	const isEnergyPurchaseWindowMounted = useSelector(state => state.MountedComponents.EnergyPurchaseWindow);
	const isActionsWindowMounted = useSelector(state => state.MountedComponents.ActionsWindow);

	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />
	);
	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />
	);
	const ActionsWindowAsVar = <ActionsWindow unmountActionsWindow={() => dispatch(unmountComponents(['ActionsWindow']))} />;
	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
		</div>
	);
}
