import React from 'react';
import './CraftingButton.css';
import texts from 'texts';
import { mountComponents, unmountComponents } from 'Redux/Slices/MountedComponents';
import { useDispatch, useSelector } from 'react-redux';

export default function CraftingButton() {
	const dispatch = useDispatch();
	const isCraftingWindowMounted = useSelector(state => state.MountedComponents.CraftingWindow);

	const onCraftingButtonClick = () => {
		if (isCraftingWindowMounted) {
			dispatch(unmountComponents('CraftingWindow'));
		} else {
			dispatch(mountComponents('CraftingWindow'));
		}
	};

	return (
		<div className='generalButton' id='craftingButton' onClick={onCraftingButtonClick}>
			{texts.gameplay.crafting.buttonTitle}
		</div>
	);
}
