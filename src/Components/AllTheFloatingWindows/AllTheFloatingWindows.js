import React from 'react';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(state => state.MountedComponents.CoinsPurchaseWindow);
	const isEnergyPurchaseWindowMounted = useSelector(state => state.MountedComponents.EnergyPurchaseWindow);

	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />
	);
	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />
	);

	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
		</div>
	);
}
