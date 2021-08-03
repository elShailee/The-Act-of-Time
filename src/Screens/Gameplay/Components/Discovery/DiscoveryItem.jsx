import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function DiscoveryItem({ content, id }) {
	return (
		<Draggable draggableId={id} index={0}>
			{provided => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					{content && content * 100}
				</div>
			)}
		</Draggable>
	);
}
