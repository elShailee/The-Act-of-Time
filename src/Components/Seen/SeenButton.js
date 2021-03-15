import React, { useRef } from 'react';
import './SeenButton.css';
import { seenButtonTexts } from 'Texts/gameplayTexts';
import { useDispatch, useSelector } from 'react-redux';
import { unmountComponents, mountComponents } from 'Redux/Slices/MountedComponents';

export default function SeenButton() {
	const seenMove = useRef();
	const dispatch = useDispatch();
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const onSeenClick = () => {
		if (isSeenWindowMounted) {
			dispatch(unmountComponents(['SeenWindow']));
		} else {
			dispatch(mountComponents(['SeenWindow']));
		}
	};
	return (
		<div id='seenButton' ref={seenMove} onClick={onSeenClick}>
			{seenButtonTexts.title}
		</div>
	);
}
