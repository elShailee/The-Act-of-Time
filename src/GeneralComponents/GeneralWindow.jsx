import React from 'react';
import GeneralCloseButton from 'GeneralComponents/GeneralCloseButton';
import './GeneralWindow.css';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided, title, titleId, id, continerId }) {
	let composedClassName = 'generalWindow centered';
	if (rightSided) composedClassName = 'generalWindow rightSided';

	return (
		<div className={composedClassName} id={id}>
			<div className='generalWindowTitle' id={titleId}>
				<GeneralCloseButton className='generalButton closeButton' unmountWindow={unmountGeneralWindow} />
				{title}
			</div>
			<div className='contentContainer' id={continerId}>
				{children}
			</div>
		</div>
	);
}
