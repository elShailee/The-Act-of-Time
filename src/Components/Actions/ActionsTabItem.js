import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import { Draggable } from 'react-beautiful-dnd';

export default function ActionsTabItem({ actionItem, index }) {
  return (
    <Draggable draggableId={actionItem.id} index={index}>
      {provided => (
        <div className="actionsTabItem" {...provided.draggableProps} ref={provided.innerRef}>
          <img
            src={hamburgerMenuIcon}
            alt=""
            className="actionsTabItemDraghandle smallIcons"
            {...provided.dragHandleProps}
          />
          {actionItem.id} in {actionItem.eta}
        </div>
      )}
    </Draggable>
  );
}
