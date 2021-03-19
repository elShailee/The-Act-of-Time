import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import { useCountdown } from 'Utils/TimingUtils/useCountdown';

export default function ActionsTabItem({ actionItem, index }) {
	const countdown = useCountdown(actionItem.endingTime);

	const actionAbortButton = (
		<img
			src={xIcon}
			alt=''
			className='actionsTabItemXIcon smallIcons'
			onClick={() => console.log('action abort triggered at an actionTabItem')}
		/>
	);

	return (
		<Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
			{provided => (
				<div className='actionsTabItem' {...provided.draggableProps} ref={provided.innerRef}>
					<img
						src={hamburgerMenuIcon}
						alt='three lines to show you can select it'
						className='smallIcons'
						{...provided.dragHandleProps}
					/>
					<div>{actionItem.title}</div>
					{' - '}
					<div>{countdown}</div>
					<div>{actionAbortButton}</div>
				</div>
			)}
		</Draggable>
	);
}