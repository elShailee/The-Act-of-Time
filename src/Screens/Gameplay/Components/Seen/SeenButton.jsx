import { Button } from './styles';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import { animated } from 'react-spring';
import useAnimtions from 'Utils/useAnimations';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));
	const { animateSeenButton } = useAnimtions();

	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	const AnimatedButton = animated(Button);

	return (
		<AnimatedButton style={animateSeenButton} id='seenButton' onClick={onSeenButtonClick}>
			{texts.gameplay.seen.buttonTitle}
		</AnimatedButton>
	);
}
