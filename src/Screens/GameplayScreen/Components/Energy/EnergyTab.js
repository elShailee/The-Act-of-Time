import React from 'react';
import './EnergyTab.css';
import GeneralButton from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralButton';
import { energyTabTexts } from 'Texts/gameplayTexts';
import EnergyIcon from 'Assets/placeholderIcon.png';
import GeneralTab from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralTab';
import { useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';

export default function EnergyTab() {
	const dispatch = useDispatch();
	const getMoreButtonClickHandler = () => {
		dispatch(mountComponents('EnergyPurchaseWindow'));
		dispatch(unmountComponents('EnergyTab'));
	};

	const energyIcon = <img src={EnergyIcon} alt='' className='tinyIcons' />;

	return (
		<GeneralTab id='energyTab'>
			<div className='energyInfo' id='timeUntillFullText'>
				{energyTabTexts.fullIn}
				<br />
				XX:XX:XX
			</div>

			<div className='energyInfo' id='energyAmountText'>
				XX
				{energyIcon}
			</div>

			<div className='energyInfo' id='rechargeRateText'>
				{energyTabTexts.rate}
				XX
				{energyIcon}
				{energyTabTexts.perHour}
			</div>

			<GeneralButton id='getMoreEnergyButton' onButtonClick={() => getMoreButtonClickHandler()}>
				{energyTabTexts.getMore}
			</GeneralButton>
		</GeneralTab>
	);
}
