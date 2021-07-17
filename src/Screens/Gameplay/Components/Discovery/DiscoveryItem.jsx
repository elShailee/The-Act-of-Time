import React from 'react';
import { useSelector } from 'react-redux';

export default function DiscoveryItem({ index, selector }) {
	const state = useSelector(state => selector(state)[index]);
	const content = state ? state * 100 : 'X';
	return <div>{content}</div>;
}
