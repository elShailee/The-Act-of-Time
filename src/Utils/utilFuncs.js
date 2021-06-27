import texts from 'texts';

export function isAnObject(variable) {
	return typeof variable === 'object';
}

export function getImageFromLib(imgName, lib) {
	if (lib[imgName] !== undefined) return lib[imgName];
	else {
		console.log(texts.errors.imageNotFound);
		return null;
	}
}
