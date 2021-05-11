import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';

export const CloseButton = styled(GeneralButton)`
	margin-left: auto;
	width: ${({ theme }) => theme.HU};
	height: ${({ theme }) => theme.calcHeightUnits(0.75)};
	background-color: #ff99b3;
	border: #ff4d79 solid;
`;
