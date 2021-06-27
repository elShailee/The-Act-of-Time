import styled from 'styled-components';

export const BG = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(32)};
	height: ${({ theme }) => theme.calcSizeUnits(18)};
	position: absolute;
	background-color: ${({ theme }) => theme.colors.map.bg};
`;

export const NavToolsContainer = styled.div`
	position: absolute;
	bottom: ${({ theme }) => theme.sizes.padding.XXL};
	left: ${({ theme }) => theme.sizes.padding.XXL};
	width: fit-content;
`;
export const ZoomSlider = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(1)};
	height: ${({ theme }) => theme.calcSizeUnits(4)};
	margin-bottom: ${({ theme }) => theme.calcSizeUnits(-0.5)};
	background-color: ${({ theme }) => theme.colors.map.zoomSlider};
	writing-mode: vertical-lr;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XXL};
	${({ theme }) => theme.customStyles.centerItems}
`;

const compassSize = 4;
const compassPolygon = calcHU => {
	return `
    clip-path: polygon(
      0             							${calcHU(compassSize / 2)},
      ${calcHU(compassSize / 2)}  ${calcHU(compassSize)},
      ${calcHU(compassSize)}  		${calcHU(compassSize / 2)},
      ${calcHU(compassSize / 2)}  0
    );
  `;
};
export const MapCompass = styled.div`
	${({ theme }) => compassPolygon(theme.calcSizeUnits)}
	height: ${({ theme }) => theme.calcSizeUnits(compassSize)};
	width: ${({ theme }) => theme.calcSizeUnits(compassSize)};
	background: ${({ theme }) => theme.colors.map.compass};
	line-height: ${({ theme }) => theme.calcSizeUnits(compassSize)};
`;
