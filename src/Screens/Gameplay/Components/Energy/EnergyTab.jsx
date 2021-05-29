import React from 'react';
import { Tab, TimeUntillFullText, EnergyAmountText, RechargeRateText, MoreEnergyButton, EnergyIcon } from './styles';
import texts from 'texts';
import { useDispatch } from 'react-redux';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';

export default function EnergyTab() {
	const dispatch = useDispatch();
	const getMoreButtonClickHandler = () => {
		dispatch(mountComponents('EnergyPurchaseWindow'));
		dispatch(unmountComponents('EnergyTab'));
	};

	return (
		<Tab>
			<TimeUntillFullText>
				{texts.gameplay.energy.energyTab.fullIn}
				<br />
				XX:XX:XX
			</TimeUntillFullText>

			<EnergyAmountText>
				XX
				<EnergyIcon />
			</EnergyAmountText>

			<RechargeRateText>
				{texts.gameplay.energy.energyTab.rate}
				XX
				<EnergyIcon />
				{texts.gameplay.energy.energyTab.perHour}
			</RechargeRateText>

			<MoreEnergyButton onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</MoreEnergyButton>
		</Tab>
	);
}
