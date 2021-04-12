import { useState, useEffect } from 'react';

export default function useButtonAnimation(closeWindowAnimation, openWindowAnimation, isWindowMounted) {
	const [isInStartingPos, setIsInStartingLook] = useState(true);
	const shouldButtonBeInStartPos = !isWindowMounted;
	useEffect(() => {
		if (shouldButtonBeInStartPos !== isInStartingPos) {
			if (shouldButtonBeInStartPos === true) {
				closeWindowAnimation();
			} else {
				openWindowAnimation();
			}
			setIsInStartingLook(shouldButtonBeInStartPos);
		}
	}, [shouldButtonBeInStartPos, isInStartingPos, closeWindowAnimation, openWindowAnimation]);
}
