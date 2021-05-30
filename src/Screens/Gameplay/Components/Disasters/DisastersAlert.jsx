import React from 'react';
import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';
import { Container, CounterContainer, ImageButtonWrapper, Image } from './styles';

export default function DisasterAlert() {
	const countdown = useCountdown(disastersData.triggerTime);
	return (
		<Container>
			<ImageButtonWrapper>
				<Image />
			</ImageButtonWrapper>
			<CounterContainer>{countdown}</CounterContainer>
		</Container>
	);
}
