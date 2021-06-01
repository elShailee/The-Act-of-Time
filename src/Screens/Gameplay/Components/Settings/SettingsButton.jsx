import React from 'react';
import { Button, Icon } from './styles';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';

export default function SettingsButton() {
	const dispatch = useDispatch();
	const isSettingsWindowMounted = useSelector(isComponentMountedSelector('SettingsWindow'));

	const onSettingsButtonClick = () => {
		if (isSettingsWindowMounted) {
			dispatch(unmountComponents('SettingsWindow'));
		} else {
			dispatch(mountComponents('SettingsWindow'));
		}
	};

	return (
		<Button onClick={onSettingsButtonClick}>
			<Icon />
		</Button>
	);
}
