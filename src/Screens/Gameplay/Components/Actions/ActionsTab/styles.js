import styled from 'styled-components';
import GeneralTab from 'GeneralComponents/GeneralTab/styles';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';

export const MoreActionsButton = styled(GeneralButton)`
	width: fit-content;
	height: ${({ theme }) => theme.componentsSizes.buttons.M};
	background-color: #ffa500;
	margin-right: auto;
	margin-left: auto;
	margin-top: ${({ theme }) => theme.sizes.padding};
	padding: 0 ${({ theme }) => theme.sizes.padding};
	border: ${({ theme }) => theme.sizes.border} solid chocolate;
`;

export const Tab = styled(GeneralTab)`
	background-color: sandybrown;
`;

export const TabItem = styled.div`
	${({ theme }) => theme.centerItems}
	justify-content: space-between;
	font-size: ${({ theme }) => theme.sizes.text.minor};
	background-color: rgb(252, 202, 156);
	border-radius: ${({ theme }) => theme.sizes.b_radius};
	padding: ${({ theme }) => theme.sizes.padding};
	margin-top: ${({ isFirst }) => {
		if (isFirst) return '0';
		else return ({ theme }) => theme.sizes.b_radius;
	}};
	user-select: none;
`;

export const DragHandle = styled.img`
	${({ theme }) => theme.componentsSizes.smallIcons};
`;
DragHandle.defaultProps = {
	src: hamburgerMenuIcon,
	alt: 'three lines to show you can select it',
};

export const AbortButton = styled.img`
	${({ theme }) => theme.componentsSizes.smallIcons};
	cursor: pointer;
`;
AbortButton.defaultProps = {
	src: xIcon,
	onClick: () => console.log('action abort triggered at an actionTabItem'),
};
