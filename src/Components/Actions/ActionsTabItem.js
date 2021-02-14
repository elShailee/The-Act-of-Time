import React, { useMemo } from "react";
import "./ActionsTabItem.css";
import hamburgerMenuIcon from "Images/hamburgerMenuIcon.png";
import xIcon from "Images/xIcon.png";
import { Draggable } from "react-beautiful-dnd";
import useCountdown from "../../Utils/GeneralComponents/useCountdown";
import moment from "moment";
export default function ActionsTabItem({ actionItem, index }) {
  const countdown = useCountdown(
    actionItem.startingTime,
    actionItem.endingTime
  );
  const duration = useMemo(() => {
    let hours = "";
    if (hours) {
      hours = moment.duration(countdown).hours();
      if (hours < 10) hours = "0" + hours;
    }
    let minutes = moment.duration(countdown).minutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = moment.duration(countdown).seconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours !== ""
      ? hours + ":" + minutes + ":" + seconds
      : minutes + ":" + seconds;
  }, [countdown]);
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
          <div>{duration}</div>
          <div>{actionAbortButton}</div>
        </div>
      )}
    </Draggable>
  );
}
