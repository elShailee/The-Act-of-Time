import React from 'react';
import { renderDroppablesGrid } from 'Utils/DiscoveryUtils/dndRenderUtils';
import gridConfigs from 'Utils/DiscoveryUtils/gridsConfigs';
import { CraftingInterfaceContainer, ArrowSvg } from './styles_crafting';

export default function CraftingInterface() {
	const inputGrid = renderDroppablesGrid({ gridConfig: gridConfigs.craftingInputConfig });
	const outputGrid = renderDroppablesGrid({ gridConfig: gridConfigs.craftingOutputConfig });

	const svgFrameSize = 24;

	return (
		<CraftingInterfaceContainer>
			{inputGrid}
			<ArrowSvg viewBox={`0 0 ${svgFrameSize} ${svgFrameSize}`}>
				<path d='M13 7v-6l11 11-11 11v-6h-13v-10z' />
			</ArrowSvg>
			{outputGrid}
		</CraftingInterfaceContainer>
	);
}
