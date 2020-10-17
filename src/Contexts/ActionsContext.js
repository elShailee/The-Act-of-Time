import React, { Component, createContext } from 'react';
import ActionsTabExampleData from 'ExampleData/ActionsTabExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

export const ActionsContext = createContext();

class ActionsContextProvider extends Component {
  state = { ...ActionsTabExampleData() };

  applyActionsReorder = () => {
    console.log('applyActionsReorder triggered, still needs creating, though...');
  };

  renderActionTabItems = numOfItemsToRender => {
    const { actionsOrder, actions } = this.state;
    if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;

    const relevantItemsIds = actionsOrder.slice(0, numOfItemsToRender);
    const renderedActionTabItems = relevantItemsIds.map(itemId => {
      const actionItem = actions[itemId];
      return <ActionsTabItem actionItem={actionItem} key={itemId} />;
    });
    return renderedActionTabItems;
  };

  render() {
    const { state, applyActionsReorder, renderActionTabItems, getFirstFiveActions, props } = this;
    return (
      <ActionsContext.Provider value={{ ...state, applyActionsReorder, renderActionTabItems, getFirstFiveActions }}>
        {props.children}
      </ActionsContext.Provider>
    );
  }
}
export default ActionsContextProvider;
