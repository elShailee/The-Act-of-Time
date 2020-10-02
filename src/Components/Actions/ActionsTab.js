import React from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import ActionTabItem from './ActionTabItem';

export default function ActionsTab() {
  return (
    <GeneralTab id="actionsTab">
      <ActionTabItem />
    </GeneralTab>
  );
}
