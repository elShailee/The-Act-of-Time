import styled from 'styled-components';

export const Container = styled.div`
	width: ${({ theme }) => theme.calcHeightUnits(32)}; //set the 16:9 ratio
	height: ${({ theme }) => theme.calcHeightUnits(18)};
	position: absolute;
	left: calc(50vw - ${({ theme }) => theme.calcHeightUnits(16)}); //horizontal center
	top: calc(50vh - ${({ theme }) => theme.calcHeightUnits(9)}); //vetical centering
	font-family: Helvetica;
	font-size: ${({ theme }) => theme.sizes.text.L};
	${({ theme }) => theme.customStyles.centerItems}
	${({ theme }) => theme.customStyles.nonSelectable};
`;

/*-------------------
  Button Containers
-------------------*/

export const TopRightContainer = styled.div`
	position: absolute;
	right: ${({ theme }) => theme.sizes.padding.XXL};
	top: ${({ theme }) => theme.sizes.padding.XXL};
	display: flex;
`;

export const TopLeftContainer = styled.div`
	position: absolute;
	left: ${({ theme }) => theme.sizes.padding.XXL};
	top: ${({ theme }) => theme.sizes.padding.XXL};
	display: flex;
`;

export const BotRightContainer = styled.div`
	position: absolute;
	right: ${({ theme }) => theme.sizes.padding.XXL};
	bottom: ${({ theme }) => theme.sizes.padding.XXL};
`;
