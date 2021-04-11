import { useRef } from 'react';
import './CraftingButton.css';
import { craftingButtonTexts } from 'Texts/gameplayTexts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import useButtonAnimation from 'Components/useButtonAnimation';

export default function CraftingButton() {
	const animateRef = useRef();
	const textAnimateRef = useRef();
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);

	function CraftingButtonAnimationMakeSmaller() {
		animateRef.current.style.animation = 'rotate 0.5s linear';
		textAnimateRef.current.style.animation = 'rotateText 0.5S linear';
		setTimeout(function () {
			animateRef.current.classList.add('craftingButtonWhenOpen');
			animateRef.current.classList.remove('craftingButton');
		}, 490);
	}

	function CraftingButtonAnimationMakeBigger() {
		animateRef.current.style.animation = 'rotateBack 0.5s linear';
		textAnimateRef.current.style.animation = 'rotateTextBack 0.5S linear';
		setTimeout(function () {
			animateRef.current.classList.add('craftingButton');
			animateRef.current.classList.remove('craftingButtonWhenOpen');
		}, 490);
	}

	useButtonAnimation(
		CraftingButtonAnimationMakeBigger,
		CraftingButtonAnimationMakeSmaller,
		isCraftingWindowMounted,
		isSeenWindowMounted,
	);
	const onCraftingClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents(['CraftingWindow']));
		} else {
			dispatch(mountComponents(['CraftingWindow']));
		}
	};
	return (
		<div className='craftingButtonDefault' ref={animateRef} onClick={onCraftingClick}>
			<div ref={textAnimateRef}>{craftingButtonTexts.title}</div>
		</div>
	);
}
