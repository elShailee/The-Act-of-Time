import React from 'react';
import { Hexagon } from 'react-hex-engine';
import chunkDictionary from './chunksDictionary';

export default function MapChunk(hex, climate, cordinateX, cordinateY) {
	const movmentLeft = '3.125vw';
	const movmentUp = '50vh/9';
	const color = climate != null ? chunkDictionary[climate].color : 'black';
	const opacity = climate != null ? 1 : 0;
	const style = `
        color: ${color};
        opacity: ${opacity}
        Left: ${cordinateX} * ${movmentLeft}; 
        up: ${cordinateX} * 0.5 * ${movmentUp} + ${cordinateY} * ${movmentUp};
        `;

	return <Hexagon className='chunk' style={style} {...hex} key={hex.toString()} />;
}
