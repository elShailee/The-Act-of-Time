import React from 'react';
import { WindowContainer, TitleContainer, CloseButton, ContentContainer } from './styles';

export default function GeneralWindow({ children, unmountGeneralWindow, rightSided, title, titleId, id, containerId }) {
	let position;
	if (rightSided) {
		position = 'rightSided';
	} else position = 'centered';

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
