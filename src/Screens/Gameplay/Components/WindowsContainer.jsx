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
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function AllTheFloatingWindows() {
	const dispatch = useDispatch();

	const isCoinsPurchaseWindowMounted = useSelector(isComponentMountedSelector('CoinsPurchaseWindow'));
	const isEnergyPurchaseWindowMounted = useSelector(isComponentMountedSelector('EnergyPurchaseWindow'));
	const isSettingsWindowMounted = useSelector(isComponentMountedSelector('SettingsWindow'));
	const isActionsWindowMounted = useSelector(isComponentMountedSelector('ActionsWindow'));
	const isCraftingWindowMounted = useSelector(isComponentMountedSelector('CraftingWindow'));
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));
	const isCharacterWindowMounted = useSelector(isComponentMountedSelector('CharacterWindow'));

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
