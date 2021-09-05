import texts from 'texts';
import { Button } from './styles_button';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { clearPlayerChanges } from 'Redux/Slices/DiscoveryDroppables';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import useAnimations from 'Utils/useAnimations';

export default function DiscoveryButton() {
	const dispatch = useDispatch();
	const isDiscoveryWindowMounted = useSelector(isComponentMountedSelector('DiscoveryWindow'));
	const { animateDiscoveryButton } = useAnimations();

	const onDiscoveryButtonClick = () => {
		if (isDiscoveryWindowMounted) {
			dispatch(unmountComponents('DiscoveryWindow'));
			dispatch(clearPlayerChanges());
		} else {
			dispatch(mountComponents('DiscoveryWindow'));
		}
	};

	return (
		<Button style={animateDiscoveryButton} onClick={onDiscoveryButtonClick}>
			{texts.gameplay.discovery.buttonTitle}
		</Button>
	);
}
