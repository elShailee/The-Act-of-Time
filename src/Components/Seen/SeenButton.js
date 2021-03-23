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

	function sennButtonHigh() {
		seenMoveRef.current.style.animation = 'move 2s linear';
	}
	function sennButtonLow() {
		seenMoveRef.current.style.animation = 'moveBack 2s linear';
	}
	useButtonAnimation(sennButtonLow, sennButtonHigh);
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
