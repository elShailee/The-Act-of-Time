import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import iconAsset from 'Assets/settingsIcon.png';

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.sizes.buttonsHeight.L};
	margin-right: ${({ theme }) => theme.sizes.padding.XL};
	background-color: ${({ theme }) => theme.colors.settings.button};
`;

export const Icon = styled.img`
	width: 75%;
	height: 75%;
	${({ theme }) => theme.customStyles.nonSelectable};
`;

Icon.defaultProps = {
	src: iconAsset,
};

export const Range = styled.input`
	height: ${({ theme }) => theme.calcSizeUnits(0.5)};
	width: ${({ theme }) => theme.calcSizeUnits(4)};
`;

Range.defaultProps = {
	type: 'range',
};
