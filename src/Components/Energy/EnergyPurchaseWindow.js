import React from 'react';
import GeneralWindow from 'Components/GeneralComponents/GeneralWindow';

export default function EnergyPurchaseWindow({ unmountEnergyPurchaseWindow, ...props }) {
  return (
    <GeneralWindow unmountGeneralWindow={unmountEnergyPurchaseWindow} {...props}>
      <br />
      <br />
      <br />
      Buy Energy
      <br />
      <br />
      <br />
      <br />
      Earn Energy
    </GeneralWindow>
  );
}
