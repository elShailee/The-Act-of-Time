import React from 'react';
import GameplayScreen from 'Screens/GameplayScreen/GameplayScreen';
import RenderIfBrowserValidHOC from 'App/RenderIfBrowserValidHoc';

export default () => (
  <RenderIfBrowserValidHOC>
    <GameplayScreen />
  </RenderIfBrowserValidHOC>
);
