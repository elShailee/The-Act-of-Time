import React from 'react';
import './SeenButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));

	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<GeneralButton id='seenButton' uppercased outlined onButtonClick={onSeenButtonClick}>
			{texts.gameplay.seen.buttonTitle}
		</GeneralButton>
	);
}
