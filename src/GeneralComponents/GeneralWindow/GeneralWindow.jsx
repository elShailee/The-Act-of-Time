import React from 'react';
import GeneralCloseButton from 'GeneralComponents/GeneralCloseButton/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided, title, titleId, id, containerId }) {
	let composedClassName = 'generalWindow centered';
	if (rightSided) composedClassName = 'generalWindow rightSided';

	return (
		<div className={composedClassName} id={id}>
			<div className='windowTitleContainer' id={titleId}>
				{title}
				<GeneralCloseButton className='windowCloseButton' onClick={unmountGeneralWindow} />
			</div>
			<div className='windowContentContainer' id={containerId}>
				{children}
			</div>
		</div>
	);
}
