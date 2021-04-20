import React from 'react';
import GeneralCloseButton from 'GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided, title, titleId, id, containerId }) {
	let composedClassName = 'generalWindow centered';
	if (rightSided) composedClassName = 'generalWindow rightSided';

	return (
		<div className={composedClassName} id={id}>
			<div className='generalWindowTitle' id={titleId}>
				<GeneralCloseButton unmountWindow={unmountGeneralWindow} />
				{title}
			</div>
			<div className='contentContainer' id={containerId}>
				{children}
			</div>
		</div>
	);
}
