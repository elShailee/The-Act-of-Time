import styled from 'styled-components';
import GeneralTab from 'GeneralComponents/GeneralTab/styles';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';
import theme from 'theme';

export const MoreActionsButton = styled(GeneralButton)`
	width: 50%;
	height: ${theme.componentsSizes.buttons.M};
	background-color: #ffa500;
	margin-right: auto;
	margin-left: auto;
	margin-top: ${theme.sizes.padding};
	border: ${theme.sizes.border} solid chocolate;
`;

export const Tab = styled(GeneralTab)`
	background-color: sandybrown;
`;

export const TabItem = styled.div`
	${theme.centerItems}
	justify-content: space-between;
	font-size: ${theme.sizes.text.minor};
	background-color: rgb(252, 202, 156);
	border-radius: ${theme.sizes.b_radius};
	padding: ${theme.sizes.padding};
	margin-top: ${({ isFirst }) => {
		if (isFirst) return '0';
		else return theme.sizes.b_radius;
	}};
	user-select: none;
`;

export const DragHandle = styled.img`
	${theme.componentsSizes.smallIcons};
`;
DragHandle.defaultProps = {
	src: hamburgerMenuIcon,
	alt: 'three lines to show you can select it',
};

export const AbortButton = styled.img`
	${theme.componentsSizes.smallIcons};
	cursor: pointer;
`;
AbortButton.defaultProps = {
	src: xIcon,
	onClick: () => console.log('action abort triggered at an actionTabItem'),
};
