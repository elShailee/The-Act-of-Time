import styled from 'styled-components';
import GeneralTab from 'GeneralComponents/GeneralTab';
import { GeneralButton } from 'GeneralComponents/GeneralButtons';

const MoreActionsButton = styled(GeneralButton)`
	background-color: #ffa500;
	padding: 0.5rem;
	width: 50%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 0.5rem;
	border: 1px solid chocolate;
`;

const Tab = styled(GeneralTab)`
	background-color: sandybrown;
`;

const TabItem = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgb(252, 202, 156);
	border-radius: 5px;
	padding: 10px;
	margin-top: 5px;
	user-select: none;
`;

const DragHandle = styled.img`
	width: ${({ theme }) => theme.sizes.icons.s};
	height: ${({ theme }) => theme.sizes.icons.s};
`;

const AbortButton = styled.img`
	width: ${({ theme }) => theme.sizes.icons.s};
	height: ${({ theme }) => theme.sizes.icons.s};
	cursor: pointer;
`;

export { MoreActionsButton, Tab, TabItem, DragHandle, AbortButton };
