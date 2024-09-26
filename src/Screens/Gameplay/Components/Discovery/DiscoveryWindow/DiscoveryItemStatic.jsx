import React from 'react';
import { getDiscoveryImage, itemsLib } from 'Assets/discovery/lib';
import { ItemImage } from './styles_window';

export default function DiscoveryItemStatic({ itemIndex, isFound }) {
	const imageObject = itemIndex < Object.keys(itemsLib).length ? getDiscoveryImage(itemIndex) : null;

	return (
		<div>
			{imageObject && (
				<ItemImage src={isFound ? imageObject.image : imageObject.silhouette} title={isFound ? imageObject.name : ''} />
			)}
		</div>
	);
}
