import React from 'react';
import './App.css';
import CharacterInfo from './Components/Character/CharacterInfo';
import ActionsButton from './Components/Actions/ActionsButton';
import EnergyButton from './Components/Energy/EnergyButton';
import CoinsButton from './Components/Coins/CoinsButton';
import SeenButton from './Components/Seen/SeenButton';
import CraftingButton from './Components/Crafting/CraftingButton';
import Map from './Components/Map/Map';
import DisastersIcon from './Components/Disasters/DisastersIcon';
import DisasterCounter from './Components/Disasters/DisasterCounter';
import MountedComponentsContextProvider from './Contexts/MountedComponentsContext';

export default function App() {
  if (browserIsEdge()) {
    return "this Application doesn't work on microsoft edge, please try to open it using Google Chrome or Firefox";
  }

  return (
    <div className="App">
      <MountedComponentsContextProvider>
        <Map />

        <div id="characterInfoContainer">
          <CharacterInfo />
        </div>

        <div id="upperLeftButtonsContainer">
          <EnergyButton />
          <CoinsButton />
        </div>

        <div id="upperRightButtonsContainer">
          <ActionsButton />
        </div>

        <div id="disastersContainerContainer">
          <DisastersIcon />
          <DisasterCounter />
        </div>

        <div id="bottomRightButtonsContainer">
          <SeenButton />
          <CraftingButton />
        </div>
      </MountedComponentsContextProvider>
    </div>
  );
}

function browserIsEdge() {
  if (!!window.StyleMedia) {
    return true;
  }
}
