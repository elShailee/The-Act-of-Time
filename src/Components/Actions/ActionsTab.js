import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { DragDropContext } from 'react-beautiful-dnd';
import FirstFewActions from './FirstFewActions';
import ActionsContext from 'Contexts/ActionsContext';

export default function ActionsTab() {
  return (
    <GeneralTab id="actionsTab">
      <ActionsContext>
        <DragDropContext>
          <FirstFewActions />
        </DragDropContext>
      </ActionsContext>
    </GeneralTab>
  );
}
