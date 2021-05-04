import React from 'react';

export default function GeneralCloseButton({ unmountWindow, className }) {
	return (
		<div className={'generalButton closeButton ' + className} onClick={unmountWindow}>
			X
		</div>
	);
}
