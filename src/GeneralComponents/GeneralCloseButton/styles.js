import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import theme from 'theme';

export const CloseButton = styled(GeneralButton)`
	margin-left: auto;
	width: ${theme.sizes.units.height};
	height: calc(0.75 * ${theme.sizes.units.height});
	background-color: orchid;
	border: purple solid;
`;
