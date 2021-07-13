import styled from 'styled-components';
import { animated } from 'react-spring';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';

/*  ~Button~ */

export const discoveryButtonSize = 2.5;

export const Button = styled(animated(GeneralButton))`
	width: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	line-height: ${({ theme }) => theme.calcSizeUnits(discoveryButtonSize)};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
`;

/*  ~Window~ */

const darkGreenBorder = theme => `
border: ${theme.sizes.border.S} solid ${theme.colors.discovery.window.borders};
`;

const WindowContainer = theme => `
	background-color: ${theme.colors.discovery.window.container};
	${darkGreenBorder(theme)}
`;

const NavBar = theme => `
	height: ${theme.sizes.buttonsHeight.M};
	margin-right: ${theme.sizes.padding.S};
	${darkGreenBorder(theme)}
	background-color: ${theme.colors.discovery.window.navBar};
`;

const NavButton = theme => `
	background-color: ${theme.colors.discovery.window.navBar};
`;

const PressedNavButton = theme => `
	background-color: ${theme.colors.discovery.window.pressedNavButton};
`;

const NavSpacer = theme => `
	color: ${theme.colors.discovery.window.navSpacer};
`;

const CloseButton = theme => `
	background-color: ${theme.colors.discovery.window.closeButton};
	${darkGreenBorder(theme)}
`;

const WindowContentContainer = theme => `
	width: ${theme.calcSizeUnits(10)};
	${darkGreenBorder(theme)}
`;

const upperPartHeight = 43;

export const UpperInterface = styled(GeneralTab)`
	height: ${upperPartHeight}%;
	background-color: ${({ theme }) => theme.colors.discovery.window.contentContainer};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L} ${({ theme }) => theme.sizes.borderRadius.L} 0 0;
`;

export const InventoryContainer = styled(GeneralTab)`
	height: ${100 - upperPartHeight}%;
	background-color: ${({ theme }) => theme.colors.discovery.window.contentContainer};
	border-top: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.window.spacer};
	border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.L} ${({ theme }) => theme.sizes.borderRadius.L};
`;

const nonComponentStyles = {
	WindowContainer,
	NavBar,
	NavButton,
	PressedNavButton,
	NavSpacer,
	CloseButton,
	WindowContentContainer,
};
export default nonComponentStyles;
