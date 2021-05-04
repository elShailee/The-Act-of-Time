import React from 'react';
import './GameplayScreen.css';
import 'GeneralComponents/GeneralButton.css';
import CharacterInfoBar from 'Screens/Gameplay/Components/Character/CharacterInfoBar';
import ActionsButton from 'Screens/Gameplay/Components/Actions/ActionsButton';
import EnergyButton from 'Screens/Gameplay/Components/Energy/EnergyButton';
import CoinsButton from 'Screens/Gameplay/Components/Coins/CoinsButton';
import SeenButton from 'Screens/Gameplay/Components/Seen/SeenButton';
import CraftingButton from 'Screens/Gameplay/Components/Crafting/CraftingButton';
import SettingsButton from 'Screens/Gameplay/Components/Settings/SettingsButton';
import Map from 'Screens/Gameplay/Components/Map/Map';
import DisasterAlert from 'Screens/Gameplay/Components/Disasters/DisastersAlert';
import AllTheFloatingWindows from 'Screens/Gameplay/Components/WindowsContainer';

export default function GameplayScreen() {
	return (
		<div id='gameplayScreen'>
			<Map />
			<CharacterInfoBar />

			<div id='upperLeftButtonsContainer'>
				<EnergyButton />
				<CoinsButton />
			</div>

			<div id='upperRightButtonsContainer'>
				<SettingsButton />
				<ActionsButton />
			</div>

			<DisasterAlert />

			<div id='bottomRightButtonsContainer'>
				<SeenButton />
				<CraftingButton />
			</div>
			<AllTheFloatingWindows />
		</div>
	);
}
