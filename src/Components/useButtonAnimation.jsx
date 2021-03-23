import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function useButtonAnimation(CraftingButtonAnimationBigger, CraftingButtonAnimationSmaller) {
	const [isButtonBig, setIsButtonBig] = useState(true);
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);
	const isSeenWindowMounted = useSelector(state => state.MountedComponents.SeenWindow);
	const shouldButtonBeBig = !isCraftingWindowMounted && !isSeenWindowMounted;
	useEffect(() => {
		if (shouldButtonBeBig !== isButtonBig) {
			if (shouldButtonBeBig === true) {
				CraftingButtonAnimationBigger();
			} else {
				CraftingButtonAnimationSmaller();
			}
			setIsButtonBig(shouldButtonBeBig);
		}
	}, [shouldButtonBeBig, isButtonBig, CraftingButtonAnimationBigger, CraftingButtonAnimationSmaller]);
}
