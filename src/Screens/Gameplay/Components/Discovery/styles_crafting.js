import styled from 'styled-components';

export const TestingStyledDroppable = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(1)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	outline: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.crafting.droppableOutline};
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.discovery.crafting.droppableBG};
	${({ theme }) => theme.customStyles.centerItems}
`;
