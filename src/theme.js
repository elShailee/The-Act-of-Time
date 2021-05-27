import palette from './palette';

const HU = `calc(100vh / 18)`;
const calcHeightUnits = num => `calc(${num} * ${HU})`;

const theme = {
	calcHeightUnits,
	sizes: {
		border: calcHeightUnits(0.1),
		borderRadius: {
			M: calcHeightUnits(0.1),
			S: calcHeightUnits(0.05),
		},
		padding: {
			L: calcHeightUnits(0.38),
			M: calcHeightUnits(0.25),
		},
		text: {
			L: calcHeightUnits(0.35),
			M: calcHeightUnits(0.3),
			S: calcHeightUnits(0.25),
		},
		buttonsHeight: {
			L: calcHeightUnits(1),
			M: calcHeightUnits(0.75),
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
	colors: {
		actionsButton: palette.yellow[300],
		actionsPale: palette.orange[200],
		actionsMid: palette.orange[600],
		actionsIntense: palette.orange[800],
		basicShade: palette.black[903],
		closeButton: palette.pink[700],
		coins: {
			button: palette.orange[800],
			tab: palette.orange[600],
			moreCoinsButton: palette.orange[800],
		},
		energy: {
			button: palette.blue[950],
			tab: palette.blue[550],
			dataDisplay: palette.blue[650],
			moreEnergyButton: palette.blue[950],
		},
		characterInfoBar: {
			bg: palette.red[800],
			xp: palette.blue[950],
			xpbg: palette.gray[800],
			text: palette.white[900],
		},
	},
};

export default theme;
