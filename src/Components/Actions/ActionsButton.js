<<<<<<< HEAD
import React from 'react';
import './ActionsButton.css';
import GeneralButton from 'Components/GeneralComponents/GeneralButton';
import { actionsButtonTexts } from 'Texts/gameplayTexts';
import ActionsTab from './ActionsTab';
import {useDispatch, useSelector} from 'react-redux'
import { unmountComponents,mountComponents } from 'Redux/Slices/MountedComponents';
export default function ActionButton() {
=======
import React, { useContext } from "react";
import "./ActionsButton.css";
import GeneralButton from "Components/GeneralComponents/GeneralButton";
import { actionsButtonTexts } from "Texts/gameplayTexts";
import { MountedComponentsContext } from "Contexts/MountedComponentsContext";
import ActionsTab from "./ActionsTab";

export default function ActionButton() {
  const {
    mountedComponentsDict,
    mountComponents,
    unmountComponents,
  } = useContext(MountedComponentsContext);
  const isActionsTabMounted = mountedComponentsDict.ActionsTab;
>>>>>>> feature/actions-window

  const dispatch = useDispatch();
  const isActionsTabMounted = useSelector(state => state.MountedComponents.ActionsTab)
  
  const onActionsButtonClick = () => {
    if (isActionsTabMounted) {
<<<<<<< HEAD
      dispatch(unmountComponents(['ActionsTab']));
    } else {
      dispatch(mountComponents(['ActionsTab']))
=======
      unmountComponents(["ActionsTab"]);
    } else {
      mountComponents(["ActionsTab"]);
>>>>>>> feature/actions-window
    }
  };

  return (
    <div id="actionsButtonAndTabContainer">
      <GeneralButton
        id="ActionsButton"
        uppercased
        outlined
        onButtonClick={onActionsButtonClick}
      >
        {actionsButtonTexts.title}
      </GeneralButton>
      {isActionsTabMounted && <ActionsTab />}
    </div>
  );
}
