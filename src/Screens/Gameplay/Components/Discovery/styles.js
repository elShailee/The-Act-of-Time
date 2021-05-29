import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.sizes.components.discoveryButton};
	height: ${({ theme }) => theme.sizes.components.discoveryButton};
	background-color: ${({ theme }) => theme.colors.discovery.button};
	border-radius: 50%;
	line-height: ${({ theme }) => theme.sizes.components.discoveryButton};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;
