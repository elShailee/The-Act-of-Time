import React, { useEffect, useState } from 'react';
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

	return (
		<DragDropContext onDragEnd={result => setDroppablesState(handleItemPlacement(result, droppablesState))}>
			<GeneralWindow
				unmountGeneralWindow={unmountDiscoveryWindow}
				position='rightSided'
				title={NavBar(setActiveInterface)}
				contentContainerStyle={styles.WindowContentContainer}
				windowContainerStyle={styles.WindowContainer}
				closeButtonStyle={styles.CloseButton}
			>
				<UpperInterface>
					{activeInterface === 'Craft' && (
						<CraftingInterface
							renderInput={() => renderDroppablesGrid(gridConfigs.craftingInputConfig, droppablesState)}
							renderOutput={() => renderDroppablesGrid(gridConfigs.craftingOutputConfig, droppablesState)}
						/>
					)}
					{activeInterface === 'Harvest' && 'Harvesting Interface'}
				</UpperInterface>
				<InventoryContainer>{renderDroppablesGrid(gridConfigs.inventoryConfig, droppablesState)}</InventoryContainer>
			</GeneralWindow>
		</DragDropContext>
	);
}
