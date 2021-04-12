import { useState, useEffect } from 'react';

export default function useButtonAnimation(closeWindowAnimation, openWindowAnimation, isWindowMounted) {
	const [isInStartingLook, setIsInStartingLook] = useState(true);
	const shouldButtonBeInStartLook = !isWindowMounted;
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
