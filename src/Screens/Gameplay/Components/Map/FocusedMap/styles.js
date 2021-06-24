import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	left: ${({ theme, numOfCols }) => theme.calcSizeUnits((32 - numOfCols) / 2)};
	bottom: 0;
`;

export const FmRow = styled.div`
	display: flex;
`;

const TileSize = 1;
export const Tile = styled.div`
	height: ${({ theme }) => theme.calcSizeUnits(TileSize)};
	width: ${({ theme }) => theme.calcSizeUnits(TileSize)};
	outline: ${({ theme }) => theme.calcSizeUnits(0.01)} solid white;
`;
