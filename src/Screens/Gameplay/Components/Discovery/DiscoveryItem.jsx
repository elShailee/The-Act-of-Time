import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getDiscoveryImage } from 'Assets/discovery/lib';
import { ItemImage } from './styles_window';

export default function DiscoveryItem({ content, id }) {
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
		<Draggable draggableId={id} index={0}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={nonAnimatedStyle(provided.draggableProps.style, snapshot)}
				>
					{content && <ItemImage src={imageObject.image} alt='' title={imageObject.name} />}
				</div>
			)}
		</Draggable>
	);
}
