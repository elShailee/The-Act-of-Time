import React from 'react';
import { CraftingInterfaceContainer } from './styles_crafting';

export default function CraftingInterface({ renderInput }) {
	return <CraftingInterfaceContainer>{renderInput()}</CraftingInterfaceContainer>;
}
