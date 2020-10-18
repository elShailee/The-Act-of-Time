export const getDraggableItemIndexFromActionId = actionItemId => {
  const lastDigit = actionItemId.charAt(actionItemId.length - 1);
  const index = parseInt(lastDigit);
  return index;
};
