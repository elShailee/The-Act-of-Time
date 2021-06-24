import React from 'react';
import EnergyTab from './EnergyTab';
import texts from 'texts';
import { Button } from './styles';
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
		<div>
			<Button onClick={onEnergyButtonClick}>{texts.gameplay.energy.buttonTitle}</Button>
			{isEnergyTabMounted && <EnergyTab />}
		</div>
	);
}
