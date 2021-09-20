import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getDiscoveryImage } from 'Assets/discovery/lib';
import { ItemImage } from './styles_window';
import characterData from 'ExampleData/characterInfoExampleData';
import { useSelector } from 'react-redux';
import { discoveryDroppablesSelector } from 'Redux/Selectors/DiscoveryDroppablesSelector';

export default function DiscoveryItem({ id, isDragDisabled }) {
	const droppablesState = useSelector(discoveryDroppablesSelector);
	const itemInState = droppablesState[id] ? droppablesState[id] : null;
	const itemIndex = itemInState ? itemInState.itemIndex : null;

	//create a custom style to avoid dropping animation from react-beautiful-dnd.
	const nonAnimatedStyle = (style, snapshot) => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			// cannot be exactly 0, due to react-beautiful-dnd's mechanics
			transitionDuration: `0.001s`,
		};
	};

	const imageObject = itemIndex ? getDiscoveryImage(itemIndex) : null;

	const itemIndexInCharacterData = characterData.discoveredItems.find(item => item === itemIndex);
	const isFound = itemIndexInCharacterData === itemIndex;

	return (
		<Draggable draggableId={id} index={0} isDragDisabled={!isFound || isDragDisabled}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={nonAnimatedStyle(provided.draggableProps.style, snapshot)}
				>
					{imageObject && (
						<ItemImage src={isFound ? imageObject.image : imageObject.silhouette} title={isFound ? imageObject.name : ''} />
					)}
				</div>
			)}
		</Draggable>
	);
}