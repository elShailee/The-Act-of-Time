import './SeenButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
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
		translateY: atLeastOneWindowOpen ? '5vh' : '0vh',
	});

	const onSeenButtonClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents('SeenWindow'));
		} else {
			dispatch(mountComponents('SeenWindow'));
		}
	};

	return (
		<animated.div style={moveSeenButtonDown}>
			<GeneralButton id='seenButton' uppercased outlined onButtonClick={onSeenButtonClick}>
				{texts.gameplay.seen.buttonTitle}
			</GeneralButton>
		</animated.div>
	);
}
