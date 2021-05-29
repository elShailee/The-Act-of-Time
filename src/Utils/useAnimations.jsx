import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';

export default function useAnimations() {
	const isDiscoveryWindowMounted = useSelector(state => state.MountedComponents.DiscoveryWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const isAtLeastOneWindowMounted = isDiscoveryWindowMounted || isSeenWindowMounted;

	const animateDiscoveryButton = useSpring({
		translateX: isAtLeastOneWindowMounted ? '4vh' : '0vh',
		translateY: isAtLeastOneWindowMounted ? '2vh' : '0vh',
		rotate: isAtLeastOneWindowMounted ? 360 : 0,
		scale: isAtLeastOneWindowMounted ? 0.6 : 1,
	});

	const animateSeenButton = useSpring({
		translateY: isAtLeastOneWindowMounted ? '5vh' : '0vh',
	});

	return { animateDiscoveryButton, animateSeenButton };
}
