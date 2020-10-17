import React, { Component, createContext } from 'react';
import ActionsTabExampleData from 'ExampleData/ActionsTabExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

export const ActionsContext = createContext();

class ActionsContextProvider extends Component {
  state = { ...ActionsTabExampleData() };

  applyFiveActionsReorder = () => {
    console.log('applyFiveActionsReorder triggered, still needs creating, though...');
  };

  renderFirstFiveActions = () => {
    const actionsOrder = this.state.actionsOrder;
    const items = actionsOrder.map(itemId => {
      const actionItem = this.state.actions[itemId];
      return <ActionsTabItem actionItem={actionItem} key={itemId} />;
    });
    return items;
  };

  render() {
    const { state, applyFiveActionsReorder, renderFirstFiveActions, getFirstFiveActions, props } = this;
    return (
      <ActionsContext.Provider value={{ ...state, applyFiveActionsReorder, renderFirstFiveActions, getFirstFiveActions }}>
        {props.children}
      </ActionsContext.Provider>
    );
  }
}
export default ActionsContextProvider;
