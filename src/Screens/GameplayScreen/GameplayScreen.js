import React from 'react';
import './GameplayScreen.css';
import 'GeneralStyles/iconsStyles.css';
import CharacterInfo from 'Components/Character/CharacterInfo';
import ActionsButton from 'Components/Actions/ActionsButton';
import EnergyButton from 'Components/Energy/EnergyButton';
import CoinsButton from 'Components/Coins/CoinsButton';
import SeenButton from 'Components/Seen/SeenButton';
import CraftingButton from 'Components/Crafting/CraftingButton';
import Map from 'Components/Map/Map';
import DisastersIcon from 'Components/Disasters/DisastersIcon';
import DisasterCounter from 'Components/Disasters/DisasterCounter';
import MountedComponentsContextProvider from 'Contexts/MountedComponentsContext';

export default function GameplayScreen() {
  return (
    <div id="gameplayScreen">
      <MountedComponentsContextProvider>
        <CharacterInfo />

        <div id="upperLeftButtonsContainer">
          <EnergyButton />
          <CoinsButton />
        </div>

        <ActionsButton />

        <div id="disastersContainerContainer">
          <DisastersIcon />
          <DisasterCounter />
        </div>

        <div id="bottomRightButtonsContainer">
          <SeenButton />
          <CraftingButton />
        </div>
        <Map />
      </MountedComponentsContextProvider>
    </div>
  );
}
