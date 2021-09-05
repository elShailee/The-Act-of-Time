import React from 'react';
import { WindowContainer, TitleContainer, CloseButton, ContentContainer } from './styles';

export default function GeneralWindow({
	children,
	unmountGeneralWindow,
	position,
	title,
	windowContainerStyle,
	titleContainerStyle,
	closeButtonStyle,
	contentContainerStyle,
	onClose,
}) {
	if (position === undefined) position = 'center';
	return (
		<WindowContainer position={position} customStyle={windowContainerStyle}>
			<TitleContainer customStyle={titleContainerStyle}>
				{title}
				<CloseButton
					onClick={() => {
						unmountGeneralWindow();
						onClose();
					}}
					customStyle={closeButtonStyle}
				/>
			</TitleContainer>
			<ContentContainer customStyle={contentContainerStyle}>{children}</ContentContainer>
		</WindowContainer>
	);
}
