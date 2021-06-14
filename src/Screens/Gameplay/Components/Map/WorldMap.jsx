// import React from 'react';
import 'Screens/Gameplay/Components/Map/WorldMap.css';
// import MapChunk from 'Screens/Gameplay/Components/Map/MapChunk';
// import chunksExampleData from 'ExampleData/chunksExampleData';
// import RenderWorldMap from 'Utils/MapUtils/RenderWorldMap'; Hexagon,

const HexMap = () => {
	// const flat = true;
	// const size = { x: 5, y: 5 };
	// const origin = { x: 0, y: 4 };
	// const spacing = 1.0;
	// const width = 1820;
	// const height = 930;
	// const viewBox = { x: -35, y: -35, width: 70, height: 70 };

	return 1;
	// <HexEngine
	// 	id='HexMap'
	// 	width={width}
	// 	height={height}
	// 	viewBox={viewBox}
	// 	flat={flat}
	// 	size={size}
	// 	origin={origin}
	// 	spacing={spacing}
	// >
	// 	{GridGenerator.hexagon(2).map(hex =>
	// 		chunksExampleData.map(chunk => MapChunk(hex, chunk.climate, chunk.cordinateX, chunk.cordinateY)),
	// 		// <Hexagon {...hex} key={hex.toString()} />
	// 	)}
	// </HexEngine>
};

export default function WorldMap() {
	const map = HexMap();
	return map;
}
// {
//   info: {
//     propTables: [HexEngine],
//   },
// }

//   <HexEngine
// 		id='HexMap'
// 		spacing={1}
// 		width={320}
// 		height={240}
// 		viewBox={{
// 			x: -30,
// 			y: -30,
// 			width: 60,
// 			height: 60,
// 		}}
// 		size={{ x: 3, y: 3 }}
// 		origin={{ x: 15, y: 15 }}
// 	>
// 		{/* center tile (0,0) */}
// 		<Hexagon r={0} q={0} meta={{}} />
// 		{/* first circle */}
// 		<Hexagon r={0} q={-1} meta={{}} />
// 		<Hexagon r={1} q={-1} meta={{}} />
// 		<Hexagon r={-1} q={0} meta={{}} />
// 		<Hexagon r={1} q={0} meta={{}} />
// 		<Hexagon r={-1} q={1} meta={{}} />
// 		<Hexagon r={0} q={1} meta={{}} />
// 		{/* seconde circele */}
// 		<Hexagon r={2} q={0} meta={{}} />
// 		<Hexagon r={2} q={-1} meta={{}} />
// 		<Hexagon r={0} q={2} meta={{}} />
// 		<Hexagon r={-1} q={2} meta={{}} />
// 		<Hexagon r={-2} q={2} meta={{}} />
// 		<Hexagon r={0} q={-2} meta={{}} />
// 		<Hexagon r={1} q={-2} meta={{}} />
// 		<Hexagon r={2} q={-2} meta={{}} />
// 		<Hexagon r={-2} q={0} meta={{}} />
// 		<Hexagon r={-2} q={1} meta={{}} />
// 		<Hexagon r={-1} q={-1} meta={{}} />
// 		<Hexagon r={1} q={1} meta={{}} />
// 	</HexEngine>
// );

// export default function WorldMap() {
// 	return <div>{RenderWorldMap(chunksExampleData)}</div>;
// }
