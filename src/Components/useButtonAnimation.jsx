import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

export default function useButtonAnimation(
	closeWindowAnimation,
	openWindowAnimation,
	isFirstWindowMounted,
	isSecondeWindowMounted,
) {
	const [isInStartingLook, setIsInStartingLook] = useState(true);
	const shouldButtonBeInStartLook = !isFirstWindowMounted && !isSecondeWindowMounted;
	useEffect(() => {
		if (shouldButtonBeInStartLook !== isInStartingLook) {
			if (shouldButtonBeInStartLook === true) {
				closeWindowAnimation();
			} else {
				openWindowAnimation();
			}
			setIsInStartingLook(shouldButtonBeInStartLook);
		}
	}, [shouldButtonBeInStartLook, isInStartingLook, closeWindowAnimation, openWindowAnimation]);
}
