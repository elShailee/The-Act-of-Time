import React from 'react';
import texts from 'texts';
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
	onClose: onCloseParameter,
}) {
	if (position === undefined) position = 'center';

	const onClose = () => {
		unmountGeneralWindow();
		if (typeof onCloseParameter === 'function') onCloseParameter();
		else console.log(texts.errors.invalidOnClose_GeneralWindow);
	};

	return (
		<WindowContainer position={position} customStyle={windowContainerStyle}>
			<TitleContainer customStyle={titleContainerStyle}>
				{title}
				<CloseButton onClick={onClose} customStyle={closeButtonStyle} />
			</TitleContainer>
			<ContentContainer customStyle={contentContainerStyle}>{children}</ContentContainer>
		</WindowContainer>
	);
}
