import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import styled from 'styled-components';
import { applyCustomStyle } from 'Utils/styleUtils';

export const Bar = styled(GeneralTab)`
	width: 100%;
	height: min(100%, ${({ theme }) => theme.sizes.buttonsHeight.M});
	background-color: ${({ theme }) => theme.colors.generalNavBar.defaultBG};

	flex-direction: row;
	justify-content: space-evenly;
	padding: 0;
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;

export const Button = styled(GeneralButton)`
	background-color: ${({ theme }) => theme.colors.generalNavBar.defaultBG};
	width: 100%;
	height: 100%;
	padding: 0 ${({ theme }) => theme.sizes.padding.M};
	text-transform: none;
	${({ theme }) => theme.customStyles.noBorderShading}
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
	${({ customPressedStyle, theme }) => applyCustomStyle(customPressedStyle, theme)}
`;

export const Spacer = styled.div`
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;
Spacer.defaultProps = {
	children: '|',
};
