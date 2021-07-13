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

export const WindowContainerStyles = theme => `
	background-color: ${theme.colors.discovery.window.container};
	${darkGreenBorder(theme)}
`;

export const BarStyle = theme => `
	height: ${theme.sizes.buttonsHeight.M};
	margin-right: ${theme.sizes.padding.S};
	${darkGreenBorder(theme)}
	background-color: ${theme.colors.discovery.window.navBar};
`;

export const ButtonStyle = theme => `
	background-color: ${theme.colors.discovery.window.navBar};
`;

export const PressedButtonStyle = theme => `
	background-color: ${theme.colors.discovery.window.pressedNavButton};
`;

export const SpacerStyle = theme => `
	color: ${theme.colors.discovery.window.navSpacer};
`;

export const CloseButtonStyle = theme => `
	background-color: ${theme.colors.discovery.window.closeButton};
	${darkGreenBorder(theme)}
`;

export const WindowContentContainerStyles = theme => `
	width: ${theme.calcSizeUnits(10)};
	${darkGreenBorder(theme)}
`;

const upperInterfacesStyles = theme => `
	height: 43%;
	background-color: ${theme.colors.discovery.window.contentContainer};
	border-radius: ${theme.sizes.borderRadius.L} ${theme.sizes.borderRadius.L} 0 0;
	${theme.customStyles.centerItems}
`;

export const CraftContainer = styled(GeneralTab)`
	${({ theme }) => upperInterfacesStyles(theme)}
`;

export const HarvestContainer = styled(GeneralTab)`
	${({ theme }) => upperInterfacesStyles(theme)}
`;

export const InventoryContainer = styled(GeneralTab)`
	background-color: ${({ theme }) => theme.colors.discovery.window.contentContainer};
	height: 57%;
	border-top: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.window.spacer};
	border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.L} ${({ theme }) => theme.sizes.borderRadius.L};
`;
