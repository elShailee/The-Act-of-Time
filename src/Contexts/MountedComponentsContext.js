import React, { Component, createContext } from 'react';

export const MountedComponentsContext = createContext();

class MountedComponentsContextProvider extends Component {
  state = {
    componentsList: {
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

  ToggleOn = uiComponent => {
    const priorityGroups = Object.keys(this.state.componentsList);
    uiComponent.forEach(propedComponent => {
      for (let i = 0; i < priorityGroups.length; i++) {
        if (propedComponent in this.state.componentsList[priorityGroups[i]]) {
          const { componentsList: newComponentsList } = this.state;
          newComponentsList[priorityGroups[i]][propedComponent] = true;
          this.setState({ componentsList: newComponentsList });
        }
      }
    });
  };

  ToggleOff = uiComponent => {
    const priorityGroups = Object.keys(this.state.componentsList);
    uiComponent.forEach(propedComponent => {
      for (let i = 0; i < priorityGroups.length; i++) {
        if (propedComponent in this.state.componentsList[priorityGroups[i]]) {
          const { componentsList: newComponentsList } = this.state;
          newComponentsList[priorityGroups[i]][propedComponent] = false;
          this.setState({ componentsList: newComponentsList });
        }
      }
    });
  };

  render() {
    return (
      <MountedComponentsContext.Provider value={{ ...this.state, ToggleOn: this.ToggleOn, ToggleOff: this.ToggleOff }}>
        {this.props.children}
      </MountedComponentsContext.Provider>
    );
  }
}
export default MountedComponentsContextProvider;
