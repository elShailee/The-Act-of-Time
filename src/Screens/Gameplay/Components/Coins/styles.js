import styled from 'styled-components';
import GeneralButton from 'GeneralComponents/GeneralButton/styles';

export const Button = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(2)};
	background-color: #ffa500;
`;
