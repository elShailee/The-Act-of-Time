import './SeenButton.css';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { animated } from 'react-spring';
import useAnimtions from 'Utils/useAnimations';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const { animateSeenButton } = useAnimtions();
	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<animated.div style={animateSeenButton} className='generalButton' id='seenButton' onClick={onSeenButtonClick}>
			{texts.gameplay.seen.buttonTitle}
		</animated.div>
	);
}
