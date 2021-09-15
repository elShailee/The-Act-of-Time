const gridConfigs = {
	craftingInputConfig: {
		name: 'craftingInputConfig',
		rows: 3,
		cols: 3,
		draggablesType: 'DiscoveryItems',
		isDragDisabled: false,
		isDropDisabled: false,
		isInventory: false,
	},
	craftingOutputConfig: {
		name: 'craftingOutputConfig',
		rows: 1,
		cols: 1,
		draggablesType: 'DiscoveryItems',
		isDragDisabled: false,
		isDropDisabled: true,
		isInventory: false,
	},
	inventoryConfig: {
		name: 'inventoryConfig',
		rows: 10,
		cols: 9,
		draggablesType: 'DiscoveryItems',
		isDragDisabled: false,
		isDropDisabled: false,
		isInventory: true,
	},
};
export default gridConfigs;
