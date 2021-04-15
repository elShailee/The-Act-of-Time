import React from 'react';
import './SeenButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);

	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<div id='seenButtonContainer'>
			<GeneralButton id='seenButton' uppercased outlined onButtonClick={onSeenButtonClick}>
				{texts.gameplay.seen.buttonTitle}
			</GeneralButton>
		</div>
	);
}
