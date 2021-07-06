import styled from 'styled-components';
import { GeneralCloseButton } from 'GeneralComponents/GeneralCloseButton/styles';
import { applyCustomStyle } from 'Utils/styleUtils';

/* ~Window~ */

const positions = {
	center: theme => `
		transform: translateX(-50%);
  `,
	rightSided: theme => `
	  right: ${theme.calcSizeUnits(4.5)};
  `,
};

export const WindowContainer = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(11.5)};
	width: fit-content;
	position: absolute;
	top: ${({ theme }) => theme.calcSizeUnits(3.8)};
	display: flex;
	flex-direction: column;

	background-color: ${({ theme }) => theme.colors.generalWindow.bg};
	padding: ${({ theme }) => theme.sizes.padding.M};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	${({ theme, position }) => positions[position](theme)}
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;

/* ~Title~ */
export const TitleContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;

export const CloseButton = styled(GeneralCloseButton)`
	margin-left: auto;
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;

/* ~Content~ */
export const ContentContainer = styled.div`
	height: 100%;
	min-width: ${({ theme }) => theme.calcSizeUnits(6)};
	margin-top: ${({ theme }) => theme.sizes.padding.S};

	background: ${({ theme }) => theme.colors.generalWindow.contentBg};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
	${({ customStyle, theme }) => applyCustomStyle(customStyle, theme)}
`;
