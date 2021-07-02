import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import { animated } from 'react-spring';

export const discoveryButtonSize = 2.5;

export const Button = styled(animated(GeneralButton))`
	width: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	line-height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
`;

export const windowBarStyle = theme => `
	background-color: ${theme.colors.discovery.windowNavBar};
	margin-right: ${theme.sizes.padding.M}
`;

export const windowNavButtonStyle = theme => `
	background-color: ${theme.colors.discovery.windowNavBar};
`;
