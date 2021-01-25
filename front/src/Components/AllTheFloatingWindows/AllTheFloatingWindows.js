import React, { useContext } from 'react';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';

export default function AllTheFloatingWindows() {
  const { mountedComponentsDict, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowMounted = mountedComponentsDict.CoinsPurchaseWindow;
  const isEnergyPurchaseWindowMounted = mountedComponentsDict.EnergyPurchaseWindow;

  const CoinsPurchaseWindowAsVar = (
    <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
  );
  const EnergyPurchaseWindowAsVar = (
    <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
  );
  return (
    <div>
      {isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
      {isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
    </div>
  );
}
