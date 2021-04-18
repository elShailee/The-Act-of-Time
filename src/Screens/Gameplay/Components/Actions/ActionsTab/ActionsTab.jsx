import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
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
			<div className='generalButton' id='moreActionsBtn' onClick={onActionsButtonClick}>
				{texts.gameplay.actions.actionsTab.moreOptions}
			</div>
		</GeneralTab>
	);
}
