import moment from 'moment';

let activeActionsExampleData = {
	f4we65fdfs: {
		id: 'f4we65fdfs',
		actionType: 'walk',
		endLocation: { x: 100, y: 100 },
		startingTime: 654987351,
		endingTime: 654987371,
		duration: 20000000,
	},
	f6g5w1efw2b: {
		id: 'f6g5w1efw2b',
		actionType: 'harvest',
		endLocation: { x: 65, y: 41965 },
		startingTime: 674987351,
		endingTime: 694987351,
		duration: 20000000,
	},
	d5we6qf: {
		id: 'd5we6qf',
		actionType: 'milk',
		endLocation: { x: -951, y: 1 },
		startingTime: 694987351,
		endingTime: 714987351,
		duration: 20000000,
	},
	f4wq9f44q9: {
		id: 'f4wq9f44q9',
		actionType: 'sleep',
		endLocation: { x: 142, y: -9729948 },
		startingTime: 714987351,
		endingTime: 734987351,
		duration: 20000000,
	},
	fwge54g1w1e6: {
		id: 'fwge54g1w1e6',
		actionType: 'buildCampfire',
		endLocation: { x: 4851, y: -89641 },
		startingTime: 754987351,
		endingTime: 774987351,
		duration: 20000000,
	},
	gfg2grr243g: {
		id: 'gfg2grr243g',
		actionType: 'digCave',
		endLocation: { x: 342343, y: -987 },
		startingTime: 794987351,
		endingTime: 814987351,
		duration: 20000000,
	},
	f2g3r2434h54h5yh5: {
		id: 'f2g3r2434h54h5yh5',
		actionType: 'setBearTrap',
		endLocation: { x: 0, y: 0 },
		startingTime: 814987351,
		endingTime: 814987371,
		duration: 20000000,
	},
};

//! setting the time to be current time and the end time to 01:00:02 (hours:min:sec).
//! suppose to be removed.
for (let action in activeActionsExampleData) {
	activeActionsExampleData[action].startingTime = +moment();
	activeActionsExampleData[action].endingTime = +moment().add(86402, 'seconds');
}
export default activeActionsExampleData;
