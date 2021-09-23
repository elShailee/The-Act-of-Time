export const isAnArray = variable => {
	return variable instanceof Object && variable instanceof Array;
};

export const isADictionary = variable => {
	return variable instanceof Object && !(variable instanceof Array);
};

export const resetScrollPositionOnRefresh = () => {
	window.history.scrollRestoration = 'manual';
};
