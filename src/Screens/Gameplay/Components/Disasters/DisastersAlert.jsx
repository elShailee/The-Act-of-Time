import React from 'react';
import { Container, CounterContainer, ImageButtonWrapper, Image } from './styles';
import Countdown from 'Screens/Gameplay/Components/Disasters/Countdown';

export default function DisasterAlert() {
	return (
		<Container>
			<ImageButtonWrapper>
				<Image />
			</ImageButtonWrapper>
			<CounterContainer>
				<Countdown />
			</CounterContainer>
		</Container>
	);
}
