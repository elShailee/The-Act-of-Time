import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getDiscoveryImage } from 'Assets/discovery/lib';
import { ItemImage } from './styles_window';

export default function DiscoveryItem({ content, id, isFound }) {
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

	const imageObject = content ? getDiscoveryImage(content) : null;

	return (
		<Draggable draggableId={id} index={0} isDragDisabled={!isFound}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={nonAnimatedStyle(provided.draggableProps.style, snapshot)}
				>
					{content && imageObject && <ItemImage src={imageObject.image} alt='' title={isFound ? imageObject.name : ''} />}
				</div>
			)}
		</Draggable>
	);
}
