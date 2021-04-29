import React from 'react';
import { CloseButton } from './GeneralButtons';

export default function GeneralCloseButton({ unmountWindow }) {
	return <CloseButton onClick={unmountWindow}>X</CloseButton>;
}
