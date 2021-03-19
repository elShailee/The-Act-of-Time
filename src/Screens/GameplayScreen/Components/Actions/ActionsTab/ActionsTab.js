import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import GeneralButton from 'Screens/GameplayScreen/Components/GeneralComponents/GeneralButton';
import { actionsTabTexts } from 'Texts/gameplayTexts';
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
				{actionsTabTexts.moreOptions}
			</GeneralButton>
		</GeneralTab>
	);
}
