import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { discoveryButtonSize } from 'Screens/Gameplay/Components/Discovery/styles';

export const seenButtonSize = 1.5;

export const Button = styled(GeneralButton)`
	background-color: cornflowerblue;
	width: ${({ theme }) => theme.calcHeightUnits(seenButtonSize)};
	height: ${({ theme }) => theme.calcHeightUnits(seenButtonSize)};
	border-radius: 50%;
	margin-bottom: ${({ theme }) => theme.calcHeightUnits(0.5)};
	margin-left: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize / 2)};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;
