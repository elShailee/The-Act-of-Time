import React, { Component, createContext } from 'react';
import ActionsExampleData from 'ExampleData/ActionsExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';

export const ActionsContext = createContext();

class ActionsContextProvider extends Component {
  state = { ...ActionsExampleData() };

  applyActionsReorder = result => {
    const { actionsOrder } = this.state;
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (source.index === destination.index && source.draggableId === destination.draggableId) return;

    let newActionsOrder = Array.from(actionsOrder);
    newActionsOrder.splice(source.index, 1);
    newActionsOrder.splice(destination.index, 0, draggableId);
    this.setState({ actionsOrder: newActionsOrder });
  };

  renderActionTabItems = numOfItemsToRender => {
    return this.renderActionItems(numOfItemsToRender, 'actionTabItems');
  };

  renderActionItems = (numOfItemsToRender, renderType) => {
    const { actionsOrder } = this.state;
    if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;

    const relevantItemsIds = actionsOrder.slice(0, numOfItemsToRender);
    const renderedActionItems = relevantItemsIds.map((itemId, index) => {
      return this.generateActionItem(itemId, index, renderType);
    });
    return renderedActionItems;
  };

  generateActionItem = (actionItemId, index, type) => {
    const actionItem = this.state.actions[actionItemId];
    if (type === 'actionTabItems') return <ActionsTabItem actionItem={actionItem} key={actionItemId} index={index} />;
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
