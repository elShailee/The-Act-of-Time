import './CraftingButton.css';
import GeneralButton from 'GeneralComponents/GeneralButton';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { useSpring, animated } from 'react-spring';

export default function CraftingButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atLeastOneWindowOpen = isCraftingWindowMounted || isSeenWindowMounted;

	const animateCraftingButton = useSpring({
		translateX: atLeastOneWindowOpen ? '2vw' : '0vw',
		translateY: atLeastOneWindowOpen ? '2vh' : '0vh',
		rotate: atLeastOneWindowOpen ? 360 : 0,
		scale: atLeastOneWindowOpen ? 0.6 : 1,
	});
	const animateCraftingButtonText = useSpring({
		scale: atLeastOneWindowOpen ? 1.667 : 1,
	});

	const onCraftingButtonClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents('CraftingWindow'));
		} else {
			dispatch(mountComponents('CraftingWindow'));
		}
	};

	return (
		<animated.div style={animateCraftingButton}>
			<GeneralButton id='craftingButton' uppercased outlined onButtonClick={onCraftingButtonClick}>
				<div style={animateCraftingButtonText}>{texts.gameplay.crafting.buttonTitle}</div>
			</GeneralButton>
		</animated.div>
	);
}
