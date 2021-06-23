import palette from './palette';

export const HU = `min(calc(100vh / 18), calc(100vw / 32))`;
const calcHeightUnits = num => `calc(${num} * ${HU})`;

const theme = {
	calcHeightUnits,
	sizes: {
		border: calcHeightUnits(0.1),
		borderRadius: {
			XXL: calcHeightUnits(0.5),
			L: calcHeightUnits(0.2),
			M: calcHeightUnits(0.1),
			S: calcHeightUnits(0.05),
		},
		padding: {
			XXL: calcHeightUnits(1),
			XL: calcHeightUnits(0.5),
			L: calcHeightUnits(0.38),
			M: calcHeightUnits(0.25),
			S: calcHeightUnits(0.15),
		},
		text: {
			XXL: calcHeightUnits(1.25),
			XL: calcHeightUnits(0.75),
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
		noBorderShading: `
			border-color: ${palette.transparent};
		`,
	},
	colors: {
		generalButton: {
			border: palette.black[903],
		},
		generalCloseButton: {
			bg: palette.brown[830],
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
			tab: palette.blue[650],
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
		},
		map: {
			bg: palette.blue[300],
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
