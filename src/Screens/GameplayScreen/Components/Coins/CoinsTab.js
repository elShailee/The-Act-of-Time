import React from 'react';
import './CoinsTab.css';
import GeneralButton from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralButton';
import GeneralTab from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralTab';
import texts from 'texts';
import { useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';

export default function CoinsTab() {
	const dispatch = useDispatch();
	const getMoreButtonClickHandler = () => {
		dispatch(mountComponents('CoinsPurchaseWindow'));
		dispatch(unmountComponents('CoinsTab'));
	};

	return (
		<GeneralTab id='coinsTab'>
			{texts.gameplay.coins.coinsTab.coinsAmountPt1}
			XX
			{texts.gameplay.coins.coinsTab.coinsAmountPt2}
			<GeneralButton id='getMoreCoinsButton' onButtonClick={getMoreButtonClickHandler}>
				{texts.gameplay.coins.coinsTab.getMore}
			</GeneralButton>
		</GeneralTab>
	);
}
