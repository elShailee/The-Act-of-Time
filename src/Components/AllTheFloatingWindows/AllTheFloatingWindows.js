import React from 'react';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';
import ActionsWindow from 'Components/Actions/ActionsWindow';
import CraftingWindow from 'Components/Crafting/CraftingWindow';
import SeenWindow from 'Components/Seen/SeenWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';
export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(state => state.MountedComponents.CoinsPurchaseWindow);
	const isEnergyPurchaseWindowMounted = useSelector(state => state.MountedComponents.EnergyPurchaseWindow);
	const isActionsWindowMounted = useSelector(state => state.MountedComponents.ActionsWindow);
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);

	const CoinsPurchaseWindowAsVar = (
		<CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => dispatch(unmountComponents(['CoinsPurchaseWindow']))} />
	);
	const EnergyPurchaseWindowAsVar = (
		<EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => dispatch(unmountComponents(['EnergyPurchaseWindow']))} />
	);
	const ActionsWindowAsVar = <ActionsWindow unmountActionsWindow={() => dispatch(unmountComponents(['ActionsWindow']))} />;
	const CraftingWindowAsVar = (
		<CraftingWindow unmountCraftingWindow={() => dispatch(unmountComponents(['CraftingWindow']))} />
	);
	const SeenWindowAsVar = <SeenWindow unmountSeenWindow={() => dispatch(unmountComponents(['SeenWindow']))} />;

	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
			{isCraftingWindowMounted && CraftingWindowAsVar}
			{isSeenWindowMounted && SeenWindowAsVar}
		</div>
	);
}
