import React from "react";
import "./ActionsTabItem.css";
import hamburgerMenuIcon from "Images/hamburgerMenuIcon.png";
import xIcon from "Images/xIcon.png";
import { Draggable } from "react-beautiful-dnd";
import Countdown from "../../Utils/GeneralComponents/Countdown";

export default function ActionsTabItem({ actionItem, index }) {
  const duration = Countdown(actionItem.startingTime, actionItem.endingTime);

  const actionAbortButton = (
    <img
      src={xIcon}
      alt=""
      className="actionsTabItemXIcon smallIcons"
      onClick={() => console.log("action abort triggered at an actionTabItem")}
    />
  );

  return (
    <Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
      {(provided) => (
        <div
          className="actionsTabItem"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <img
            src={hamburgerMenuIcon}
            alt=""
            className="smallIcons"
            {...provided.dragHandleProps}
          />
          <div>{actionItem.title}</div>
          {" - "}
          {duration}
          {actionAbortButton}
        </div>
      )}
    </Draggable>
  );
}
