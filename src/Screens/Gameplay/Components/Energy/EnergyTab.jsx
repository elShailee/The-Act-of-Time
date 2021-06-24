import React from 'react';
import { Tab, TimeUntillFull, Amount, RechargeRate, MoreEnergyButton, EnergyIcon } from './styles';
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
			<TimeUntillFull>
				{texts.gameplay.energy.energyTab.fullIn}
				<br />
				XX:XX:XX
			</TimeUntillFull>

			<Amount>
				XX
				<EnergyIcon />
			</Amount>

			<RechargeRate>
				{texts.gameplay.energy.energyTab.rate}
				XX
				<EnergyIcon />
				{texts.gameplay.energy.energyTab.perHour}
			</RechargeRate>

			<MoreEnergyButton onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</MoreEnergyButton>
		</Tab>
	);
}
