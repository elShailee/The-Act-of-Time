const HU = `calc(100vh / 18)`;
const calcHeightUnits = num => `calc(${num} * ${HU})`;

const theme = {
	HU: calcHeightUnits(1),
	calcHeightUnits,
	sizes: {
		HU,
		border: calcHeightUnits(0.1),
		b_radius: calcHeightUnits(0.1),
		padding: calcHeightUnits(0.25),
		text: {
			major: calcHeightUnits(0.4),
			minor: calcHeightUnits(0.35),
		},
	},
	componentsSizes: {
		smallIcons: `
			width: ${calcHeightUnits(0.4)};
			height: ${calcHeightUnits(0.4)};
		`,
		buttons: {
			L: calcHeightUnits(1),
			M: calcHeightUnits(0.65),
		},
	},
	centerItems: `	
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	colors: {},
};

export default theme;
