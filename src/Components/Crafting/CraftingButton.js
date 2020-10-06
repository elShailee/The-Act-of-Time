import React from 'react';
import './CraftingButton.css';
import { craftingButtonTexts } from 'Texts/gameplayTexts';

export default function CraftingButton() {
  return <div id="craftingButton">{craftingButtonTexts.title}</div>;
}
