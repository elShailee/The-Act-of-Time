import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import styled from 'styled-components';

export const CraftingInterfaceContainer = styled(GeneralTab)`
	flex-direction: row;
`;

export const TestingStyledDroppable = styled.div`
	width: ${({ theme }) => theme.sizes.icons.L};
	height: ${({ theme }) => theme.sizes.icons.L};
	outline: ${({ theme }) => theme.sizes.border.S} solid ${({ theme }) => theme.colors.discovery.crafting.droppableOutline};
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.discovery.crafting.droppableBG};
	${({ theme }) => theme.customStyles.centerItems}
`;

export const LocalSvg = styled.svg`
	width: ${({ theme }) => theme.sizes.icons.XXL};
	height: ${({ theme }) => theme.sizes.icons.XXL};
	margin: 0 ${({ theme }) => theme.sizes.padding.XXL};
	fill: ${({ theme }) => theme.colors.discovery.crafting.arrow};
`;
