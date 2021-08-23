import styled from 'styled-components';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';

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
	${darkGreenBorder(theme)}
	height:92.5%;					//compansation for navbar height
`;

const upperPartHeight = 43; //height of top part in %'s of contentContainer

export const UpperInterface = styled(GeneralTab)`
	height: ${upperPartHeight}%;
	background-color: ${({ theme }) => theme.colors.discovery.window.contentContainer};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L} ${({ theme }) => theme.sizes.borderRadius.L} 0 0;
`;

export const InventoryContainer = styled(GeneralTab)`
	height: ${100 - upperPartHeight}%;
	::-webkit-scrollbar {
		display: none;
	}
	padding: 0px;
	justify-content: start;
	overflow-y: scroll;
	background-color: ${({ theme }) => theme.colors.discovery.window.contentContainer};
	border-top: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.window.spacer};
	border-radius: 0 0 ${({ theme }) => theme.sizes.borderRadius.L} ${({ theme }) => theme.sizes.borderRadius.L};
`;

export const ItemImage = styled.img`
	width: ${({ theme }) => theme.sizes.icons.M};
	height: ${({ theme }) => theme.sizes.icons.M};
	${({ theme }) => theme.customStyles.nonSelectable}
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
