import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';

export const CoinsButton = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(2)};
	background-color: ${({ theme }) => theme.colors.coins.button};
`;

export const Tab = styled(GeneralTab)`
	width: ${({ theme }) => theme.calcHeightUnits(4)};
	height: ${({ theme }) => theme.calcHeightUnits(2)};
	background-color: ${({ theme }) => theme.colors.coins.tab};
`;

export const MoreCoinsButton = styled(GeneralButton)`
	height: ${({ theme }) => theme.sizes.buttonsHeight.M};
	padding: 0 ${({ theme }) => theme.sizes.padding.M};
	margin-top: ${({ theme }) => theme.sizes.padding.M};
	background-color: ${({ theme }) => theme.colors.coins.moreCoinsButton};
	font-size: ${({ theme }) => theme.sizes.text.S};
	text-transform: none;
`;
