import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import styled from 'styled-components';

export const NavBar = styled(GeneralTab)`
	background-color: ${({ theme }) => theme.colors.generalNavBar.defaultBG};
	width: 100%;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 0 ${({ theme }) => theme.sizes.padding.M};
`;

export const NavButton = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.generalNavBar.defaultBG};
	height: ${({ theme }) => theme.sizes.buttonsHeight.M};
	border: 0;
	padding: 0 ${({ theme }) => theme.sizes.padding.M};
`;

export const Spacer = styled.div``;
Spacer.defaultProps = {
	children: '|',
};
