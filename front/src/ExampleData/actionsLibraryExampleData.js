const actionsLibraryExampleData = {
  walk: {
    title: 'Walking',
    description: 'the journey might be rough, make sure to have decent supply!',
    isDurationDynamic: true /*should decide on this specific one.*/,
  },
  harvest: {
    title: 'Harverting',
    description: 'Should be straightforward, but who know what might happen?',
    isDurationDynamic: true,
  },
  milk: {
    title: 'Using Milker on Cows',
    description: "I wonder what that'll do...",
    isDurationDynamic: false,
  },
  sleep: {
    title: 'Sleeping',
    description: 'You sure deserve it, just make sure to reach safety first.',
    isDurationDynamic: true,
  },
  buildCampfire: {
    title: 'Building Campfire',
    description: 'Some call flames a double-edged blade, keep that in mind.',
    isDurationDynamic: false,
  },
  digCave: {
    title: 'Digging a Cave',
    description: 'Tools makes all the difference.',
    isDurationDynamic: false,
  },
  setBearTrap: {
    title: 'Setting  a Bear Trap',
    description: 'You never know what could happen...',
    isDurationDynamic: false,
  },
};

export default actionsLibraryExampleData;
