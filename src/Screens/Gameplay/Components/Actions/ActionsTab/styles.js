import styled from 'styled-components';
import GeneralTab from 'GeneralComponents/GeneralTab/styles';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';
import hamburgerMenuIcon from 'Assets/hamburgerMenuIcon.png';
import xIcon from 'Assets/xIcon.png';

export const Tab = styled(GeneralTab)`
	background-color: ${({ theme }) => theme.colors.actionsMid};
`;

export const TabItem = styled.div`
	margin-top: ${({ isFirst }) => {
		if (isFirst) return '0';
		else return ({ theme }) => theme.sizes.borderRadius;
	}};
	padding: ${({ theme }) => theme.sizes.padding};
	background-color: ${({ theme }) => theme.colors.actionsPale};
	font-size: ${({ theme }) => theme.sizes.text.minor};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};
	${({ theme }) => theme.customStyles.nonSelectable}
	${({ theme }) => theme.customStyles.centerItems}
	justify-content: space-between;
`;

export const DragHandle = styled.img`
	${({ theme }) => theme.customStyles.smallIconsSize};
`;
DragHandle.defaultProps = {
	src: hamburgerMenuIcon,
	alt: 'three lines to show you can select it',
};

export const AbortButton = styled.img`
	${({ theme }) => theme.customStyles.smallIconsSize};
	cursor: pointer;
`;
AbortButton.defaultProps = {
	src: xIcon,
	onClick: () => console.log('action abort triggered at an actionTabItem'),
};

export const MoreActionsButton = styled(GeneralButton)`
	width: fit-content;
	height: ${({ theme }) => theme.sizes.buttonsHeight.M};
	margin-right: auto;
	margin-left: auto;
	margin-top: ${({ theme }) => theme.sizes.padding};
	padding: 0 ${({ theme }) => theme.sizes.padding};
	background-color: ${({ theme }) => theme.colors.actionsIntense};
`;
