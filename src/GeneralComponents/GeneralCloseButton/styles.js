import styled from 'styled-components';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import theme from 'theme';

export const CloseButton = styled(GeneralButton)`
	margin-left: auto;
	width: ${theme.HU};
	height: ${theme.HUnits(0.75)};
	background-color: orchid;
	border: purple solid;
`;
