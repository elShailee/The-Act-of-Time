import { useSelector } from 'react-redux';

export const GetOrderedActionsArray = () => {return useSelector(state => state.Actions.orderedActionsArray)};
