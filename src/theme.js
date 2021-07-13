import palette from './palette';

export const HU = `min(calc(100vh / 18), calc(100vw / 32))`;
const calcSizeUnits = num => `calc(${num} * ${HU})`;

const theme = {
	calcSizeUnits,
	sizes: {
		border: {
			L: calcSizeUnits(0.1),
			S: calcSizeUnits(0.03),
		},
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
		borderShading: _theme => `
			border: ${_theme.sizes.border.L} solid ${_theme.colors.shading.border};
		`,
		noBorderShading: `
			border-color: ${palette.transparent};
		`,
	},
	colors: {
		transparent: palette.transparent,
		shading: {
			border: palette.black[103],
		},
		gameplayScreen: {
			spacer: palette.blue[200],
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
			button: palette.green[680],
			window: {
				borders: palette.green[350],
				closeButton: palette.green[910],
				container: palette.green[680],
				contentContainer: palette.green[910],
				navBar: palette.green[850],
				pressedNavButton: palette.green[910],
				navSpacer: palette.green[350],
				spacer: palette.green[350],
			},
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
		focusedMap: {
			border: palette.blue[200],
		},
	},
};

export default theme;
