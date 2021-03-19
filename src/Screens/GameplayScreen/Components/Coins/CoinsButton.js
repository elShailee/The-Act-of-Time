import React from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function CoinsButton() {
	const dispatch = useDispatch();
	const isCoinsTabOpen = useSelector(state => state.MountedComponents.CoinsTab);

	const onCoinsButtonClick = () => {
		if (isCoinsTabOpen) {
			dispatch(unmountComponents('CoinsTab'));
		} else {
			dispatch(mountComponents('CoinsTab'));
		}
	};

	return (
		<div id='coinsButtonContainer'>
			<GeneralButton id='coinsButton' uppercased outlined onButtonClick={onCoinsButtonClick}>
				{texts.gameplay.coins.buttonTitle}
			</GeneralButton>
			{isCoinsTabOpen && <CoinsTab />}
		</div>
	);
}
