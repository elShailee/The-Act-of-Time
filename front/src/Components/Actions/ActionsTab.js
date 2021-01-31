import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';

export default function ActionsTab() {
  return (
    <GeneralTab id="actionsTab">
      <FirstFewActions />
    </GeneralTab>
  );
}
