// import React from 'react';
import d3 from 'D3';
import chunkDictionary from './chunksDictionary';

function generateMapChunk() {
	const width = 64;
	const height = 55.426;
	const side = 32;

	const offsets = [
		[(width - side) / 2, 0],
		[(width - side) / 2 + side, 0],
		[width, height / 2],
		[(width - side) / 2 + side, height],
		[(width - side) / 2, height],
		[0, height / 2],
	];

	return offsets;
}

export default function MapChunk(x, y, color) {
	if (x == null) {
		x = 0;
	}
	if (y == null) {
		y = 0;
	}

	var vis = d3.select('#chart').append('svg').attr('width', 1000).attr('height', 667),
		scaleX = d3.scale.linear().domain([-30, 30]).range([0, 600]),
		scaleY = d3.scale.linear().domain([0, 50]).range([500, 0]),
		hex = generateMapChunk();

	vis
		.selectAll('polygon')
		.data([hex])
		.enter()
		.append('polygon')
		.attr('points', function (d) {
			return d
				.map(function (d) {
					return [scaleX(d.x), scaleY(d.y)].join(',');
				})
				.join(' ');
		})
		.attr('stroke', chunkDictionary.color)
		.attr('stroke-width', 2);

	// hex.color = chunkDictionary.color;
	// hex.x = x;
	// hex.y = y;
	// return hex;
}
