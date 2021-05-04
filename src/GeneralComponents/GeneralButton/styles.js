import styled from 'styled-components';
import theme from 'theme';

export const GeneralButton = styled.div`
	height: ${theme.componentsSizes.buttons.L};
	${theme.centerItems}
	border-radius: ${theme.sizes.b_radius};
	font-size: ${theme.sizes.text.major};
	cursor: pointer;
	user-select: none;
	text-transform: uppercase;
	border: ${theme.sizes.border} solid ${theme.colors.borders};

	&:hover {
		filter: brightness(115%) saturate(65%);
	}

	&:active {
		filter: brightness(87%) saturate(100%);
	}
`;
