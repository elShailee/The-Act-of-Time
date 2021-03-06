const texts = {
	gameplay: {
		coins: {
			buttonTitle: 'Coins',
			coinsTab: {
				coinsAmountPt1: 'You have ',
				coinsAmountPt2: 'Coins.',
				getMore: 'Get More',
			},
		},
		energy: {
			buttonTitle: 'Energy',
			energyTab: {
				fullIn: 'Full Energy in:',
				rate: 'Rate: ',
				perHour: '/h',
				getMore: 'Get More',
			},
		},
		actions: {
			buttonTitle: 'Actions',
			actionsTab: {
				moreOptions: 'More Options',
			},
		},
		character: {
			characterInfo: {
				title: 'Character Info',
			},
		},
		disasters: {
			disastersIcon: {
				title: 'Disaster',
			},
		},
		discovery: {
			buttonTitle: 'D',
		},
		seen: {
			buttonTitle: 'S',
		},
		map: {
			zoomSlider: {
				title: 'ZoomSlider',
			},
			mapCompass: {
				title: 'MapCompass',
			},
		},
	},
	errors: {
		invalidBrowser:
			'This Application is not supported for this browser, please try to open it using an up-to-date version of Google Chrome, Mozilla Firefox, or Microsoft Edge.',
		invalidComponentsToMount: 'please pass a string or an array of strings to either mountComponent() or unmountComponent()',
		imageNotFound: 'No image found to match given data.',
		invalidButtonsArray:
			"GeneralNavBar Error: please make sure to pass an Array of Objects to GeneralNavBar.\nEach cell need to be an object with the keys 'title' and 'func'.",
	},
};
export default texts;
