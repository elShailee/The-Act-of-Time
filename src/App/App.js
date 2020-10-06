import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import { renderOnlyIfBrowserValid } from './AppUtils';

export default function App() {
  const contentAfterBrowserCheck = renderOnlyIfBrowserValid(<GameplayScreen />);
  return contentAfterBrowserCheck;
}
