import React, { useContext } from 'react';
import { MountedComponentsContext } from 'Contexts/MountedComponentsContext';
import CoinsPurchaseWindow from 'Components/Coins/CoinsPurchaseWindow';
import EnergyPurchaseWindow from 'Components/Energy/EnergyPurchaseWindow';
import ActionsWindow from 'Components/Actions/ActionsWindow'
export default function AllTheFloatingWindows() {
  const { mountedComponentsDict, unmountComponents } = useContext(MountedComponentsContext);

  const isCoinsPurchaseWindowMounted = mountedComponentsDict.CoinsPurchaseWindow;
  const isEnergyPurchaseWindowMounted = mountedComponentsDict.EnergyPurchaseWindow;
  const isActionsWindowMounted = mountedComponentsDict.ActionsWindow;

  const CoinsPurchaseWindowAsVar = (
    <CoinsPurchaseWindow unmountCoinsPurchaseWindow={() => unmountComponents(['CoinsPurchaseWindow'])} />
  );
  const EnergyPurchaseWindowAsVar = (
    <EnergyPurchaseWindow unmountEnergyPurchaseWindow={() => unmountComponents(['EnergyPurchaseWindow'])} />
  );
  const ActionsWindowAsVar = (
    <ActionsWindow unmountActionsWindow={() => unmountComponents(['ActionsWindow'])} />
  );
  
  return (
    <div>
      {isCoinsPurchaseWindowMounted && CoinsPurchaseWindowAsVar}
      {isEnergyPurchaseWindowMounted && EnergyPurchaseWindowAsVar}
      {isActionsWindowMounted && ActionsWindowAsVar}
    </div>
  );
}
