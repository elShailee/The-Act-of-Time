import React from 'react';
import { getImageFromLib } from 'Utils/utilFuncs';
import disasterImage from 'Assets/disasters/wolves.png';
import disastersData from 'ExampleData/disastersExampleData';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';
import './DisastersAlert.css';

export default function DisasterAlert() {
	const countdown = useCountdown(disastersData.triggerTime);
	return (
		<div id='DisastersAlert'>
			<img alt='disaster' className='disasterImage' src={getImageFromLib(disastersData.image, lib)} />
			<div className='disasterCounter'>{countdown}</div>
		</div>
	);
}

const lib = {
	wolves: {
		asset: disasterImage,
	},
};
