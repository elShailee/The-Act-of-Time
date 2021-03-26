import React from 'react';
import './GameplayScreen.css';
import 'GeneralStyles/iconsStyles.css';
import CharacterInfoBar from 'Components/Character/CharacterInfoBar';
import ActionsButton from 'Components/Actions/ActionsButton';
import EnergyButton from 'Components/Energy/EnergyButton';
import CoinsButton from 'Components/Coins/CoinsButton';
import SeenButton from 'Components/Seen/SeenButton';
import CraftingButton from 'Components/Crafting/CraftingButton';
import Map from 'Components/Map/Map';
import AllTheFloatingWindows from 'Components/AllTheFloatingWindows/AllTheFloatingWindows';
import DisasterAlert from 'Components/DisasterAlert/DisastersAlert';

export default function GameplayScreen() {
	return (
		<div id='gameplayScreen'>
			<CharacterInfoBar />

			<div id='upperLeftButtonsContainer'>
				<EnergyButton />
				<CoinsButton />
			</div>

			<ActionsButton />

			<div id='disastersContainer'>
				<DisasterAlert />
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
