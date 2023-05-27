import React from 'react';
import { getDiscoveryImage } from 'Assets/discovery/lib';
import { ItemImage } from './styles_window';
import { useSelector } from 'react-redux';
import { discoveryDroppablesSelector } from 'Redux/Selectors/DiscoveryDroppablesSelector';

export default function DiscoveryItemByState({ id }) {
	const droppablesState = useSelector(discoveryDroppablesSelector);
	const itemIndex = droppablesState?.[id]?.itemIndex;

	const imageObject = itemIndex ? getDiscoveryImage(itemIndex) : null;

	return <div>{imageObject && <ItemImage src={imageObject.image} title={imageObject.name} />}</div>;
}
