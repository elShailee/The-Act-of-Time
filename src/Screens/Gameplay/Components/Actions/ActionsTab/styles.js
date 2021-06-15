import styled from 'styled-components';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';

export const Tab = styled(GeneralTab)`
	background-color: ${({ theme }) => theme.colors.actions.tabBg};
`;

export const ActionsDroppable = styled.div`
	width: 100%;
`;

export const TabItem = styled.div`
	margin-top: ${({ isFirst, theme }) => {
		if (isFirst) return '0';
		else return theme.sizes.borderRadius.M;
	}};
	padding: ${({ theme }) => theme.sizes.padding.M};
	background-color: ${({ theme }) => theme.colors.actions.itemBg};
	font-size: ${({ theme }) => theme.sizes.text.M};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	${({ theme }) => theme.customStyles.centerItems}
	justify-content: space-between;
`;

export const DragHandle = styled.img`
	width: ${({ theme }) => theme.sizes.components.smallIcons};
	height: ${({ theme }) => theme.sizes.components.smallIcons};
`;

DragHandle.defaultProps = {
	src: hamburgerMenuIcon,
	alt: 'three lines to show you can select it',
};

export const AbortButton = styled.img`
	width: ${({ theme }) => theme.sizes.components.smallIcons};
	height: ${({ theme }) => theme.sizes.components.smallIcons};
	${({ theme }) => theme.customStyles.clickable}
`;

AbortButton.defaultProps = {
	src: xIcon,
	onClick: () => console.log('action abort triggered at an actionTabItem'),
};

export const MoreActionsButton = styled(GeneralButton)`
	height: ${({ theme }) => theme.sizes.buttonsHeight.M};
	margin-top: ${({ theme }) => theme.sizes.padding.M};
	padding: 0 ${({ theme }) => theme.sizes.padding.M};
	background-color: ${({ theme }) => theme.colors.actions.moreActionsButton};
	font-size: ${({ theme }) => theme.sizes.text.M};
`;
