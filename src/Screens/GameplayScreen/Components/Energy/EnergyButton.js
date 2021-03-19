import React from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import texts from 'texts';
import GeneralButton from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralButton';
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
				{texts.gameplay.energy.buttonTitle}
			</GeneralButton>
			{isEnergyTabOpen && <EnergyTab />}
		</div>
	);
}
