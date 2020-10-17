import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';

export default function ActionsTabItem({ actionItem }) {
  return (
    <div className="actionsTabItem">
      {actionItem.id} in XX:XX:XX <img src={hamburgerMenuIcon} alt="" className="ActionsTabItemDraghandle" />
    </div>
  );
}
