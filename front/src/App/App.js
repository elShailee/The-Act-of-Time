import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHOC';

const App = () => (
  <RenderIfBrowserValidHOC>
    <GameplayScreen />
  </RenderIfBrowserValidHOC>
);

export default App;
