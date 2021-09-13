import React, { useEffect, useMemo, useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import NavBar from './NavBar';
import styles, { UpperInterface, InventoryContainer } from './styles_window';
import CraftingInterface from './CraftingInterface';
import { DragDropContext } from 'react-beautiful-dnd';
import { renderDroppablesGrid } from 'Utils/DiscoveryUtils/dndRenderUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';
import { useDispatch, useSelector } from 'react-redux';
import { initializeState, DragEndHandler, clearPlayerChanges } from 'Redux/Slices/DiscoveryDroppables';
import { discoveryDroppablesSelector } from 'Redux/Selectors/DiscoveryDroppablesSelector';

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const [activeInterface, setActiveInterface] = useState('Craft');
	const droppablesState = useSelector(discoveryDroppablesSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeState());
	}, [dispatch]);

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

	const navBar = useMemo(() => <NavBar setActiveInterface={setActiveInterface} />, [setActiveInterface]);

	return (
		<DragDropContext onDragEnd={result => dispatch(DragEndHandler(result))}>
			<GeneralWindow
				unmountGeneralWindow={unmountDiscoveryWindow}
				position='rightSided'
				title={navBar}
				contentContainerStyle={styles.WindowContentContainer}
				windowContainerStyle={styles.WindowContainer}
				closeButtonStyle={styles.CloseButton}
				onClose={() => dispatch(clearPlayerChanges())}
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
