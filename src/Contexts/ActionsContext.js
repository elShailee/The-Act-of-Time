import React, { Component, createContext } from 'react';
import ActionsExampleData from 'ExampleData/ActionsExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

export const ActionsContext = createContext();

class ActionsContextProvider extends Component {
  state = { ...ActionsExampleData() };

  applyActionsReorder = () => {
    console.log('applyActionsReorder triggered, still needs creating, though...');
  };

  renderActionTabItems = numOfItemsToRender => {
    return this.renderActionItems(numOfItemsToRender, 'actionTabItems');
  };

  renderActionItems = (numOfItemsToRender, renderType) => {
    const { actionsOrder } = this.state;
    if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;

    const relevantItemsIds = actionsOrder.slice(0, numOfItemsToRender);
    const renderedActionItems = relevantItemsIds.map(itemId => {
      return this.generateActionItem(itemId, renderType);
    });
    return renderedActionItems;
  };

  generateActionItem = (actionItemId, type) => {
    const actionItem = this.state.actions[actionItemId];
    if (type === 'actionTabItems') return <ActionsTabItem actionItem={actionItem} key={actionItemId} />;
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
