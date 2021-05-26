import React from 'react';
import chunkDictionary from './chunksDictionary';

export default function MapChunk(x, y, color) {
	const width = 64;
	const height = 55.426;
	const side = 32;

function generateHexPoints(centreX, centreY) {
  const offsets = [
    [(width-side)/2, 0],
    [((width-side)/2 + side), 0],
    [width, height/2],
    [((width-side)/2 + side), height],
    [(width-side)/2, height],
    [0, height/2]
  ];
	const chankColor = chunkDictionary(color),
	
	}
	return generateHexPoints(x, y);

}