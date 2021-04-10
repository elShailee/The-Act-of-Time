import React from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import texts from 'texts';
import GeneralButton from 'GeneralComponents/GeneralButton';
import { useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { GetEnergyTabMounted } from 'Redux/Selectors/MountedComponentsSelectors';

export default function EnergyButton() {
	const dispatch = useDispatch();
	const isEnergyTabOpen = GetEnergyTabMounted();

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
				{texts.gameplay.energy.buttonTitle}
			</GeneralButton>
			{isEnergyTabOpen && <EnergyTab />}
		</div>
	);
}
