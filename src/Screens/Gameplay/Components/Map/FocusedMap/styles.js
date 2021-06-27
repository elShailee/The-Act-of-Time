import styled from 'styled-components';
import { getTileImg } from 'Assets/FocusedMap/lib';

const tileSize = 0.92;

export const Container = styled.div`
	position: absolute;
	left: ${({ theme, numOfCols }) => theme.calcSizeUnits((32 - numOfCols * tileSize) / 2)};
	bottom: ${({ theme }) => theme.calcSizeUnits(tileSize / 2)};
`;

export const FmRow = styled.div`
	${({ theme }) => theme.customStyles.centerItems};
`;

export const Tile = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(tileSize)};
	width: ${({ theme }) => theme.calcSizeUnits(tileSize)};
	${({ tileData, theme }) => {
		if (tileData.type === 'image') {
			return `
				background-image: url(${getTileImg(tileData.value)});
				background-size: cover;
			`;
		}
		if (tileData.type === 'border') {
			return `
				background-color: ${theme.colors.focusedMap.border};
			`;
		}
	}}
`;
