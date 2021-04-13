import './SeenButton.css';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { useSpring, animated } from 'react-spring';

export default function SeenButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atLeastOneWindowOpen = isCraftingWindowMounted || isSeenWindowMounted;

	const moveSeenButtonDown = useSpring({
		translate: atLeastOneWindowOpen ? (30, 0) : (0, 0),
	});

	const onSeenClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents(['SeenWindow']));
		} else {
			dispatch(mountComponents(['SeenWindow']));
		}
	};
	return (
		<animated.div style={moveSeenButtonDown} className='seenButton' onClick={onSeenClick}>
			{texts.gameplay.seen.buttonTitle}
		</animated.div>
	);
}
