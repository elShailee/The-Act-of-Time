import texts from 'texts';

export const getImageFromLib = (imgName, lib) => {
	if (lib[imgName] !== undefined) return lib[imgName];
	else {
		console.log(texts.errors.imageNotFound);
		return null;
	}
};

export const applyCustomStyle = (customStyle, theme) => {
	if (customStyle !== undefined) return customStyle(theme);
};
