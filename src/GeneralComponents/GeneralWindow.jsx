import React from 'react';
import GeneralCloseButton from 'GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided, title }) {
	let composedClassName = 'generalWindow centered';
	if (rightSided) composedClassName = 'generalWindow rightSided';

	return (
		<div className={composedClassName}>
			<div className='generalWindowTitle'>{title}</div>
			<GeneralCloseButton className='generalButton closeButton' unmountWindow={unmountGeneralWindow} />
			<div className='contentContainer'>{children}</div>
		</div>
	);
}
