import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import xIcon from 'Images/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';

export default function ActionsTabItem({ actionItem, index }) {
  const actionAbortButton = (
    <img
      src={xIcon}
      alt=""
      className="actionsTabItemXIcon smallIcons"
      onClick={() => console.log('action abort triggered at an actionTabItem')}
    />
  );

  const actionEndingTime = Math.floor(actionItem.endingTime / 100000);
  //actionItem.endingTime is a unix timestamp regarding it's end,
  //the division and floor are just for the large int to be small enough to fit in the screen
  //Need to create dynamic counter for this and replace it.

  return (
    <Draggable draggableId={actionItem.id} index={index}>
      {provided => (
        <div className="actionsTabItem" {...provided.draggableProps} ref={provided.innerRef}>
          <img src={hamburgerMenuIcon} alt="" className="smallIcons" {...provided.dragHandleProps} />
          <div>{actionItem.title}</div>
          {' - '}
          <div>{actionEndingTime}</div>
          {actionAbortButton}
        </div>
      )}
    </Draggable>
  );
}
