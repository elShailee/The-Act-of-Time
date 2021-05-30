import palette from './palette';

const HU = `calc(100vh / 18)`;
const calcHeightUnits = num => `calc(${num} * ${HU})`;

const theme = {
	calcHeightUnits,
	sizes: {
		border: calcHeightUnits(0.1),
		borderRadius: {
			XXL: calcHeightUnits(0.5),
			M: calcHeightUnits(0.1),
			S: calcHeightUnits(0.05),
		},
		padding: {
			L: calcHeightUnits(0.38),
			M: calcHeightUnits(0.25),
		},
		text: {
			XL: calcHeightUnits(1.25),
			L: calcHeightUnits(0.35),
			M: calcHeightUnits(0.3),
			S: calcHeightUnits(0.25),
		},
		buttonsHeight: {
			L: calcHeightUnits(1),
			M: calcHeightUnits(0.75),
		},
		components: {
			smallIcons: calcHeightUnits(0.35),
			discoveryButton: calcHeightUnits(2.5),
			seenButton: calcHeightUnits(1.5),
		},
	},
	customStyles: {
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
		generalButton: {
			borderShade: palette.black[903],
		},
		generalCloseButton: {
			bg: palette.pink[700],
		},
		actions: {
			button: palette.yellow[300],
			itemBg: palette.orange[200],
			tabBg: palette.orange[600],
			moreActionsButton: palette.orange[800],
		},
		coins: {
			button: palette.orange[800],
			tab: palette.orange[600],
			moreCoinsButton: palette.orange[800],
		},
		energy: {
			button: palette.blue[950],
			tab: palette.blue[650],
			dataDisplay: palette.blue[750],
			moreEnergyButton: palette.blue[950],
		},
		characterInfoBar: {
			bg: palette.red[800],
			xp: palette.blue[950],
			xpbg: palette.gray[500],
			text: palette.white[900],
		},
		disasters: {
			image: palette.purple[950],
			counter: palette.purple[900],
		},
		discovery: {
			button: palette.green[950],
		},
		map: {
			bg: palette.blue[300],
			zoomSlider: palette.gray[500],
			compass: palette.gray[300],
		},
	},
};

export default theme;
