import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getDiscoveryImage } from 'Assets/discovery/lib';

export default function DiscoveryItem({ content, id }) {
	return (
		<Draggable draggableId={id} index={0}>
			{provided => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					{content && <img src={getDiscoveryImage(content)} alt='' />}
				</div>
			)}
		</Draggable>
	);
}
