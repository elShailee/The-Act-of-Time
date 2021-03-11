import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
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
			<ActionsContextProvider>
				<FirstFewActions />
				<GeneralButton id='moreActionsBtn' uppercased outlined onButtonClick={onActionsButtonClick}>
					{actionsTabTexts.moreOptions}
				</GeneralButton>
			</ActionsContextProvider>
		</GeneralTab>
	);
}
