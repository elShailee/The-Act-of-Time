import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';

export const GeneralCloseButton = styled(GeneralButton)`
	width: ${({ theme }) => theme.HU};
	height: ${({ theme }) => theme.calcHeightUnits(0.75)};
	margin-left: auto;
	background-color: #ff99b3;
`;

GeneralCloseButton.defaultProps = {
	children: 'X',
};
