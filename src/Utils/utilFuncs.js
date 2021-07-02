import texts from 'texts';

export function isAnArray(variable) {
	return variable instanceof Object && variable instanceof Array;
}

export function isADictionary(variable) {
	return variable instanceof Object && !(variable instanceof Array);
}

export function getImageFromLib(imgName, lib) {
	if (lib[imgName] !== undefined) return lib[imgName];
	else {
		console.log(texts.errors.imageNotFound);
		return null;
	}
}
