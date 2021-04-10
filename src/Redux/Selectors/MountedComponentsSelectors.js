import { useSelector } from 'react-redux';

export const GetCoinsPurchaseWindowMounted = () => {return useSelector(state => state.MountedComponents.CoinsPurchaseWindow)};
export const GetEnergyPurchaseWindowMounted = () => { return useSelector(state => state.MountedComponents.EnergyPurchaseWindow)};
export const GetSettingsWindowMounted = () => { return useSelector(state => state.MountedComponents.SettingsWindow)};
export const GetActionsWindowMounted = () => { return useSelector(state => state.MountedComponents.ActionsWindow)};
export const GetActionsTabMounted = () => { return useSelector(state => state.MountedComponents.ActionsTab)};
export const GetCoinsTabMounted = () => { return useSelector(state => state.MountedComponents.CoinsTab)};
export const GetEnergyTabMounted = () => { return useSelector(state => state.MountedComponents.EnergyTab)};
export const GetSettingWindowMounted = () => { return useSelector(state => state.MountedComponents.SettingsWindow)};
