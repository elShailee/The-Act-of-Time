import React from 'react';
import { WindowContainer, TitleContainer, CloseButton, ContentContainer } from './styles';

export default function GeneralWindow({ children, unmountGeneralWindow, position, title }) {
	if (position === undefined) position = 'center';
	return (
		<WindowContainer position={position}>
			<TitleContainer>
				{title}
				<CloseButton onClick={unmountGeneralWindow} />
			</TitleContainer>
			<ContentContainer>{children}</ContentContainer>
		</WindowContainer>
	);
}
