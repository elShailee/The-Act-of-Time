import React from 'react';
import './EnergyTab.css';
import { Tab } from './styles';
import texts from 'texts';
import EnergyIcon from 'Assets/placeholderIcon.png';
import { useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';

export default function EnergyTab() {
	const dispatch = useDispatch();
	const getMoreButtonClickHandler = () => {
		dispatch(mountComponents('EnergyPurchaseWindow'));
		dispatch(unmountComponents('EnergyTab'));
	};

	const energyIcon = <img src={EnergyIcon} alt='' className='tinyIcons' />;

	return (
		<Tab>
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

			<GeneralButton id='getMoreEnergyButton' onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</GeneralButton>
		</Tab>
	);
}
