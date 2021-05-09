import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import theme from 'theme';

export const Container = styled.div`
	width: ${theme.HUnits(6)};
	right: ${theme.HU};
`;

export const Button = styled(GeneralButton)`
	background-color: khaki;
`;
