import React, { Component, createContext } from 'react';
//import activeActions from 'ExampleData/activeActionsExampleData'; //Switched to Server
import actionsLibrary from 'ExampleData/actionsLibraryExampleData';
import ActionsTabItem from 'Components/Actions/ActionsTabItem';
import { getData } from 'Utils/restFuncs';

export const ActionsContext = createContext();

class ActionsContextProvider extends Component {
  state = { actions: {}, actionsOrder: {} };
  actionsItemsTypes = { tabItem: 'tabItem' };

  async componentDidMount() {
    const URL = 'http://localhost:8000/api/actions/';
    const activeActions = await getData(URL);
    this.setState({ actions: activeActions, actionsOrder: this.getActionsOrder(activeActions) });
  }

  getActionsOrder = activeActions => {
    const actionsOrder = [];
    for (const action in activeActions) {
      actionsOrder.push(action);
    }
    return actionsOrder;
  };

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
    return this.renderActionItems(this.actionsItemsTypes.tabItem, numOfItemsToRender);
  };

  renderActionItems = (renderType, numOfItemsToRender) => {
    const { actionsOrder } = this.state;
    if (!numOfItemsToRender) numOfItemsToRender = actionsOrder.length;

    const itemsToRenderIds = actionsOrder.slice(0, numOfItemsToRender);
    const renderedActionItems = itemsToRenderIds.map((itemId, index) => {
      const actionObject = this.generateActionObject(itemId);
      return this.generateActionItemJSX(actionObject, index, renderType);
    });
    return renderedActionItems;
  };

  generateActionObject = actionItemId => {
    const actionItemInDB = this.state.actions[actionItemId];

    const lib = actionsLibrary;
    const actionItemInLib = { ...lib[actionItemInDB.actionType] };

    const fullActionItem = Object.assign({}, actionItemInLib, actionItemInDB);
    return fullActionItem;
  };

  generateActionItemJSX = (actionItem, index, renderType) => {
    if (renderType === this.actionsItemsTypes.tabItem) {
      return <ActionsTabItem actionItem={actionItem} key={actionItem.id} index={index} />;
    }
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
