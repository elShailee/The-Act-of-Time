import React, { useContext } from 'react';
import './ActionsButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { componentsTitles } from 'Texts/texts';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import ActionsTab from './ActionsTab';

export default function ActionButton() {
  const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  const isActionsTabMounted = mountedComponentsDict.secondaries.ActionsTab;

  const onActionsButtonClick = () => {
    if (isActionsTabMounted) {
      unmountComponents(['ActionsTab', 'ActionsWindow']);
    } else {
      mountComponents(['ActionsTab']);
    }
  };

  return (
    <div id="upperRightButtonsContainer">
      <GeneralButton id="actionsButton" onButtonClick={onActionsButtonClick}>
        {componentsTitles.actions}
      </GeneralButton>
      {isActionsTabMounted && <ActionsTab />}
    </div>
  );
}
