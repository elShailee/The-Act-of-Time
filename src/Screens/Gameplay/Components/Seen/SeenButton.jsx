import texts from 'texts';
import { Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import useAnimations from 'Utils/useAnimations';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(isComponentMountedSelector('SeenWindow'));
	const { animateSeenButton } = useAnimations();

	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<Button style={animateSeenButton} onClick={onSeenButtonClick}>
			{texts.gameplay.seen.buttonTitle}
		</Button>
	);
}
