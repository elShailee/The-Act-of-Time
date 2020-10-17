export default function ActionsTabExampleData() {
  const fiveActionsList = {
    actions: {
      'action-1': {
        id: 'action-1',
        title: 'Walk to a Place',
        eta: '00:14:03',
        description: 'the journey might be rough, make sure to have decent supply!',
      },
      'action-2': {
        id: 'action-2',
        title: 'Harvert for 1 Hour',
        eta: '01:14:03',
        description: 'Should be straightforward, but who know what might happen?',
      },
      'action-3': {
        id: 'action-3',
        title: 'Use Milker on Cows',
        eta: '01:34:03',
        description: "I wonder what that'll do...",
      },
      'action-4': {
        id: 'action-4',
        title: 'Take a Nap',
        eta: '03:34:03',
        description: 'You sure deserve it, just make sure to reach safety first.',
      },
      'action-5': {
        id: 'action-5',
        title: 'Build Campfire',
        eta: '04:04:03',
        description: 'Some call flames a double-edged blade, keep that in mind.',
      },
    },
    actionsOrder: ['action-1', 'action-2', 'action-3', 'action-4', 'action-5'],
  };
  return fiveActionsList;
}