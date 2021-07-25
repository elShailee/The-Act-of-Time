import React from 'react';
import { renderDroppablesGrid } from 'Utils/dndUtils';

export default function CraftingInterface({ dndState, setDndState }) {
	const gridConfig = {
		rows: 3,
		cols: 3,
		draggablesType: 'DiscoveryItems',
		isDropDisabled: false,
		isDragDisabled: false,
		isValueFixed: false,
		isInventory: false,
	};
	const gridConfig2 = {
		rows: 2,
		cols: 2,
		draggablesType: 'DiscoveryItems',
		isDropDisabled: true,
		isDragDisabled: false,
		isValueFixed: true,
		isInventory: true,
	};

	return (
		<div>
			{renderDroppablesGrid(gridConfig, dndState, setDndState)}
			{renderDroppablesGrid(gridConfig2, dndState, setDndState)}
		</div>
	);
}
