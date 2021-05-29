import texts from 'texts';
import { Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import { animated } from 'react-spring';
import useAnimations from 'Utils/useAnimations';

export default function DiscoveryButton() {
	const dispatch = useDispatch();
	const isDiscoveryWindowMounted = useSelector(isComponentMountedSelector('DiscoveryWindow'));
	const { animateDiscoveryButton, animateDiscoveryButtonText } = useAnimations();

	const onDiscoveryButtonClick = () => {
		if (isDiscoveryWindowMounted) {
			dispatch(unmountComponents('DiscoveryWindow'));
		} else {
			dispatch(mountComponents('DiscoveryWindow'));
		}
	};

	const AnimatedButton = animated(Button);

	return (
		<AnimatedButton style={animateDiscoveryButton} id='discoveryButton' onClick={onDiscoveryButtonClick}>
			<animated.div style={animateDiscoveryButtonText}>{texts.gameplay.discovery.buttonTitle}</animated.div>
		</AnimatedButton>
	);
}
