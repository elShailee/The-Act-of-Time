import palette from './palette';

export const HU = `min(calc(100vh / 18), calc(100vw / 32))`;
const calcSizeUnits = num => `calc(${num} * ${HU})`;

const theme = {
	calcSizeUnits,
	sizes: {
		border: calcSizeUnits(0.1),
		borderRadius: {
			Max: '50%',
			XXL: calcSizeUnits(0.5),
			L: calcSizeUnits(0.2),
			M: calcSizeUnits(0.1),
			S: calcSizeUnits(0.05),
		},
		padding: {
			XXL: calcSizeUnits(1),
			XL: calcSizeUnits(0.5),
			L: calcSizeUnits(0.38),
			M: calcSizeUnits(0.25),
			S: calcSizeUnits(0.15),
		},
		text: {
			XXL: calcSizeUnits(1.25),
			XL: calcSizeUnits(0.75),
			L: calcSizeUnits(0.5),
			M: calcSizeUnits(0.35),
			S: calcSizeUnits(0.3),
			XS: calcSizeUnits(0.25),
		},
		buttonsHeight: {
			L: calcSizeUnits(1),
			M: calcSizeUnits(0.75),
		},
		icons: {
			XL: calcSizeUnits(1.5),
			XS: calcSizeUnits(0.35),
		},
	},
	customStyles: {
		centerItems: `	
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
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
		noBorderShading: `
			border-color: ${palette.transparent};
		`,
	},
	colors: {
		gameplayScreen: {
			spacer: palette.blue[200],
		},
		generalButton: {
			border: palette.black[103],
		},
		generalCloseButton: {
			bg: palette.brown[830],
		},
		generalNavBar: {
			defaultBG: palette.gray[500],
		},
		generalWindow: {
			bg: palette.yellow[350],
			contentBg: palette.yellow[750],
		},
		actions: {
			button: palette.yellow[750],
			itemBg: palette.brown[910],
			tabBg: palette.brown[750],
			moreActionsButton: palette.orange[500],
		},
		coins: {
			button: palette.orange[500],
			tab: palette.brown[750],
			moreCoinsButton: palette.orange[500],
		},
		energy: {
			button: palette.blue[950],
			tab: palette.blue[550],
			dataDisplay: palette.blue[750],
			moreEnergyButton: palette.blue[950],
		},
		characterInfoBar: {
			bg: palette.red[500],
			xp: palette.blue[950],
			xpbg: palette.gray[500],
			text: palette.white[900],
		},
		disasters: {
			image: palette.purple[800],
			counter: palette.purple[800],
		},
		discovery: {
			button: palette.green[950],
			windowNavbar: palette.brown[750],
		},
		map: {
			bg: palette.blue[350],
			zoomSlider: palette.gray[500],
			compass: palette.gray[300],
		},
		seen: {
			bg: palette.blue[500],
		},
		settings: {
			button: palette.gray[500],
		},
	},
};

export default theme;
