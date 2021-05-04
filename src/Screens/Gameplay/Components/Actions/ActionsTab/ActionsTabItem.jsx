import React from 'react';
import { TabItem, DragHandle, AbortButton } from './styles';
import { Draggable } from 'react-beautiful-dnd';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function ActionsTabItem({ actionItem, index }) {
	const countdown = useCountdown(actionItem.endingTime);

	return (
		<Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
			{provided => (
				<TabItem {...provided.draggableProps} ref={provided.innerRef} isFirst={index === 0}>
					<DragHandle {...provided.dragHandleProps} />
					<div>{actionItem.title}</div>
					{' - '}
					<div>{countdown}</div>
					<AbortButton />
				</TabItem>
			)}
		</Draggable>
	);
}
