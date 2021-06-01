import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';

export const discoveryButtonSize = 2.5;

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	height: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: 50%;
	line-height: ${({ theme }) => theme.calcHeightUnits(discoveryButtonSize)};
	font-size: ${({ theme }) => theme.sizes.text.XXL};
`;
