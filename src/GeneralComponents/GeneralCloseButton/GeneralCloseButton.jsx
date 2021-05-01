import React from 'react';
import { CloseButton } from './styles';

export default function GeneralCloseButton({ onClick }) {
	return <CloseButton onClick={onClick}>X</CloseButton>;
}
