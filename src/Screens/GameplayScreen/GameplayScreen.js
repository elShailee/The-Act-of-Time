import React from "react";
import "./GameplayScreen.css";
import "GeneralStyles/iconsStyles.css";
import CharacterInfoBar from "Components/Character/CharacterInfoBar";
import ActionsButton from "Components/Actions/ActionsButton";
import EnergyButton from "Components/Energy/EnergyButton";
import CoinsButton from "Components/Coins/CoinsButton";
import SeenButton from "Components/Seen/SeenButton";
import CraftingButton from "Components/Crafting/CraftingButton";
import SettingsButton from "Components/Settings/SettingsButton";
import Map from "Components/Map/Map";
import DisastersIcon from "Components/Disasters/DisastersIcon";
import DisasterCounter from "Components/Disasters/DisasterCounter";
import AllTheFloatingWindows from "Components/AllTheFloatingWindows/AllTheFloatingWindows";

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
