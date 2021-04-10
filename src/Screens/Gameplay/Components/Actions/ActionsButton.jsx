import React from 'react';
import './ActionsButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import ActionsTab from './ActionsTab/ActionsTab';
import { useDispatch } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { GetActionsTabMounted } from 'Redux/Selectors/MountedComponentsSelectors'

export default function ActionButton() {
	const dispatch = useDispatch();
	const isActionsTabMounted = GetActionsTabMounted();

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
