import React, { useMemo } from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import xIcon from 'Images/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import {useCountdown,formmatCountdown} from 'Utils/TimingUtils/useCountdown';

export default function ActionsTabItem({ actionItem, index }) {
  const countdown = useCountdown(
    actionItem.startingTime,
    actionItem.endingTime
  );
  const duration = useMemo(() => {
    return formmatCountdown(countdown);
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
