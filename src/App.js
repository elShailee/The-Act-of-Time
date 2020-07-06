import React from 'react';
import './App.css';
import CharacterInfo from './Components/Character/CharacterInfo';
import ActionsButton from './Components/Actions/ActionsButton';
import EnergyButton from './Components/Energy/EnergyButton';
import CoinsButton from './Components/Coins/CoinsButton';
import SeenButton from './Components/Seen/SeenButton';
import CraftingButton from './Components/Crafting/CraftingButton';
import Map from './Components/Map/Map';
import DisastersContainer from './Components/Disasters/DisastersContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Map />

        <div id="upperLeftButtonsContainer">
          <EnergyButton />
          <CoinsButton />
        </div>

        <div id="characterInfoContainer">
          <CharacterInfo />
        </div>

        <div id="upperRightButtonsContainer">
          <ActionsButton />
        </div>

        <div id="disastersContainerContainer">
          <DisastersContainer />
        </div>

        <div id="bottomRightButtonsContainer">
          <SeenButton />
          <CraftingButton />
        </div>
      </div>
    );
  }
}

export default App;
