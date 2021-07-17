import styled from 'styled-components';

export const TestingStyledDroppable = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(1)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	border: ${({ theme }) => theme.sizes.border.S} solid gray;
	box-sizing: border-box;
	background-color: darkgray;
	${({ theme }) => theme.customStyles.centerItems}
`;

export const TestingStyledItem = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(0.75)};
	height: ${({ theme }) => theme.calcSizeUnits(0.75)};
	background-color: #66d;
`;
