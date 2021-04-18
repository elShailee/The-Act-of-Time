import React from 'react';
import './EnergyTab.css';
import texts from 'texts';
import EnergyIcon from 'Assets/placeholderIcon.png';
import GeneralTab from 'GeneralComponents/GeneralTab';
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
				{texts.gameplay.energy.energyTab.fullIn}
				<br />
				XX:XX:XX
			</div>

			<div className='energyInfo' id='energyAmountText'>
				XX
				{energyIcon}
			</div>

			<div className='energyInfo' id='rechargeRateText'>
				{texts.gameplay.energy.energyTab.rate}
				XX
				{energyIcon}
				{texts.gameplay.energy.energyTab.perHour}
			</div>

			<div className='generalButton' id='getMoreEnergyButton' onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</div>
		</GeneralTab>
	);
}
