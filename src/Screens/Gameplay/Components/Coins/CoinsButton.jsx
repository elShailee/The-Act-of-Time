import React from 'react';
import CoinsTab from './CoinsTab';
import './CoinsButton.css';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function CoinsButton() {
	const dispatch = useDispatch();
	const isCoinsTabOpen = useSelector(isComponentMountedSelector('CoinsTab'));

	const onCoinsButtonClick = () => {
		if (isCoinsTabOpen) {
			dispatch(unmountComponents('CoinsTab'));
		} else {
			dispatch(mountComponents('CoinsTab'));
		}
	};

	return (
		<div id='coinsButtonContainer'>
			<div className='generalButton' id='coinsButton' onClick={onCoinsButtonClick}>
				{texts.gameplay.coins.buttonTitle}
			</div>
			{isCoinsTabOpen && <CoinsTab />}
		</div>
	);
}
