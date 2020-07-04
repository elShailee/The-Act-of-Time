import React from 'react';
import './App.css';
import CharacterInfo from './Components/Character/CharacterInfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="mapContainer"></div>
        <div id="upperLeftButtonsContainer"></div>
        <div id="characterInfoContainer">
          <CharacterInfo></CharacterInfo>
        </div>
        <div id="upperRightButtonsContainer"></div>
        <div id="disastersContainer"></div>
        <div id="bottomRightButtonsContainer"></div>
      </div>
    );
  }
}

export default App;
