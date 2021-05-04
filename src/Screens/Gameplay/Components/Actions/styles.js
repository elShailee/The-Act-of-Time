import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import styled from 'styled-components';
import theme from 'theme';

export const Container = styled.div`
	width: calc(6 * ${theme.sizes.units.height});
	right: ${theme.sizes.units.height};
`;

export const Button = styled(GeneralButton)`
	background-color: khaki;
`;
