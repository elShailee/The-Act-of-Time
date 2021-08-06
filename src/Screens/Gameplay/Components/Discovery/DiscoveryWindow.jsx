import React, { useEffect, useState } from 'react';
import GeneralWindow from 'GeneralComponents/GeneralWindow/GeneralWindow';
import GeneralNavBar from 'GeneralComponents/GeneralNavBar/GeneralNavBar';
import styles, { UpperInterface, InventoryContainer } from './styles_window';
import CraftingInterface from './CraftingInterface';
import { DragDropContext } from 'react-beautiful-dnd';
import { applyItemPlacement, writeGridDataByConfig, renderDroppablesGrid /*deleteGridDataByConfig*/ } from 'Utils/dndUtils';

const craftingInputConfig = {
	name: 'craftingInputConfig',
	rows: 3,
	cols: 3,
	draggablesType: 'DiscoveryItems',
	isDragDisabled: false,
	isDropDisabled: false,
	isInventory: false,
};
const inventoryConfig = {
	name: 'inventoryConfig',
	rows: 2,
	cols: 2,
	draggablesType: 'DiscoveryItems',
	isDragDisabled: false,
	isDropDisabled: false,
	isInventory: true,
};

export default function DiscoveryWindow({ unmountDiscoveryWindow }) {
	const [activeInterface, setActiveInterface] = useState('Craft');
	const [droppablesState, setDroppablesState] = useState({});
	useEffect(() => {
		const res1 = writeGridDataByConfig(craftingInputConfig, {});
		const res2 = writeGridDataByConfig(inventoryConfig, {});
		setDroppablesState({ ...res1, ...res2 });
	}, []);

	const navBarButtons = [
		{
			title: 'Craft',
			func: () => setActiveInterface('Craft'),
		},
		{
			title: 'Harvest',
			func: () => setActiveInterface('Harvest'),
		},
	];

	const TabsNavBar = (
		<GeneralNavBar
			buttons={navBarButtons}
			barStyle={styles.NavBar}
			buttonStyle={styles.NavButton}
			pressedButtonStyle={styles.PressedNavButton}
			spacerStyle={styles.NavSpacer}
		/>
	);

	return (
		<DragDropContext onDragEnd={result => setDroppablesState(applyItemPlacement(result, droppablesState))}>
			<GeneralWindow
				unmountGeneralWindow={unmountDiscoveryWindow}
				position='rightSided'
				title={TabsNavBar}
				contentContainerStyle={styles.WindowContentContainer}
				windowContainerStyle={styles.WindowContainer}
				closeButtonStyle={styles.CloseButton}
			>
				<UpperInterface>
					{activeInterface === 'Craft' && (
						<CraftingInterface renderInput={() => renderDroppablesGrid(craftingInputConfig, droppablesState)} />
					)}
					{activeInterface === 'Harvest' && 'Harvesting Interface'}
				</UpperInterface>
				<InventoryContainer>{renderDroppablesGrid(inventoryConfig, droppablesState)}</InventoryContainer>
			</GeneralWindow>
		</DragDropContext>
	);
}
