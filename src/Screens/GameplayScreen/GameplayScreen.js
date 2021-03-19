import React from 'react';
import './GameplayScreen.css';
import CharacterInfoBar from 'Screens/GameplayScreen/Components/Character/CharacterInfoBar';
import ActionsButton from 'Screens/GameplayScreen/Components/Actions/ActionsButton';
import EnergyButton from 'Screens/GameplayScreen/Components/Energy/EnergyButton';
import CoinsButton from 'Screens/GameplayScreen/Components/Coins/CoinsButton';
import SeenButton from 'Screens/GameplayScreen/Components/Seen/SeenButton';
import CraftingButton from 'Screens/GameplayScreen/Components/Crafting/CraftingButton';
import Map from 'Screens/GameplayScreen/Components/Map/Map';
import DisastersIcon from 'Screens/GameplayScreen/Components/Disasters/DisastersIcon';
import DisasterCounter from 'Screens/GameplayScreen/Components/Disasters/DisasterCounter';
import AllTheFloatingWindows from 'Screens/GameplayScreen/Components/AllTheFloatingWindows';

export default function GameplayScreen() {
	return (
		<div id='gameplayScreen'>
			<CharacterInfoBar />

			<div id='upperLeftButtonsContainer'>
				<EnergyButton />
				<CoinsButton />
			</div>

			<ActionsButton />

			<div id='disastersContainerContainer'>
				<DisastersIcon />
				<DisasterCounter />
			</div>

			<div id='bottomRightButtonsContainer'>
				<SeenButton />
				<CraftingButton />
			</div>
			<Map />
			<AllTheFloatingWindows />
		</div>
	);
}
