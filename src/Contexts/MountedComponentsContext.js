import React, { Component, createContext } from 'react';

export const MountedComponentsContext = createContext();

class MountedComponentsContextProvider extends Component {
  state = {
    mountedComponentsDict: {
      primaries: {
        EnergyPurchaseWindow: false,
        CoinsPurchaseWindow: false,
      },
      secondaries: {
        CoinsTab: false,
        EnergyTab: false,
        ActionsTab: false,
      },
    },
  };

  mountOrunmountComponents = (componentsToMountArray, shouldMount) => {
    const mountedComponentsDict = this.state.mountedComponentsDict;
    const { ...priorityGroups } = mountedComponentsDict;
    componentsToMountArray.forEach(componentToMountOrUnmount => {
      for (const priorityGroup in priorityGroups) {
        const groupInDict = mountedComponentsDict[priorityGroup];
        if (componentToMountOrUnmount in groupInDict) {
          const { mountedComponentsDict: newMountedComponentsDict } = this.state;
          newMountedComponentsDict[priorityGroup][componentToMountOrUnmount] = shouldMount;
          this.setState({ mountedComponentsDict: newMountedComponentsDict });
        }
      }
    });
  };

  mountComponents = componentsToUnmountArray => {
    this.mountOrunmountComponents(componentsToUnmountArray, true);
  };
  unmountComponents = componentsToUnmountArray => {
    this.mountOrunmountComponents(componentsToUnmountArray, false);
  };

  render() {
    const { state, mountComponents, unmountComponents, props } = this;
    return (
      <MountedComponentsContext.Provider value={{ ...state, mountComponents, unmountComponents }}>
        {props.children}
      </MountedComponentsContext.Provider>
    );
  }
}
export default MountedComponentsContextProvider;
