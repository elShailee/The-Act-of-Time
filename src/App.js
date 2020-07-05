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
        <div id="mapContainer">
          <Map></Map>
        </div>

        <div id="upperLeftButtonsContainer">
          <EnergyButton></EnergyButton>
          <CoinsButton></CoinsButton>
        </div>

        <div id="characterInfoContainer">
          <CharacterInfo></CharacterInfo>
        </div>

        <div id="upperRightButtonsContainer">
          <ActionsButton></ActionsButton>
        </div>

        <div id="disastersContainerContainer">
          <DisastersContainer></DisastersContainer>
        </div>

        <div id="bottomRightButtonsContainer">
          <SeenButton></SeenButton>
          <CraftingButton></CraftingButton>
        </div>
      </div>
    );
  }
}

export default App;
