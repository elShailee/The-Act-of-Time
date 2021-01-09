import React,{useEffect,useState} from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import xIcon from 'Images/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';


export default function ActionsTabItem({ actionItem, index }) {
  const [actionDuration,setActionDuration] = useState(0);
  const actionAbortButton = (
    <img
      src={xIcon}
      alt=""
      className="actionsTabItemXIcon smallIcons"
      onClick={() => console.log('action abort triggered at an actionTabItem')}
    />
  );


  // * When ending time is updated, set the format in seconds.
  useEffect(() => {
    if(typeof actionItem.endingTime === 'number' && typeof actionItem.startingTime === 'number')
    {
      let dur = moment.duration(moment(actionItem.endingTime).diff(moment(actionItem.startingTime)))
      setActionDuration(dur.asSeconds().toFixed(0));
    }
  }, [actionItem])


  // * set countdown for an action.
  useEffect(() => {

    // * if countdown get to 0, stop counting down.
    // * In this part you can call the trigger of ending an action.
    //TODO trigger updating server
    if (actionDuration<=0) return;

    // * set interval, every 1 second reduce the timer.
    const intervalDuration = setInterval(() => {
      setActionDuration(actionDuration - 1);
    }, 1000);

    // * clear the interval on cleanup.
    return () => clearInterval(intervalDuration);

  }, [actionDuration]);

  return (
    <Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
      {provided => (
        <div className="actionsTabItem" {...provided.draggableProps} ref={provided.innerRef}>
          <img src={hamburgerMenuIcon} alt="" className="smallIcons" {...provided.dragHandleProps} />
          <div>{actionItem.title}</div>
          {' - '}
          <div>{actionDuration}</div>
          {actionAbortButton}
        </div>
      )}
    </Draggable>
  );
}
