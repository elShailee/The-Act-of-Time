import React, { useState, useEffect, useRef } from 'react';
import './CraftingButton.css';
import { craftingButtonTexts } from 'Texts/gameplayTexts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';

export default function CraftingButton() {
	const Animate = useRef();
	const TextAnimate = useRef();
	//const seenMove = useRef();
	function OpenWindow() {
		Animate.current.style.animation = 'rotate 2s linear';
		//seenMove.current.style.animation = 'move 2s linear';
		TextAnimate.current.style.animation = 'rotateText 2S linear';
		setTimeout(function () {
			Animate.current.classList.add('craftingButtonWhenOpen');
			Animate.current.classList.remove('craftingButton');
		}, 1990);
	}

	function CloseWindow() {
		Animate.current.style.animation = 'rotateBack 2s linear';
		//seenMove.current.style.animation = 'moveBack 2s linear';
		TextAnimate.current.style.animation = 'rotateTextBack 2S linear';
		setTimeout(function () {
			Animate.current.classList.add('craftingButton');
			Animate.current.classList.remove('craftingButtonWhenOpen');
		}, 1990);
	}
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const [lastCraftingWindowState, setLastCraftingWindowState] = useState(false);
	const [lastSeenWindowState, setLastSeenWindowState] = useState(false);
	useEffect(() => {
		if (
			isSeenWindowMounted === false &&
			isCraftingWindowMounted === false &&
			(lastCraftingWindowState === true || lastSeenWindowState === true)
		) {
			console.log(2);
			setLastCraftingWindowState(false);
			setLastSeenWindowState(false);
			CloseWindow();
		} else if (
			isSeenWindowMounted === false &&
			isCraftingWindowMounted === false &&
			lastCraftingWindowState === false &&
			lastSeenWindowState === false
		) {
		} else if (isSeenWindowMounted === false && isCraftingWindowMounted === true && lastCraftingWindowState === false) {
			console.log(3);
			setLastCraftingWindowState(true);
			OpenWindow();
		} else if (isSeenWindowMounted === true && isCraftingWindowMounted === false && lastSeenWindowState === false) {
			console.log(4);
			setLastSeenWindowState(true);
			OpenWindow();
		} else if (isSeenWindowMounted === true && isCraftingWindowMounted === false && lastCraftingWindowState === true) {
			console.log('c');
			setLastCraftingWindowState(false);
		} else {
			console.log('d');
			setLastCraftingWindowState(true);
			setLastSeenWindowState(true);
		}
	}, [isCraftingWindowMounted, isSeenWindowMounted]);
	const onCraftingClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents(['CraftingWindow']));
		} else {
			dispatch(mountComponents(['CraftingWindow']));
		}
	};
	return (
		<div className='craftingButtonDefault' ref={Animate} onClick={onCraftingClick}>
			<div ref={TextAnimate}>{craftingButtonTexts.title}</div>
		</div>
	);
}
