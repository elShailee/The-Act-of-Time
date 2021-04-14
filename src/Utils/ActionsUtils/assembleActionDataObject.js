import actionsLibrary from 'ExampleData/actionsLibraryExampleData';

export default function assembleActionDataObject(activeActionsArray, actionIndex) {
	const actionItemInDB = activeActionsArray[actionIndex];
	const lib = actionsLibrary;
	const actionItemInLib = { ...lib[actionItemInDB.actionType] };
	const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
	return fullActionItem;
}
