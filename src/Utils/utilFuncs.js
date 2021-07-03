export const checkIfArray = variable => {
	return variable instanceof Object && variable instanceof Array;
};

export const checkIfDictionary = variable => {
	return variable instanceof Object && !(variable instanceof Array);
};
