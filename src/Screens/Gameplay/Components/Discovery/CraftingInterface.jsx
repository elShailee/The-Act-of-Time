import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { renderDroppablesGrid } from 'Utils/dndUtils';

export default function CraftingInterface() {
	return <DragDropContext>{renderDroppablesGrid(3, 3, 'gameItemHolder')}</DragDropContext>;
}
