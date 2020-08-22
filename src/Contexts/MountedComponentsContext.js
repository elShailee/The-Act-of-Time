import React, { Component, createContext } from 'react';

export const MountedComponentsContext = createContext();

class MountedComponentsContextProvider extends Component {
  state = {
    mountedComponentsDict: {
      primaries: {
        CraftingWindow: false,
        ItemInfiWindow: false,
        EnergyPurchaseWindow: false,
        CoinsPurchaseWindow: false,
      },
      secondaries: {
        CoinsTab: false,
        EnergyTab: false,
      },
    },
  };

  ComponentsMounterAndUnmounter = (componentsToMountArray, isToMount) => {
    const mountedComponentsDict = this.state.mountedComponentsDict;
    const { ...priorityGroups } = mountedComponentsDict;
    componentsToMountArray.forEach(componentToMountOrUnmount => {
      for (const group in priorityGroups) {
        const groupInDict = mountedComponentsDict[group];
        if (componentToMountOrUnmount in groupInDict) {
          const { mountedComponentsDict: newMountedComponentsDict } = this.state;
          newMountedComponentsDict[group][componentToMountOrUnmount] = isToMount;
          this.setState({ mountedComponentsDict: newMountedComponentsDict });
        }
      }
    });
  };

  MountComponents = componentsToUnmountArray => {
    this.ComponentsMounterAndUnmounter(componentsToUnmountArray, true);
  };
  UnmountComponents = componentsToUnmountArray => {
    this.ComponentsMounterAndUnmounter(componentsToUnmountArray, false);
  };

  render() {
    return (
      <MountedComponentsContext.Provider
        value={{ ...this.state, MountComponents: this.MountComponents, UnmountComponents: this.UnmountComponents }}
      >
        {this.props.children}
      </MountedComponentsContext.Provider>
    );
  }
}
export default MountedComponentsContextProvider;
