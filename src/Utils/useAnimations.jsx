import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';

export default function useAnimations() {
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atLeastOneWindowMounted = isCraftingWindowMounted || isSeenWindowMounted;

	const animateCraftingButton = useSpring({
		translateX: atLeastOneWindowMounted ? '4vh' : '0vh',
		translateY: atLeastOneWindowMounted ? '2vh' : '0vh',
		rotate: atLeastOneWindowMounted ? 360 : 0,
		scale: atLeastOneWindowMounted ? 0.6 : 1,
	});
	const animateCraftingButtonText = useSpring({
		scale: atLeastOneWindowMounted ? 1.25 : 1,
	});
	const animateSeenButton = useSpring({
		translateY: atLeastOneWindowMounted ? '5vh' : '0vh',
	});
	return { animateCraftingButton, animateCraftingButtonText, animateSeenButton };
}
