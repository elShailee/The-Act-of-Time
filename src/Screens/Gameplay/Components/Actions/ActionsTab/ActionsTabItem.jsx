import React from 'react';
import { TabItem, DragHandle, AbortButton } from './styles';
import { Draggable } from 'react-beautiful-dnd';
import Countdown from './Countdown';

export default function ActionsTabItem({ actionItem, index }) {
	return (
		<Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
			{provided => (
				<TabItem {...provided.draggableProps} ref={provided.innerRef} isFirst={index === 0}>
					<DragHandle {...provided.dragHandleProps} />
					<div>{actionItem.title}</div>
					{' - '}
					<div>
						<Countdown actionItem={actionItem} />
					</div>
					<AbortButton />
				</TabItem>
			)}
		</Draggable>
	);
}
