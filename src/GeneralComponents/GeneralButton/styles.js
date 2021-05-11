import styled from 'styled-components';

export const GeneralButton = styled.div`
	height: ${({ theme }) => theme.componentsSizes.buttons.L};
	/* background-color: ${({ color }) => color}; */
	${({ theme }) => theme.centerItems}
	border-radius: ${({ theme }) => theme.sizes.b_radius};
	font-size: ${({ theme }) => theme.sizes.text.major};
	cursor: pointer;
	user-select: none;
	text-transform: uppercase;
	border: ${({ theme }) => theme.sizes.border} solid rgba(0, 0, 0, 0.4);

	&:hover {
		filter: brightness(115%) saturate(65%);
	}

	&:active {
		filter: brightness(87%) saturate(100%);
	}
`;
