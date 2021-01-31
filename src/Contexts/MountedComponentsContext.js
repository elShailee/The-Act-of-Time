//
//        - MountedComponentsContext -
//
//    This context track which components are and aren't monted.
//
//  HOW TO USE:
//   -   add those lines where a component is to be mounted -
//          import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
//          const { mountedComponentsDict, mountComponents, unmountComponents } = useContext(MountedComponentsContext);  (inside a function's body)
//   -   you can then access the mounting-state of a component via mountedComponentsDict.ComponentName
//   -   you can mount and unmount components via mountComponents() and unmountComponents(), they can both take either a string of the component's name, or and array of strings.
//   -   remember to conditionally render the components at hand. a simple way is:
//          const isRelevantComponentMounted = mountedComponentsDict.RelevantComponent;
//          {isRelevantComponentMounted && <RelevantComponent />}

import React, { Component, createContext } from 'react';
import { isAnObject } from 'Utils/utilFuncs';
import { errorMessagesTexts } from 'Texts/gameplayTexts';

export const MountedComponentsContext = createContext();

class MountedComponentsContextProvider extends Component {
  state = {
    mountedComponentsDict: {
      ActionsTab: false,
      ActionsWindow: false,
      EnergyPurchaseWindow: false,
      CoinsPurchaseWindow: false,
      CoinsTab: false,
      EnergyTab: false,
    },
  };

  mountOrunmountComponents = (componentsToMountArray, shouldMount) => {
    if (typeof componentsToMountArray === 'string') componentsToMountArray = [componentsToMountArray];

    const isComponentsArrayValid = this.isComponentsArrayValid(componentsToMountArray);
    if (!isComponentsArrayValid) {
      console.log(errorMessagesTexts.invalidComponentsToMount);
      return;
    }

    const mountedComponentsDict = this.state.mountedComponentsDict;

    componentsToMountArray.forEach(componentName => {
      const doesComponentAppearInDict = componentName;
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
    if (!isAnObject(arreyOfComponentsNames) || arreyOfComponentsNames === undefined) {
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
