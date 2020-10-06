import React, { Component, createContext } from 'react';
import { isVarAnObject } from 'Utils/utilFuncs';
import { errorMessagesTexts } from 'Texts/gameplayTexts';

export const MountedComponentsContext = createContext();

class MountedComponentsContextProvider extends Component {
  state = {
    mountedComponentsDict: {
      EnergyPurchaseWindow: false,
      CoinsPurchaseWindow: false,
      CoinsTab: false,
      EnergyTab: false,
    },
  };

  mountOrunmountComponents = (componentsToMountArray, shouldMount) => {
    const isComponentsArrayValid = this.isComponentsArrayValid(componentsToMountArray);
    if (!isComponentsArrayValid) {
      console.log(errorMessagesTexts.invalidComponentsToMount);
      return;
    }

    const mountedComponentsDict = this.state.mountedComponentsDict;

    componentsToMountArray.forEach(componentName => {
      const doesComponentAppearInDict = componentName in mountedComponentsDict;
      if (doesComponentAppearInDict) {
        const newMountedComponentsDict = mountedComponentsDict;
        newMountedComponentsDict[componentName] = shouldMount;
        this.setState({ mountedComponentsDict: newMountedComponentsDict });
      }
    });
  };

  mountComponents = componentsToMountArray => {
    this.mountOrunmountComponents(componentsToMountArray, true);
  };
  unmountComponents = componentsToUnmountArray => {
    this.mountOrunmountComponents(componentsToUnmountArray, false);
  };

  isComponentsArrayValid = arreyOfComponentsNames => {
    if (!isVarAnObject(arreyOfComponentsNames) || arreyOfComponentsNames === undefined) {
      return false;
    }
    return true;
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
