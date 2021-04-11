import actionsLibrary from 'ExampleData/actionsLibraryExampleData';

export default function assembleActionDataObject(activeActions, actionIndex) {
	const actionItemInDB = activeActions[actionIndex];
	const lib = actionsLibrary;
	const actionItemInLib = { ...lib[actionItemInDB.actionType] };
	const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
	return fullActionItem;
}
