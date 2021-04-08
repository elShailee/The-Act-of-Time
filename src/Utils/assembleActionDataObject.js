import actionsLibrary from 'ExampleData/actionsLibraryExampleData';

export default function assembleActionDataObject(orderedActionsArray, actionIndex) {
	const actionItemInDB = orderedActionsArray[actionIndex];
	const lib = actionsLibrary;
	const actionItemInLib = { ...lib[actionItemInDB.actionType] };
	const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
	return fullActionItem;
}
