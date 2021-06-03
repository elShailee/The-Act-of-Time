import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import { animated } from 'react-spring';

export const discoveryButtonSize = 2.5;

export const Button = styled(animated(GeneralButton))`
	width: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	height: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: 50%;
	line-height: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
`;
