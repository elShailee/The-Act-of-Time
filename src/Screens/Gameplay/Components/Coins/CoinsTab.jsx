import React from 'react';
import './CoinsTab.css';
import GeneralTab from 'GeneralComponents/GeneralTab';
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
			<div className='generalButton' id='getMoreCoinsButton' onClick={getMoreButtonClickHandler}>
				{texts.gameplay.coins.coinsTab.getMore}
			</div>
		</GeneralTab>
	);
}
