import React from 'react';
import './ActionsButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import ActionsTab from './ActionsTab/ActionsTab';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { orderedActionsArraySelector } from 'Redux/Selectors/ActionsSelectors';

export default function ActionButton() {
	const dispatch = useDispatch();
	const isActionsTabMounted = useSelector(orderedActionsArraySelector);

	const onActionsButtonClick = () => {
		if (isActionsTabMounted) {
			dispatch(unmountComponents(['ActionsTab']));
		} else {
			dispatch(mountComponents(['ActionsTab']));
		}
	};

	return (
		<div id='actionsButtonAndTabContainer'>
			<GeneralButton id='actionsButton' uppercased outlined onButtonClick={onActionsButtonClick}>
				{texts.gameplay.actions.buttonTitle}
			</GeneralButton>
			{isActionsTabMounted && <ActionsTab />}
		</div>
	);
}
