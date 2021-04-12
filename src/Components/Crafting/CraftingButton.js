import { useRef } from 'react';
import './CraftingButton.css';
import { craftingButtonTexts } from 'Texts/gameplayTexts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import useButtonAnimation from 'Components/useButtonAnimation';
import { useSpring, animated } from 'react-spring';

export default function CraftingButton() {
	const animateRef = useRef();
	const textAnimateRef = useRef();
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const atListOneWindowOpen = isCraftingWindowMounted || isSeenWindowMounted;

	const { craftButtonSmaller, craftTextBigger, craftButtonBigger, craftTextSmaller } = useSpring({
		craftButtonSmaller: {
			transform: 'translate(30px, 20px) rotate(360deg) scale(0.6)',
			from: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
		},
		craftTextBigger: {
			transform: 'scale(1.667)',
			from: { transform: 'scale(1)' },
		},
		craftButtonBigger: {
			transform: 'transform: translate(-30px, -20px) rotate(-360deg) scale(1.667)',
			from: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
		},
		craftTextSmaller: {
			transform: 'scale(0.6)',
			from: { transform: 'scale(1)' },
		},
	});
	function CraftingButtonAnimationMakeSmaller() {
		animateRef.current.style.animation = 'rotate 0.5S linear';
		//{ craftButtonSmaller };

		//useSpring({
		// 	transform: 'translate(30px, 20px) rotate(360deg) scale(0.6)',
		// 	from: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
		// });
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

	useButtonAnimation(CraftingButtonAnimationMakeBigger, CraftingButtonAnimationMakeSmaller, atListOneWindowOpen);
	const onCraftingClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents(['CraftingWindow']));
		} else {
			dispatch(mountComponents(['CraftingWindow']));
		}
	};
	return (
		<animated.div
			//style={!atListOneWindowOpen ? { CraftingButtonAnimationMakeBigger } : { CraftingButtonAnimationMakeSmaller }}
			className='craftingButtonDefault'
			ref={animateRef}
			onClick={onCraftingClick}
		>
			<animated.div ref={textAnimateRef}>{craftingButtonTexts.title}</animated.div>
		</animated.div>
	);
}
