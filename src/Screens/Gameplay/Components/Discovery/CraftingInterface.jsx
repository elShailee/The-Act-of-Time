import React from 'react';
import { CraftingInterfaceContainer, LocalSvg } from './styles_crafting';

export default function CraftingInterface({ renderInput, renderOutput }) {
	return (
		<CraftingInterfaceContainer>
			{renderInput()}
			<LocalSvg viewBox='0 0 24 24'>
				<path d='M13 7v-6l11 11-11 11v-6h-13v-10z' />
			</LocalSvg>
			{renderOutput()}
		</CraftingInterfaceContainer>
	);
}
