import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.sizes.components.craftingButton};
	height: ${({ theme }) => theme.sizes.components.craftingButton};
	background-color: ${({ theme }) => theme.colors.crafting.button};
	border-radius: 50%;
	line-height: ${({ theme }) => theme.sizes.components.craftingButton};
	font-size: ${({ theme }) => theme.sizes.text.XL};
`;
