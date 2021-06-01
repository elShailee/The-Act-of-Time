import styled from 'styled-components';

export const BG = styled.div`
	width: ${({ theme }) => theme.calcHeightUnits(32)};
	height: ${({ theme }) => theme.calcHeightUnits(18)};
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
	width: ${({ theme }) => theme.calcHeightUnits(1)};
	height: ${({ theme }) => theme.calcHeightUnits(4)};
	margin-bottom: ${({ theme }) => theme.calcHeightUnits(-0.5)};
	background-color: ${({ theme }) => theme.colors.map.zoomSlider};
	writing-mode: vertical-lr;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XXL};
	${({ theme }) => theme.customStyles.centerItems}
`;

const compassSize = 4;
const compassPolygon = calcHU => {
	return `
    clip-path: polygon(
      0             ${calcHU(compassSize / 2)},
      ${calcHU(compassSize / 2)}  ${calcHU(compassSize)},
      ${calcHU(compassSize)}  ${calcHU(compassSize / 2)},
      ${calcHU(compassSize / 2)}  0
    );
  `;
};
export const MapCompass = styled.div`
	${({ theme }) => compassPolygon(theme.calcHeightUnits)}
	height: ${({ theme }) => theme.calcHeightUnits(compassSize)};
	width: ${({ theme }) => theme.calcHeightUnits(compassSize)};
	background: ${({ theme }) => theme.colors.map.compass};
	line-height: ${({ theme }) => theme.calcHeightUnits(compassSize)};
	text-align: center;
`;
