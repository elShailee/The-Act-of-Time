import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { FirstFiveActionsContext } from 'Contexts/FirstFiveActionsContext';

export default function FirstFiveActions() {
  const { firstFiveActionsContext, applyFiveActionsReorder, renderFirstFiveActions } = useContext(FirstFiveActionsContext);
  console.log(firstFiveActionsContext);
  applyFiveActionsReorder();
  renderFirstFiveActions();
  return (
    <Droppable className="FirstFiveActionsContainer" type="firstFiveActions" droppableId="FirstFiveActionsContainer">
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          idk, some content.
        </div>
      )}
    </Droppable>
  );
}
