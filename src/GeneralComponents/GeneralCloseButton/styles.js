import styled from 'styled-components';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';

export const GeneralCloseButton = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(1)};
	height: ${({ theme }) => theme.calcHeightUnits(0.75)};
	margin-left: auto;
	background-color: ${({ theme }) => theme.colors.generalCloseButton.bg};
`;

GeneralCloseButton.defaultProps = {
	children: 'X',
};
