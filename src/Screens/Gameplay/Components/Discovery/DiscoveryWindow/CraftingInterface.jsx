import React from 'react';
import { CraftingInterfaceContainer, ArrowSvg } from './styles_crafting';

export default function CraftingInterface({ renderInput, renderOutput }) {
	const frameSize = 24;

	return (
		<CraftingInterfaceContainer>
			{renderInput()}
			<ArrowSvg viewBox={`0 0 ${frameSize} ${frameSize}`}>
				<path d='M13 7v-6l11 11-11 11v-6h-13v-10z' />
			</ArrowSvg>
			{renderOutput()}
		</CraftingInterfaceContainer>
	);
}
