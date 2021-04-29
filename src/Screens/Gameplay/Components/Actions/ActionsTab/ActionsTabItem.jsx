import React from 'react';
import { TabItem, DragHandle, AbortButton } from './styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function ActionsTabItem({ actionItem, index }) {
	const countdown = useCountdown(actionItem.endingTime);

	return (
		<Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
			{provided => (
				<TabItem {...provided.draggableProps} ref={provided.innerRef}>
					<DragHandle src={hamburgerMenuIcon} alt='three lines to show you can select it' {...provided.dragHandleProps} />
					<div>{actionItem.title}</div>
					{' - '}
					<div>{countdown}</div>
					<AbortButton src={xIcon} onClick={() => console.log('action abort triggered at an actionTabItem')} />
				</TabItem>
			)}
		</Draggable>
	);
}
