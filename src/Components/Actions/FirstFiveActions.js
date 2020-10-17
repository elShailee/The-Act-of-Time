import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ActionsContext } from 'Contexts/ActionsContext';

export default function FirstFiveActions() {
  const actionsContext = useContext(ActionsContext);
  return (
    <Droppable className="FirstFiveActionsContainer" type="firstFiveActions" droppableId="FirstFiveActionsContainer">
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          idk, some content.
          {actionsContext.renderFirstFiveActions()}
        </div>
      )}
    </Droppable>
  );
}
