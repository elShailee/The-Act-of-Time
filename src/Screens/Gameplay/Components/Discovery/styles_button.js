import styled from 'styled-components';
import { animated } from 'react-spring';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';

export const discoveryButtonSize = 2.5;

export const Button = styled(animated(GeneralButton))`
	width: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	line-height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
`;
