import React from 'react';
import { useSelector } from 'react-redux';
import MapChunk from 'Screens/Gameplay/Components/Map/MapChunk';

export function RenderWorldMap(chunksToRender) {
	const activeChunks = useSelector(chunksToRender);
	const chunkItemsToRender = activeChunks.slice(0);
	// const renderedActionItems = chunkItemsToRender.map((item, index) => {
	// const actionDataObject = assembleActionDataObject(activeChunks, index);
	// return <MapChunk actionItem={actionDataObject} key={item.id} index={index} />;
	// });
	return 1;
	// renderedActionItems;
}
