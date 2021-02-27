import React, { useContext } from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { actionsTabTexts } from 'Texts/gameplayTexts';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';

export default function ActionsTab() {
  const { mountComponents, unmountComponents } = useContext(MountedComponentsContext);

  const onActionsButtonClick = () => {
      unmountComponents('ActionsTab');
      mountComponents('ActionsWindow');
  };

  return (
    <GeneralTab id="actionsTab">
      <ActionsContextProvider>
        <FirstFewActions />
        <GeneralButton id="actionsWindowBtn" uppercased outlined onButtonClick={() => onActionsButtonClick()}>{actionsTabTexts.moreOptions}</GeneralButton>
      </ActionsContextProvider>
    </GeneralTab>
  );
}
