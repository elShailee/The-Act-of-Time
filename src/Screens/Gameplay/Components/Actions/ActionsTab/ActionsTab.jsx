import React from 'react';
import { MoreActionsButton, Tab } from './styles';
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
		<Tab>
			<FirstFewActions />
			<MoreActionsButton onClick={onActionsButtonClick}>{texts.gameplay.actions.actionsTab.moreOptions}</MoreActionsButton>
		</Tab>
	);
}
