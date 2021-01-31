import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHOC';
import ActionsContextProvider from 'Contexts/ActionsContext';

const App = () => (
  <RenderIfBrowserValidHOC>
    <ActionsContextProvider>
      <GameplayScreen />
    </ActionsContextProvider>
  </RenderIfBrowserValidHOC>
);

export default App;
