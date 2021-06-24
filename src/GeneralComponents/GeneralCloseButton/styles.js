import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';

export const GeneralCloseButton = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcSizeUnits(1)};
	height: ${({ theme }) => theme.calcSizeUnits(0.75)};
	background-color: ${({ theme }) => theme.colors.generalCloseButton.bg};
`;

GeneralCloseButton.defaultProps = {
	children: 'X',
};
