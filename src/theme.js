const sizes = {
	units: {
		height: units => `calc(${units} * calc(50vh / 9))`,
		width: units => `calc(${units} * 3.125vw)`,
	},
	icons: {
		s: '19px',
	},
};

const theme = {
	sizes,
	componentsSizes: {
		smallIcons: `
			width: ${sizes.icons.s};
			height: ${sizes.icons.s};
		`,
	},
};

export default theme;
