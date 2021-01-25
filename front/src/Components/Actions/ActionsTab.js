import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';

export default function ActionsTab() {
  return (
    <GeneralTab id="actionsTab">
      <ActionsContextProvider>
        <FirstFewActions />
      </ActionsContextProvider>
    </GeneralTab>
  );
}
