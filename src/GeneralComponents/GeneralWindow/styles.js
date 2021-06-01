import styled from 'styled-components';
import { GeneralCloseButton } from 'GeneralComponents/GeneralCloseButton/styles';

/* ~Window~ */

const positions = {
	centered: theme => `
  `,
	rightSided: theme => `
	  right: ${theme.calcHeightUnits(1)};
  `,
};

export const WindowContainer = styled.div`
	height: ${({ theme }) => theme.calcHeightUnits(11.5)};
	width: fit-content;
	position: absolute;
	transform: translateX(-50%);
	top: ${({ theme }) => theme.calcHeightUnits(3.8)};
	display: flex;
	flex-direction: column;

	background-color: ${({ theme }) => theme.colors.generalWindow.bg};
	padding: ${({ theme }) => theme.sizes.padding.M};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.M};
	${({ theme, position }) => positions[position](theme)}
`;

/* ~Title~ */
export const TitleContainer = styled.div`
	${({ theme }) => theme.customStyles.centerItems}
`;

export const CloseButton = styled(GeneralCloseButton)`
	margin-left: auto;
`;

/* ~Content~ */
export const ContentContainer = styled.div`
	height: 100%;
	min-width: ${({ theme }) => theme.calcHeightUnits(6)};
	margin-top: ${({ theme }) => theme.sizes.padding.S};
	text-align: center;

	background: ${({ theme }) => theme.colors.generalWindow.contentBg};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.L};
`;
