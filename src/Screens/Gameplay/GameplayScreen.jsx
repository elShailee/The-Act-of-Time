import React from 'react';
import './GameplayScreen.css';
import 'GeneralComponents/GeneralButton.css';
import CharacterInfoBar from 'Screens/Gameplay/Components/Character/CharacterInfoBar';
import ActionsButton from 'Screens/Gameplay/Components/Actions/ActionsButton';
import EnergyButton from 'Screens/Gameplay/Components/Energy/EnergyButton';
import CoinsButton from 'Screens/Gameplay/Components/Coins/CoinsButton';
import SeenButton from 'Screens/Gameplay/Components/Seen/SeenButton';
import DiscoveryButton from 'Screens/Gameplay/Components/Discovery/DiscoveryButton';
import SettingsButton from 'Screens/Gameplay/Components/Settings/SettingsButton';
import Map from 'Screens/Gameplay/Components/Map/Map';
import DisastersIcon from 'Screens/Gameplay/Components/Disasters/DisastersIcon';
import DisasterCounter from 'Screens/Gameplay/Components/Disasters/DisasterCounter';
import AllTheFloatingWindows from 'Screens/Gameplay/Components/WindowsContainer';

export default function GameplayScreen() {
	return (
		<div id='gameplayScreen'>
			<CharacterInfoBar />

			<div id='upperLeftButtonsContainer'>
				<EnergyButton />
				<CoinsButton />
			</div>

			<div id='upperRightButtonsContainer'>
				<SettingsButton />
				<ActionsButton />
			</div>

			<div id='disastersContainer'>
				<DisastersIcon />
				<DisasterCounter />
			</div>

			<div id='bottomRightButtonsContainer'>
				<SeenButton />
				<DiscoveryButton />
			</div>
			<Map />
			<AllTheFloatingWindows />
		</div>
	);
}
