import styled from 'styled-components';

export const GeneralButton = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	border-radius: 5px;
	font-size: 14px;
	cursor: pointer;
	user-select: none;
	text-transform: uppercase;
	border: 1px solid;

	&:hover {
		filter: brightness(115%) saturate(65%);
	}

	&:active {
		filter: brightness(87%) saturate(100%);
	}
`;
