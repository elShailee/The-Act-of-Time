import React from 'react';
import './GameplayScreen.css';
import CharacterInfoBar from 'Screens/Gameplay/Components/Character/CharacterInfoBar';
import ActionsButton from 'Screens/Gameplay/Components/Actions/ActionsButton';
import EnergyButton from 'Screens/Gameplay/Components/Energy/EnergyButton';
import CoinsButton from 'Screens/Gameplay/Components/Coins/CoinsButton';
import SeenButton from 'Screens/Gameplay/Components/Seen/SeenButton';
import CraftingButton from 'Screens/Gameplay/Components/Crafting/CraftingButton';
import Map from 'Screens/Gameplay/Components/Map/Map';
import DisastersIcon from 'Screens/Gameplay/Components/Disasters/DisastersIcon';
import DisasterCounter from 'Screens/Gameplay/Components/Disasters/DisasterCounter';
import AllTheFloatingWindows from 'Screens/Gameplay/Components/AllTheFloatingWindows';

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
