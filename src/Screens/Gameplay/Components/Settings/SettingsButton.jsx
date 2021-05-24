import React from 'react';
import './SettingsButton.css';
import SettingsIcon from 'Assets/settingsIcon.png';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';

export default function SettingsButton() {
	const dispatch = useDispatch();
	const isSettingsWindowMounted = useSelector(isComponentMountedSelector('SettingsWindow'));

	const onSettingsButtonClick = () => {
		if (isSettingsWindowMounted) {
			dispatch(unmountComponents('SettingsWindow'));
		} else {
			dispatch(mountComponents('SettingsWindow'));
		}
	};

	const settingsIcon = <img src={SettingsIcon} alt='' id='settingsButtonIcon' />;

	return (
		<div id='settingsButtonContainer'>
			<GeneralButton id='settingsButton' onClick={onSettingsButtonClick}>
				{settingsIcon}
			</GeneralButton>
		</div>
	);
}
