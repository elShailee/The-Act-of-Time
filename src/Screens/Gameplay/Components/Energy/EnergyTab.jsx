import React from 'react';
import { Tab, TimeUntillFullText, Amount, RechargeRate, MoreEnergyButton, Icon } from './styles';
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

			<Amount>
				XX
				<Icon />
			</Amount>

			<RechargeRate>
				{texts.gameplay.energy.energyTab.rate}
				XX
				<Icon />
				{texts.gameplay.energy.energyTab.perHour}
			</RechargeRate>

			<MoreEnergyButton onClick={() => getMoreButtonClickHandler()}>
				{texts.gameplay.energy.energyTab.getMore}
			</MoreEnergyButton>
		</Tab>
	);
}
