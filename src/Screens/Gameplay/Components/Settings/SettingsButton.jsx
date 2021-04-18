import React from 'react';
import './SettingsButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import SettingsIcon from 'Assets/settingsIcon.png';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import isComponentMountedSelector from 'Redux/Selectors/MountedComponentsSelectors';

export default function SettingsButton() {
	const dispatch = useDispatch();
	const isSettingsWindowOpen = useSelector(isComponentMountedSelector('SettingsWindow'));

	const onSettingsButtonClick = () => {
		if (isSettingsWindowOpen) {
			dispatch(unmountComponents('SettingsWindow'));
		} else {
			dispatch(mountComponents('SettingsWindow'));
		}
	};

	const settingsIcon = <img src={SettingsIcon} alt='' id='settingsButtonIcon' />;

	return (
		<div id='settingsButtonContainer'>
			<GeneralButton id='settingsButton' outlined onButtonClick={onSettingsButtonClick}>
				{settingsIcon}
			</GeneralButton>
		</div>
	);
}
