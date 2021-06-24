import React from 'react';
import { Container, Button } from './styles';
import texts from 'texts';
import ActionsTab from './ActionsTab/ActionsTab';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function ActionButton() {
	const dispatch = useDispatch();
	const isActionsTabMounted = useSelector(isComponentMountedSelector('ActionsTab'));

	const onActionsButtonClick = () => {
		if (isActionsTabMounted) {
			dispatch(unmountComponents(['ActionsTab']));
		} else {
			dispatch(mountComponents(['ActionsTab']));
		}
	};

	return (
		<Container>
			<Button onClick={onActionsButtonClick}>{texts.gameplay.actions.buttonTitle}</Button>
			{isActionsTabMounted && <ActionsTab />}
		</Container>
	);
}
