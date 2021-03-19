import React from 'react';
import SeenWindow from './SeenWindow';
import './SeenButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { seenButtonTexts } from 'Texts/gameplayTexts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowOpen = useSelector(state => state.MountedComponents.SeenWindow);

	const onSeenButtonClick = () => {
		if (isSeenWindowOpen) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<div id='seenButtonContainer'>
			<GeneralButton id='seenButton' uppercased outlined onButtonClick={onSeenButtonClick}>
				{seenButtonTexts.title}
			</GeneralButton>
			{isSeenWindowOpen && <SeenWindow />}
		</div>
	);
}
