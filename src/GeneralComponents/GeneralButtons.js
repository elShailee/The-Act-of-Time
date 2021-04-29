import styled from 'styled-components';

const GeneralButton = styled.div`
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

const CloseButton = styled(GeneralButton)`
	margin-left: auto;
	width: 40px;
	height: 30px;
	background-color: orchid;
	border: 1px solid;
`;

export { GeneralButton, CloseButton };
