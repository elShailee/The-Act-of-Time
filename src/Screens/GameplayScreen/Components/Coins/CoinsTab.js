import React from 'react';
import './CoinsTab.css';
import GeneralButton from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralButton';
import GeneralTab from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralTab';
import { coinsTabTexts } from 'Texts/gameplayTexts';
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
			{coinsTabTexts.coinsAmountPt1}
			XX
			{coinsTabTexts.coinsAmountPt2}
			<GeneralButton id='getMoreCoinsButton' onButtonClick={getMoreButtonClickHandler}>
				{coinsTabTexts.getMore}
			</GeneralButton>
		</GeneralTab>
	);
}
