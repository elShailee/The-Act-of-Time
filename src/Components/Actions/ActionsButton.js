import React, { useContext } from 'react';
import './ActionsButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { actionsButtonTexts } from 'Texts/gameplayTexts';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import ActionsTab from './ActionsTab';
import {useDispatch, useSelector} from 'react-redux'
import { unmountComponents,mountComponents } from 'Redux/Slices/MountedComponents';
export default function ActionButton() {
  //const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);
  //const isActionsTabMounted = mountedComponentsDict.ActionsTab;
  const dispatch = useDispatch();
  const isActionsTabMounted = useSelector(state => state.MountedComponents.ActionsTab)
  
  const onActionsButtonClick = () => {
    if (isActionsTabMounted) {
      dispatch(unmountComponents(['ActionsTab']));
    } else {
      dispatch(mountComponents(['ActionsTab']))
    }
  };

  return (
    <div id="actionsButtonAndTabContainer">
      <GeneralButton id="actionsButton" uppercased outlined onButtonClick={onActionsButtonClick}>
        {actionsButtonTexts.title}
      </GeneralButton>
      {isActionsTabMounted && <ActionsTab />}
    </div>
  );
}
