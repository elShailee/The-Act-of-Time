import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import { useDispatch } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';

export default function ActionsTab() {
	const dispatch = useDispatch();

	const onActionsButtonClick = () => {
		dispatch(unmountComponents(['ActionsTab']));
		dispatch(mountComponents(['ActionsWindow']));
	};

	return (
		<GeneralTab id='actionsTab'>
			<FirstFewActions />
			<GeneralButton id='moreActionsBtn' uppercased outlined onButtonClick={onActionsButtonClick}>
				{texts.gameplay.actions.actionsTab.moreOptions}
			</GeneralButton>
		</GeneralTab>
	);
}
