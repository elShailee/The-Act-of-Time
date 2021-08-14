import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import styled from 'styled-components';

export const CraftingInterfaceContainer = styled(GeneralTab)`
	flex-direction: row;
`;

export const TestingStyledDroppable = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(1)};
	height: ${({ theme }) => theme.calcSizeUnits(1)};
	outline: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.crafting.droppableOutline};
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.discovery.crafting.droppableBG};
	${({ theme }) => theme.customStyles.centerItems}
`;
