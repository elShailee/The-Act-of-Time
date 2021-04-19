import React from 'react';
import CoinsPurchaseWindow from 'Screens/Gameplay/Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Screens/Gameplay/Components/Energy/EnergyPurchaseWindow';
import SettingsWindow from 'Screens/Gameplay/Components/Settings/SettingsWindow';
import ActionsWindow from 'Screens/Gameplay/Components/Actions/ActionsWindow';
import CraftingWindow from 'Screens/Gameplay/Components/Crafting/CraftingWindow';
import SeenWindow from 'Screens/Gameplay/Components/Seen/SeenWindow';
import CharacterWindow from 'Screens/Gameplay/Components/Character/CharacterWindow';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(state => state.MountedComponents.CoinsPurchaseWindow);
	const isEnergyPurchaseWindowMounted = useSelector(state => state.MountedComponents.EnergyPurchaseWindow);
	const isSettingsWindowMounted = useSelector(state => state.MountedComponents.SettingsWindow);
	const isActionsWindowMounted = useSelector(state => state.MountedComponents.ActionsWindow);
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const isCharacterWindowMounted = useSelector(state => state.MountedComponents.CharacterWindow);

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
	const CraftingWindowAsVar = (
		<CraftingWindow unmountCraftingWindow={() => dispatch(unmountComponents(['CraftingWindow']))} />
	);
	const SeenWindowAsVar = <SeenWindow unmountSeenWindow={() => dispatch(unmountComponents(['SeenWindow']))} />;
	const CharacterWindowAsVar = (
		<CharacterWindow unmountCharacterWindow={() => dispatch(unmountComponents(['CharacterWindow']))} />
	);

	return (
		<div>
			{isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
			{isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
			{isSettingsWindowMounted && SettingsWindowAsVar}
			{isActionsWindowMounted && ActionsWindowAsVar}
			{isCraftingWindowMounted && CraftingWindowAsVar}
			{isSeenWindowMounted && SeenWindowAsVar}
			{isCharacterWindowMounted && CharacterWindowAsVar}
		</div>
	);
}
