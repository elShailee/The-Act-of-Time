import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import { isBrowserValid, invalidBrowserMessage } from './AppUtils';

export default function App() {
  const isBrowserValidBool = isBrowserValid();
  if (isBrowserValidBool) {
    return <GameplayScreen />;
  } else return invalidBrowserMessage;
}
