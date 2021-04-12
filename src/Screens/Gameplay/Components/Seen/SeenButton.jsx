import { useRef } from 'react';
import './SeenButton.css';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
//import useButtonAnimation from 'Utils/useButtonAnimation';
import { useSpring, animated } from 'react-spring';

export default function SeenButton() {
	const seenMoveRef = useRef();
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atLeastOneWindowOpen = isCraftingWindowMounted || isSeenWindowMounted;

	const moveSeenButtonDown = useSpring({
		translate: atLeastOneWindowOpen ? (30, 0) : (0, 0),
	});
	// function seenButtonShouldMoveDown() {
	// 	seenMoveRef.current.style.animation = 'move 0.5s linear';
	// }
	// function seenButtonShouldMoveUp() {
	// 	seenMoveRef.current.style.animation = 'moveBack 0.5s linear';
	// }
	// useButtonAnimation(seenButtonShouldMoveUp, seenButtonShouldMoveDown, atLeastOneWindowOpen);
	const onSeenClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents(['SeenWindow']));
		} else {
			dispatch(mountComponents(['SeenWindow']));
		}
	};
	return (
		<animated.div style={moveSeenButtonDown} className='seenButton' ref={seenMoveRef} onClick={onSeenClick}>
			{texts.gameplay.seen.buttonTitle}
		</animated.div>
	);
}
