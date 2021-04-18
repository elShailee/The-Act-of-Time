import React from 'react';

export default function GeneralCloseButton({ unmountWindow }) {
	return (
		<div className='generalButton closeButton' onClick={unmountWindow}>
			X
		</div>
	);
}
