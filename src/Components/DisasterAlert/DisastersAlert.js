import React from 'react';
import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';
import './DisastersAlert.css';
export default function DisasterAlert() {
	const countdown = useCountdown(disastersData.triggerTime);
	{
		return (
			<div id='DisastersAlert'>
				<div id='DisastersIcon'>
					<img alt='disaster image' className='disasterImage' src={disastersData.disasterImage} />
				</div>
				<div id='disasterCounter'>{countdown}</div>
			</div>
		);
	}
}
