import styled from 'styled-components';

export const BG = styled.div`
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.gameplayScreen.spacer};
`;

export const Container = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(32)}; //set the 16:9 ratio
	height: ${({ theme }) => theme.calcSizeUnits(18)};
	position: absolute;
	left: calc(50vw - ${({ theme }) => theme.calcSizeUnits(16)}); //horizontal center
	top: calc(50vh - ${({ theme }) => theme.calcSizeUnits(9)}); //vetical centering
	font-family: Helvetica;
	font-size: ${({ theme }) => theme.sizes.text.M};
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
