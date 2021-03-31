import React, { useRef } from 'react';
import './SeenButton.css';
import { seenButtonTexts } from 'Texts/gameplayTexts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';
import useButtonAnimation from 'Components/useButtonAnimation';

export default function SeenButton() {
	const seenMoveRef = useRef();
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);

	function seenButtonShouldMoveDown() {
		seenMoveRef.current.style.animation = 'move 2s linear';
	}
	function seenButtonShouldMoveUp() {
		seenMoveRef.current.style.animation = 'moveBack 2s linear';
	}
	useButtonAnimation(seenButtonShouldMoveUp, seenButtonShouldMoveDown, isSeenWindowMounted, isCraftingWindowMounted);
	const onSeenClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents(['SeenWindow']));
		} else {
			dispatch(mountComponents(['SeenWindow']));
		}
	};
	return (
		<div id='seenButton' ref={seenMoveRef} onClick={onSeenClick}>
			{seenButtonTexts.title}
		</div>
	);
}
