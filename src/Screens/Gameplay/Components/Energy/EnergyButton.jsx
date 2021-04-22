import React from 'react';
import EnergyTab from './EnergyTab';
import './EnergyButton.css';
import texts from 'texts';
import { useSelector, useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function EnergyButton() {
	const dispatch = useDispatch();
	const isEnergyTabMounted = useSelector(isComponentMountedSelector('EnergyTab'));

	const onEnergyButtonClick = () => {
		if (isEnergyTabMounted) {
			dispatch(unmountComponents('EnergyTab'));
		} else {
			dispatch(mountComponents('EnergyTab'));
		}
	};

	return (
		<div id='energyButtonContainer'>
			<div className='generalButton' onClick={onEnergyButtonClick} id='energyButton'>
				{texts.gameplay.energy.buttonTitle}
			</div>
			{isEnergyTabMounted && <EnergyTab />}
		</div>
	);
}
