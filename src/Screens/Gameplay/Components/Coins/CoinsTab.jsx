import React from 'react';
import { Tab, MoreCoinsButton } from './styles';
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
		<Tab>
			{texts.gameplay.coins.coinsTab.coinsAmountPt1}
			XX
			{texts.gameplay.coins.coinsTab.coinsAmountPt2}
			<MoreCoinsButton onClick={getMoreButtonClickHandler}>{texts.gameplay.coins.coinsTab.getMore}</MoreCoinsButton>
		</Tab>
	);
}
