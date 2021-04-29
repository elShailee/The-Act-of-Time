import React from 'react';
import './GeneralTab.css';

export default function GeneralTab({ children, id, className }) {
	return (
		<div className={className + ' generalTab'} id={id}>
			{children}
		</div>
	);
}
