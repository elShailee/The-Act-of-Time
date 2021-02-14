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

  const onActionsButtonClick = () => {
    if (isActionsTabMounted) {
      unmountComponents(["ActionsTab"]);
    } else {
      mountComponents(["ActionsTab"]);
    }
  };

  return (
    <div id="actionsButtonAndTabContainer">
      <GeneralButton
        id="actionsButton"
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
