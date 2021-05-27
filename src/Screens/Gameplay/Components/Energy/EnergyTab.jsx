import React from 'react';
import { Tab, TimeUntillFullText, EnergyAmountText, RechargeRateText, MoreEnergyButton } from './styles';
import texts from 'texts';
import EnergyIcon from 'Assets/placeholderIcon.png';
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
		<Tab>
			<TimeUntillFullText>
				{texts.gameplay.energy.energyTab.fullIn}
				<br />
				XX:XX:XX
			</TimeUntillFullText>

			<EnergyAmountText>
				XX
				{energyIcon}
			</EnergyAmountText>

			<RechargeRateText>
				{texts.gameplay.energy.energyTab.rate}
				XX
				{energyIcon}
				{texts.gameplay.energy.energyTab.perHour}
			</RechargeRateText>

			<MoreEnergyButton onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</MoreEnergyButton>
		</Tab>
	);
}
