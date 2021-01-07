import React,{useEffect,useState} from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';
import xIcon from 'Images/xIcon.png';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment';

export default function ActionsTabItem({ actionItem, index }) {
  const [actionEndingTime,setActionEndingTime] = useState('0');
  const actionAbortButton = (
    <img
      src={xIcon}
      alt=""
      className="actionsTabItemXIcon smallIcons"
      onClick={() => console.log('action abort triggered at an actionTabItem')}
    />
  );


  // When ending time is updated, set the format in seconds.
  useEffect(() => {
    if(typeof actionItem.endingTime === 'number')
    {
      setActionEndingTime(moment(actionItem.endingTime - actionItem.startingTime).format('s'));
    }
  }, [actionItem])
 

  return (
    <Draggable id={actionItem.id} draggableId={actionItem.id} index={index}>
      {provided => (
        <div className="actionsTabItem" {...provided.draggableProps} ref={provided.innerRef}>
          <img src={hamburgerMenuIcon} alt="" className="smallIcons" {...provided.dragHandleProps} />
          <div>{actionItem.title}</div>
          {' - '}
          <div>{actionEndingTime}</div>
          {actionAbortButton}
        </div>
      )}
    </Draggable>
  );
}
