import styled from 'styled-components';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';
import GeneralTab from 'GeneralComponents/GeneralTab/styles';

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(4)};
	background-color: ${({ theme }) => theme.colors.energy.button};
	margin-right: ${({ theme }) => theme.calcHeightUnits(1)};
`;

export const Tab = styled(GeneralTab)`
	width: ${({ theme }) => theme.calcHeightUnits(4)};
	height: ${({ theme }) => theme.calcHeightUnits(2)};
	background-color: ${({ theme }) => theme.colors.energy.tab};
	padding-top: ${({ theme }) => theme.sizes.padding.L};
	display: grid;
	grid-template-columns: 90px 60px;
	grid-column-gap: 10px;
	grid-template-rows: 20px 10px 10px 20px;
`;

// export const MoreCoinsButton = styled(GeneralButton)`
// 	height: ${({ theme }) => theme.sizes.buttonsHeight.M};
// 	padding: 0 ${({ theme }) => theme.sizes.padding.M};
// 	margin-top: ${({ theme }) => theme.sizes.padding.M};
// 	background-color: ${({ theme }) => theme.colors.energy.moreEnergyButton};
// 	font-size: ${({ theme }) => theme.sizes.text.minor};
// 	text-transform: none;
// `;
