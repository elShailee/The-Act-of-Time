import React, { useContext } from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { actionsTabTexts } from 'Texts/gameplayTexts';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import { useDispatch } from 'react-redux';
import { unmountComponents } from 'Redux/Slices/MountedComponents';

export default function ActionsTab() {
	const { mountComponents } = useContext(MountedComponentsContext);
	const dispatch = useDispatch();

	const onActionsButtonClick = () => {
		dispatch(unmountComponents(['ActionsTab']));
		mountComponents('ActionsWindow');
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
