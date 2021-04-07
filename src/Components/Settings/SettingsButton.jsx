import React from 'react';
import './SettingsButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import SettingsIcon from 'Images/settingsIcon.png';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function SettingsButton() {
	const dispatch = useDispatch();
	const isSettingsWindowOpen = useSelector(state => state.MountedComponents.SettingsWindow);

	const onSettingsButtonClick = () => {
		if (isSettingsWindowOpen) {
			dispatch(unmountComponents('SettingsWindow'));
		} else {
			dispatch(mountComponents('SettingsWindow'));
		}
	};

	const settingsIcon = <img src={SettingsIcon} alt='' className='settingButtonIcon' />;

	return (
		<div id='settingsButtonContainer'>
			<GeneralButton id='settingsButton' outlined onButtonClick={onSettingsButtonClick}>
				{settingsIcon}
			</GeneralButton>
		</div>
	);
}
