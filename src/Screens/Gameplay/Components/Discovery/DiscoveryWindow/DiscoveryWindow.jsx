import React, { useEffect, useMemo, useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import NavBar from './NavBar';
import styles, { UpperInterface, InventoryContainer } from './styles_window';
import CraftingInterface from './CraftingInterface';
import { DragDropContext } from 'react-beautiful-dnd';
import { renderDroppablesGrid } from 'Utils/DiscoveryUtils/dndRenderUtils';
import { generateGridDataByConfig, handleItemPlacement } from 'Utils/DiscoveryUtils/droppablesStateUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const [activeInterface, setActiveInterface] = useState('Craft');
	const [droppablesState, setDroppablesState] = useState({});

	useEffect(() => {
		const craftingInputStateData = generateGridDataByConfig(gridConfigs.craftingInputConfig, {});
		const inventoryStateData = generateGridDataByConfig(gridConfigs.inventoryConfig, {});
		setDroppablesState({ ...craftingInputStateData, ...inventoryStateData });
	}, []);

	const memoizedInventory = useMemo(
		() => renderDroppablesGrid({ gridConfig: gridConfigs.inventoryConfig, droppablesState }),
		[droppablesState],
	);

	const memoizedCrafting = useMemo(
		() => (
			<CraftingInterface
				renderInput={() => renderDroppablesGrid({ gridConfig: gridConfigs.craftingInputConfig, droppablesState })}
				renderOutput={() => renderDroppablesGrid({ gridConfig: gridConfigs.craftingOutputConfig, droppablesState })}
			/>
		),
		[droppablesState],
	);

	return (
		<DragDropContext onDragEnd={result => setDroppablesState(handleItemPlacement(result, droppablesState))}>
			<GeneralWindow
				unmountGeneralWindow={unmountDiscoveryWindow}
				position='rightSided'
				title={<NavBar setActiveInterface={setActiveInterface} />}
				contentContainerStyle={styles.WindowContentContainer}
				windowContainerStyle={styles.WindowContainer}
				closeButtonStyle={styles.CloseButton}
			>
				<UpperInterface>
					{activeInterface === 'Craft' && memoizedCrafting}
					{activeInterface === 'Harvest' && 'Harvesting Interface'}
				</UpperInterface>
				<InventoryContainer>{memoizedInventory}</InventoryContainer>
			</GeneralWindow>
		</DragDropContext>
	);
}
