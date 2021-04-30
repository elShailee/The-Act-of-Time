import './DiscoveryWindow.css';
import DiscoverWindowTitle from './DiscoveryWindowTitle';
import React from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	return (
		<GeneralWindow
			unmountGeneralWindow={unmountDiscoveryWindow}
			rightSided
			title={<DiscoverWindowTitle />}
			id='discoveryWindow'
			containerId='discoveryWindowContentContainer'
		>
			<div id='discoveryWindowContentContainer'>
				<div className='topWindowContentContainer'>
					<p></p>
				</div>
			</div>
			<div id='discoveryWindowContentContainer'>
				<div className='downWindowContentContainer'>
					<p></p>
				</div>
			</div>
		</GeneralWindow>
	);
}
