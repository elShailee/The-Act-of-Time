import characterImage from 'Images/characterImage.png';
import itemImage from 'Images/placeholderIcon.png';

const characterInfoExampleData = {
	fromDB: {
		characterName: 'Johon Do',
		characterImage,
		characterLevel: 3,
		xpAchived: 80,
		joinedDate: '15/02/2021',
		timePlayed: 33289,
		itemDiscovered: 20,
		achiementEarned: 35,
		disatsteresOcarancy: 27,
		disatsteresServived: 25,
		foodQuality: 437,
		heatTolerence: 127,
		coldTolerence: 84,
		memory: 5,
		futurePlanning: 3,
		importantItems: 3,
	},
	fromBuild: {
		numberOfItems: 350,
		numberOfAchiement: 50,
		xpRequiredToNextLevel: [20, 50, 100, 250, 600],
		itemList: [
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
			itemImage,
		],
	},
};

export default characterInfoExampleData;
