import React from 'react';
import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';
import './DisastersAlert.css';

export default function DisasterAlert() {
	const countdown = useCountdown(disastersData.triggerTime);
	return (
		<div id='DisastersAlert'>
			<img alt='disaster' className='disasterImage' src={disastersData.disasterImage} />
			<div className='disasterCounter'>{countdown}</div>
		</div>
	);
}
