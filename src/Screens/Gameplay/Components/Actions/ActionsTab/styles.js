import styled from 'styled-components';
import GeneralTab from 'GeneralComponents/GeneralTab/styles';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';

export const MoreActionsButton = styled(GeneralButton)`
	background-color: #ffa500;
	padding: 0.5rem;
	width: 50%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 0.5rem;
	border: 1px solid chocolate;
`;

export const Tab = styled(GeneralTab)`
	background-color: sandybrown;
`;

export const TabItem = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgb(252, 202, 156);
	border-radius: 5px;
	padding: 10px;
	margin-top: 5px;
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
