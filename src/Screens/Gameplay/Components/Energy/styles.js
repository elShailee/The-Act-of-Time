import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import Image from 'Assets/placeholderIcon.png';

// Button

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcSizeUnits(4)};
	margin-right: ${({ theme }) => theme.sizes.padding.XXL};
	background-color: ${({ theme }) => theme.colors.energy.button};
`;

// Tab - Exterior

export const Tab = styled(GeneralTab)`
	width: ${({ theme }) => theme.calcSizeUnits(4)};
	height: ${({ theme }) => theme.calcSizeUnits(2)};
	background-color: ${({ theme }) => theme.colors.energy.tab};
	display: grid;
	grid-template-columns: ${({ theme }) => theme.calcSizeUnits(1.75) + ' ' + theme.calcSizeUnits(1.5)};
	grid-column-gap: ${({ theme }) => theme.sizes.padding.M};
	grid-template-rows: ${({ theme }) =>
		theme.calcSizeUnits(0.5) + ' ' + theme.sizes.padding.M + ' ' + theme.sizes.padding.M + ' ' + theme.calcSizeUnits(0.5)};
`;

// Tab - Interior

const DataDisplay = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	height: 100%;
	font-size: ${({ theme }) => theme.sizes.text.XS};
	background-color: ${({ theme }) => theme.colors.energy.dataDisplay};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
`;

export const TimeUntillFull = styled(DataDisplay)`
	grid-row-start: 1;
	grid-row-end: 3;
`;

export const Amount = styled(DataDisplay)`
	grid-row-start: 1;
	grid-row-end: 2;
`;

export const RechargeRate = styled(DataDisplay)`
	grid-row-start: 4;
	grid-row-end: 5;
`;

export const MoreEnergyButton = styled(GeneralButton)`
	height: 100%;
	grid-row-start: 3;
	grid-row-end: 5;

	background-color: ${({ theme }) => theme.colors.energy.moreEnergyButton};
	font-size: ${({ theme }) => theme.sizes.text.S};
	text-transform: none;
	border: 0px;
`;

export const EnergyIcon = styled.img`
	width: ${({ theme }) => theme.sizes.icons.XS};
	height: ${({ theme }) => theme.sizes.icons.XS};
`;

EnergyIcon.defaultProps = {
	src: Image,
};
