import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import theme from 'theme';

export const Container = styled.div`
	width: ${theme.sizes.units.height(6)};
	right: ${theme.sizes.units.height(1)};
`;

export const Button = styled(GeneralButton)`
	background-color: khaki;
	height: ${theme.sizes.units.height(1)};
`;
