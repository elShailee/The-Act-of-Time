import React from 'react';
import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function Countdown() {
	const countdown = useCountdown(disastersData.triggerTime);
	return <div>{countdown}</div>;
}
