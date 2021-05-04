const sizes = {
	units: {
		height: `calc(50vh / 9)`,
		width: `3.125vw`,
	},
};

const HUnits = num => `calc(${num} * ${sizes.units.height})`;

const theme = {
	sizes: {
		...sizes,
		border: HUnits(0.06),
		b_radius: HUnits(0.1),
		padding: HUnits(0.25),
		text: {
			major: HUnits(0.3),
			minor: HUnits(0.25),
		},
	},
	componentsSizes: {
		smallIcons: `
			width: ${HUnits(0.4)};
			height: ${HUnits(0.4)};
		`,
		buttons: {
			L: HUnits(1),
			M: HUnits(0.65),
		},
	},
	centerItems: `	
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	colors: {
		borders: `rosybrown`,
	},
};

export default theme;
