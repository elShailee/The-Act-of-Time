import styled from 'styled-components';
import disastersData from 'ExampleData/disastersExampleData';
import { getDisasterImage } from 'Assets/disasters/lib';
import { GeneralButton } from 'GeneralComponents/GeneralButton/styles';
import { GeneralTab } from 'GeneralComponents/GeneralTab/styles';

export const Container = styled.div`
	position: absolute;
	left: ${({ theme }) => theme.sizes.padding.XXL};
	top: ${({ theme }) => theme.calcSizeUnits(6)};
	${({ theme }) => theme.customStyles.centerItems}
`;

export const CounterContainer = styled(GeneralTab)`
	height: ${({ theme }) => theme.calcSizeUnits(0.75)};
	margin-left: ${({ theme }) => theme.sizes.padding.M};
	background-color: ${({ theme }) => theme.colors.disasters.counter};
`;

export const ImageButtonWrapper = styled(GeneralButton)`
	width: ${({ theme }) => theme.sizes.icons.XL};
	height: ${({ theme }) => theme.sizes.icons.XL};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	background-color: ${({ theme }) => theme.colors.disasters.image};
	${({ theme }) => theme.customStyles.noBorderShading};
	overflow: hidden;
`;

export const Image = styled.img`
	height: 100%;
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	${({ theme }) => theme.customStyles.nonSelectable};
`;

Image.defaultProps = {
	src: getDisasterImage(disastersData.image),
};
