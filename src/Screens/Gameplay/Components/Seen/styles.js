import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { discoveryButtonSize } from 'Screens/Gameplay/Components/Discovery/styles';
import { animated } from 'react-spring';

export const seenButtonSize = 1.5;

export const Button = styled(animated(GeneralButton))`
	background-color: ${({ theme }) => theme.colors.seen.bg};
	width: ${({ theme }) => theme.calcHeightUnits(seenButtonSize)};
	height: ${({ theme }) => theme.calcHeightUnits(seenButtonSize)};
	border-radius: 50%;
	margin-bottom: ${({ theme }) => theme.calcHeightUnits(0.5)};
	margin-left: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize / 2)};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;
