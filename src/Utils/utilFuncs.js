import texts from 'texts';

export const isAnArray = variable => {
	return variable instanceof Object && variable instanceof Array;
};

export const isADictionary = variable => {
	return variable instanceof Object && !(variable instanceof Array);
};

export const getImageFromLib = (imgName, lib) => {
	if (lib[imgName] !== undefined) return lib[imgName];
	else {
		console.log(texts.errors.imageNotFound);
		return null;
	}
};

export const useCustomStyle = (customStyle, theme) => {
	if (customStyle !== undefined) return customStyle(theme);
};
