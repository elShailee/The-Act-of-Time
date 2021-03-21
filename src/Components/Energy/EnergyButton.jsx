import React from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import { energyButtonTexts } from 'Texts/gameplayTexts';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { useSelector, useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';

export default function EnergyButton() {
	const dispatch = useDispatch();
	const isEnergyTabOpen = useSelector(state => state.MountedComponents.EnergyTab);

	const onEnergyButtonClick = () => {
		if (isEnergyTabOpen) {
			dispatch(unmountComponents('EnergyTab'));
		} else {
			dispatch(mountComponents('EnergyTab'));
		}
	};

	return (
		<div id='energyButtonContainer'>
			<GeneralButton uppercased outlined onButtonClick={onEnergyButtonClick} id='energyButton'>
				{energyButtonTexts.title}
			</GeneralButton>
			{isEnergyTabOpen && <EnergyTab />}
		</div>
	);
}
