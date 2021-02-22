import React from 'react';
import GeneralCloseButton from 'Components/GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided }) {
	let composedClassName = 'generalWindow centered';
	let windowTitle = 'WindowTitle';
	if (rightSided) composedClassName = 'generalWindow rightSided';

	return (
		<div className={composedClassName}>
			<div className='generalWindowTitle'>{windowTitle}</div>
			<GeneralCloseButton className='generalWindowCloseButton' unmountWindow={unmountGeneralWindow} />
			<div className='contentContainer'>{children}</div>
		</div>
	);
}
