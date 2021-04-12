//import { useRef } from 'react';
import './CraftingButton.css';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { useSpring, animated } from 'react-spring';

export default function CraftingButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atLeastOneWindowOpen = isCraftingWindowMounted || isSeenWindowMounted;

	const minimizeCraftingButton = useSpring({
		translate: atLeastOneWindowOpen ? (30, 30) : (0, 0),
		rotate: atLeastOneWindowOpen ? 360 : 0,
		scale: atLeastOneWindowOpen ? 0.6 : 1,
	});
	const enlargeCraftingButtonText = useSpring({
		scale: atLeastOneWindowOpen ? 1.667 : 1,
	});

	const onCraftingClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents(['CraftingWindow']));
		} else {
			dispatch(mountComponents(['CraftingWindow']));
		}
	};
	return (
		<animated.div style={minimizeCraftingButton} className='craftingButtonDefault' onClick={onCraftingClick}>
			<animated.div style={enlargeCraftingButtonText}>{texts.gameplay.crafting.buttonTitle}</animated.div>
		</animated.div>
	);
}
