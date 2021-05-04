import React from 'react';
import './DisastersIcon.css';
import disastersData from 'ExampleData/disastersExampleData';

export default function DisastersIcon() {
	{
		return (
			<div id='DisastersIcon'>
				<img className='disasterImage' src={disastersData.disasterImage} />
			</div>
		);
	}
}
