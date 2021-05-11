const HU = `calc(100vh / 18)`;
const calcHeightUnits = num => `calc(${num} * ${HU})`;

const theme = {
	HU: calcHeightUnits(1),
	calcHeightUnits,
	sizes: {
		border: calcHeightUnits(0.1),
		borderRadius: calcHeightUnits(0.1),
		padding: calcHeightUnits(0.25),
		text: {
			major: calcHeightUnits(0.4),
			minor: calcHeightUnits(0.35),
		},
		buttonsHeight: {
			L: calcHeightUnits(1),
			M: calcHeightUnits(0.65),
		},
	},
	customStyles: {
		smallIconsSize: `
			width: ${calcHeightUnits(0.4)};
			height: ${calcHeightUnits(0.4)};
		`,
		centerItems: `	
			display: flex;
			align-items: center;
			justify-content: center;
		`,
		highlighted: `
			&:hover {
				filter: brightness(115%) saturate(65%);
			}
		
			&:active {
				filter: brightness(87%) saturate(100%);
			}
		`,
		nonSelectable: `
			user-select: none;
			-webkit-user-drag: none;
		`,
		clickable: `
			cursor: pointer;
		`,
	},
	colors: {},
};

export default theme;
