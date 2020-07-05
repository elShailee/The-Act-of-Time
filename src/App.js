import React from 'react';
import './App.css';
import CharacterInfo from './Components/Character/CharacterInfo';
import ActionsButton from './Components/Actions/ActionsButton';
import EnergyButton from './Components/Energy/EnergyButton';
import CoinsButton from './Components/Coins/CoinsButton';
import DisastersButton from './Components/Disasters/DisastersButton';
import SeenButton from './Components/Seen/SeenButton';
import CraftingButton from './Components/Crafting/CraftingButton';
import Map from './Components/Map/Map';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="mapContainer">
          <Map></Map>
        </div>

        <div id="upperLeftButtonsContainer">
          <EnergyButton></EnergyButton>
          <CoinsButton></CoinsButton>
          <br />
          <br />
          <br />
          10*4
        </div>

        <div id="characterInfoContainer">
          <CharacterInfo></CharacterInfo>10*2.5
        </div>

        <div id="upperRightButtonsContainer">
          <ActionsButton></ActionsButton>
          <br />
          <br />
          <br />
          8*10
        </div>

        <div id="disastersContainer">
          <DisastersButton></DisastersButton>
          <br />
          <br />
          <br />
          <br />
          <br />
          6*5
        </div>

        <div id="bottomRightButtonsContainer">
          <SeenButton></SeenButton>
          <CraftingButton></CraftingButton>3*4.5
        </div>
      </div>
    );
  }
}

export default App;
