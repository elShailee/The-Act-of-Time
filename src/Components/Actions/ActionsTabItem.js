import React from 'react';
import './ActionsTabItem.css';
import hamburgerMenuIcon from 'Images/hamburgerMenuIcon.png';

export default function ActionsTabItem() {
  return (
    <div className="actionsTabItem">
      Banana in XX:XX:XX <img src={hamburgerMenuIcon} alt="" class="ActionsTabItemDraghandle" />
    </div>
  );
}
