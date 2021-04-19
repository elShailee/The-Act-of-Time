import './CraftingButton.css';
import texts from 'texts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { animated } from 'react-spring';
import useAnimations from 'Utils/useAnimations';

export default function CraftingButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const { animateCraftingButton, animateCraftingButtonText } = useAnimations();
	const onCraftingButtonClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents('CraftingWindow'));
		} else {
			dispatch(mountComponents('CraftingWindow'));
		}
	};

	return (
		<animated.div
			style={animateCraftingButton}
			className='generalButton'
			id='craftingButton'
			onClick={onCraftingButtonClick}
		>
			<animated.div style={animateCraftingButtonText}>{texts.gameplay.crafting.buttonTitle}</animated.div>
		</animated.div>
	);
}
