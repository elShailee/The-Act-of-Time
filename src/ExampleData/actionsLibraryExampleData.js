const actionsLibraryExampleData = {
  walk: {
    title: 'Walk to a Place',
    description: 'the journey might be rough, make sure to have decent supply!',
    isDurationDynamic: true /*should decide on this specific one.*/,
  },
  harvest: {
    title: 'Harvert for 1 Hour',
    description: 'Should be straightforward, but who know what might happen?',
    isDurationDynamic: true,
  },
  milk: {
    title: 'Use Milker on Cows',
    description: "I wonder what that'll do...",
    isDurationDynamic: false,
  },
  sleep: {
    title: 'Take a Nap',
    description: 'You sure deserve it, just make sure to reach safety first.',
    isDurationDynamic: true,
  },
  buildCampfire: {
    title: 'Build Campfire',
    description: 'Some call flames a double-edged blade, keep that in mind.',
    isDurationDynamic: false,
  },
  digCave: {
    title: 'Dig a Cave',
    description: 'Tools makes all the difference.',
    isDurationDynamic: false,
  },
  setBearTrap: {
    title: 'Set a Bear Trap',
    description: 'You never know what could happen...',
    isDurationDynamic: false,
  },
};

export default actionsLibraryExampleData;
