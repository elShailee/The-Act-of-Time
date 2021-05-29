import texts from 'texts';
import { Button } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import { isComponentMountedSelector } from 'Redux/Selectors/MountedComponentsSelectors';
import { animated } from 'react-spring';
import useAnimations from 'Utils/useAnimations';

export default function CraftingButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(isComponentMountedSelector('CraftingWindow'));
	const { animateCraftingButton, animateCraftingButtonText } = useAnimations();

	const onCraftingButtonClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents('CraftingWindow'));
		} else {
			dispatch(mountComponents('CraftingWindow'));
		}
	};

	const AnimatedButton = animated(Button);

	return (
		<AnimatedButton style={animateCraftingButton} id='craftingButton' onClick={onCraftingButtonClick}>
			<animated.div style={animateCraftingButtonText}>{texts.gameplay.crafting.buttonTitle}</animated.div>
		</AnimatedButton>
	);
}
