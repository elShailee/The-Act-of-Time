import React from 'react';
import { Container, TopLeftContainer, TopRightContainer, BotRightContainer } from './styles';
import CharacterInfoBar from 'Screens/Gameplay/Components/Character/CharacterInfoBar';
import ActionsButton from 'Screens/Gameplay/Components/Actions/ActionsButton';
import EnergyButton from 'Screens/Gameplay/Components/Energy/EnergyButton';
import CoinsButton from 'Screens/Gameplay/Components/Coins/CoinsButton';
import SeenButton from 'Screens/Gameplay/Components/Seen/SeenButton';
import DiscoveryButton from 'Screens/Gameplay/Components/Discovery/DiscoveryButton';
import SettingsButton from 'Screens/Gameplay/Components/Settings/SettingsButton';
import Map from 'Screens/Gameplay/Components/Map/Map';
import DisasterAlert from 'Screens/Gameplay/Components/Disasters/DisastersAlert';
import AllTheFloatingWindows from 'Screens/Gameplay/Components/WindowsContainer';

export default function GameplayScreen() {
	return (
		<Container>
			<Map />
			<CharacterInfoBar />

			<TopLeftContainer>
				<EnergyButton />
				<CoinsButton />
			</TopLeftContainer>

			<TopRightContainer>
				<SettingsButton />
				<ActionsButton />
			</TopRightContainer>

			<DisasterAlert />

			<BotRightContainer>
				<SeenButton />
				<DiscoveryButton />
			</BotRightContainer>
			<AllTheFloatingWindows />
		</Container>
	);
}
