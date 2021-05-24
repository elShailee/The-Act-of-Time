import React from 'react';
import CoinsTab from './CoinsTab';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import { Button } from './styles';

export default function CoinsButton() {
	const dispatch = useDispatch();
	const isCoinsTabMounted = useSelector(isComponentMountedSelector('CoinsTab'));

	const onCoinsButtonClick = () => {
		if (isCoinsTabMounted) {
			dispatch(unmountComponents('CoinsTab'));
		} else {
			dispatch(mountComponents('CoinsTab'));
		}
	};

	return (
		<div id='coinsButtonContainer'>
			<Button onClick={onCoinsButtonClick}>{texts.gameplay.coins.buttonTitle}</Button>
			{isCoinsTabMounted && <CoinsTab />}
		</div>
	);
}
