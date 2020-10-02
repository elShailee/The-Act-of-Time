import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import { DragDropContext } from 'react-beautiful-dnd';
import FirstFiveActions from './FirstFiveActions';
import FirstFiveActionsContext from 'Contexts/FirstFiveActionsContext';

export default function ActionsTab() {
  return (
    <GeneralTab id="actionsTab">
      <FirstFiveActionsContext>
        <DragDropContext>
          <FirstFiveActions />
        </DragDropContext>
      </FirstFiveActionsContext>
    </GeneralTab>
  );
}
