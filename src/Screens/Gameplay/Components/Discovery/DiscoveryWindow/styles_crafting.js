import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';
import styled from 'styled-components';

export const CraftingInterfaceContainer = styled(GeneralTab)`
	flex-direction: row;
`;

export const ArrowSvg = styled.svg`
	width: ${({ theme }) => theme.sizes.icons.XXL};
	height: ${({ theme }) => theme.sizes.icons.XXL};
	margin: 0 ${({ theme }) => theme.sizes.padding.XXL};
	fill: ${({ theme }) => theme.colors.discovery.crafting.arrow};
`;
