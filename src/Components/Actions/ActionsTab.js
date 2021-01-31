import React, { useContext, useEffect } from 'react';
import './ActionsTab.css';
import GeneralTab from 'Components/GeneralComponents/GeneralTab';
import FirstFewActions from './FirstFewActions';
import ActionsContextProvider from 'Contexts/ActionsContext';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { actionsButtonTexts } from 'Texts/gameplayTexts';
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
        <GeneralButton id="MoreActionsBtn" uppercased outlined onButtonClick={() => onActionsButtonClick()}>{actionsButtonTexts.moreActions}</GeneralButton>
      </ActionsContextProvider>
    
    </GeneralTab>
    
  );
}
