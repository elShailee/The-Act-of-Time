import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';

export default function useAnimations() {
	const isDiscoveryWindowMounted = useSelector(state => state.MountedComponents.DiscoveryWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const isAtLeastOneWindowMounted = isDiscoveryWindowMounted || isSeenWindowMounted;

	const animateDiscoveryButton = useSpring({
		translateX: isAtLeastOneWindowMounted ? '30%' : '0%',
		translateY: isAtLeastOneWindowMounted ? '20%' : '0%',
		rotate: isAtLeastOneWindowMounted ? 360 : 0,
		scale: isAtLeastOneWindowMounted ? 0.6 : 1,
	});

	const animateSeenButton = useSpring({
		translateY: isAtLeastOneWindowMounted ? '66.666%' : '0%',
	});

	return { animateDiscoveryButton, animateSeenButton };
}
