import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import { getDraggableItemIndexFromActionId } from './Utils';

export default function ActionsTabItem({ actionItem }) {
  return (
    <Draggable draggableId={actionItem.id} index={getDraggableItemIndexFromActionId(actionItem.id)}>
      {provided => (
        <div className="actionsTabItem" {...provided.draggableProps} ref={provided.innerRef}>
          {actionItem.id} in {actionItem.eta}
          <img
            src={hamburgerMenuIcon}
            alt=""
            className="actionsTabItemDraghandle smallIcons"
            {...provided.dragHandleProps}
          />
        </div>
      )}
    </Draggable>
  );
}
