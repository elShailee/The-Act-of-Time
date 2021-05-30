import styled from 'styled-components';
import disastersData from 'ExampleData/disastersExampleData';
import { getImageFromLib } from 'Utils/utilFuncs';
import { lib } from 'Assets/disasters/lib';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';

export const Container = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	left: ${({ theme }) => theme.calcHeightUnits(1)};
	top: ${({ theme }) => theme.calcHeightUnits(6)};
`;

export const CounterContainer = styled(GeneralTab)`
	height: ${({ theme }) => theme.calcHeightUnits(0.75)};
	margin-left: ${({ theme }) => theme.sizes.padding.M};
	background-color: ${({ theme }) => theme.colors.disasters.counter};
`;

export const ImageButtonWrapper = styled(GeneralButton)`
	width: ${({ theme }) => theme.calcHeightUnits(1.5)};
	height: ${({ theme }) => theme.calcHeightUnits(1.5)};
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.disasters.image};
	border-color: rgba(0, 0, 0, 0); //make border-color	 transparent to override semi-opace default border.
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	-webkit-user-drag: none;
`;

Image.defaultProps = {
	src: getImageFromLib(disastersData.image, lib),
};
