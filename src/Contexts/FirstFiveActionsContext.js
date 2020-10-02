import React, { Component, createContext } from 'react';
import ActionsTabExampleData from 'ExampleData/ActionsTabExampleData';

export const FirstFiveActionsContext = createContext();

class FirstFiveActionsContextProvider extends Component {
  state = { firstFiveActionsContext: ActionsTabExampleData() };

  applyFiveActionsReorder = () => {
    console.log('applyFiveActionsReorder triggered, still needs creating, though...');
  };

  renderFirstFiveActions = () => {
    console.log('renderFirstFiveActions triggered, still needs creating, though...');
  };

  render() {
    const { state, applyFiveActionsReorder, renderFirstFiveActions, props } = this;
    return (
      <FirstFiveActionsContext.Provider value={{ ...state, applyFiveActionsReorder, renderFirstFiveActions }}>
        {props.children}
      </FirstFiveActionsContext.Provider>
    );
  }
}
export default FirstFiveActionsContextProvider;
