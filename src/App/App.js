import React from 'react';
import Gameplay from 'Gameplay';
import texts from 'Texts/Texts';
import { isValidBrowser } from './AppUtils';

export default function App() {
  const isValidBrowserBool = isValidBrowser();
  if (isValidBrowserBool) {
    return <Gameplay />;
  } else return texts.logs.errors.invalidBrowser;
}
