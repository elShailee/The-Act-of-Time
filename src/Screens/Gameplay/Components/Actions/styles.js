import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';

export const Container = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(7)};
`;

export const Button = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.actions.button};
`;
