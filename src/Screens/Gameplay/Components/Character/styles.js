import styled from 'styled-components';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { getImageFromLib } from 'Utils/utilFuncs';
import { lib } from 'Assets/character/lib';

// consts for polygon
const CIB_width = 7;
const CIB_height = CIB_width * 0.4;
const CIB_halfOfWidth = CIB_width / 2;
const CIB_rightSideHeight = CIB_height * 0.6;

// consts for sub-components
const CIB_textBoxWidth = CIB_width * 0.4;
const CIB_imageSize = CIB_width * 0.32;
const CIB_bigFontSize = CIB_width * 0.08;
const CIB_fontSize = CIB_width * 0.06;
const xpBarHeight = CIB_height * 0.05;
const xpCapacity_width = CIB_width * 0.33;
const xpQuantity_width = CIB_width * 0.16;

export const BarContainer = styled.div`
	position: absolute;
	left: calc(50% - ${({ theme }) => theme.calcHeightUnits(CIB_halfOfWidth)});
	top: ${({ theme }) => theme.sizes.padding.XL};
`;

const bgPolygon = calcHU => {
	return `
    clip-path: polygon(
      /* center left */					   		0                         					${calcHU(CIB_height * 0.375)},
      /* top left */            			${calcHU(CIB_width * 0.1)} 					0,
      /* top right */           			${calcHU(CIB_width * 0.92)} 				0,
      /* center right */         			${calcHU(CIB_width)}        				${calcHU(CIB_height * 0.2)},
      /* bottom right */        			${calcHU(CIB_width * 0.86)} 				${calcHU(CIB_rightSideHeight)},
      /* center center */       			${calcHU(CIB_width * 0.46)} 				${calcHU(CIB_rightSideHeight)},
      /* bottom center */       			${calcHU(CIB_width * 0.38)} 				${calcHU(CIB_height)},
      /* bottom left */         			${calcHU(CIB_width * 0.1)}  				${calcHU(CIB_height)}
    );
  `;
};

export const BarBG = styled.div`
	width: ${({ theme }) => theme.calcHeightUnits(CIB_width)};
	height: ${({ theme }) => theme.calcHeightUnits(CIB_height)};
	background-color: ${({ theme }) => theme.colors.characterInfoBar.bg};
	text-align: center;
	${({ theme }) => bgPolygon(theme.calcHeightUnits)}
`;

export const TextCointainer = styled.div`
	position: absolute;
	right: ${({ theme }) => theme.calcHeightUnits(CIB_height * 0.11)};
	width: ${({ theme }) => theme.calcHeightUnits(CIB_halfOfWidth)};
	top: ${({ theme }) => theme.calcHeightUnits(CIB_height * 0.11)};
`;

const textBox = (theme, fontSize) => `
	width: ${theme.calcHeightUnits(CIB_textBoxWidth)};
  color: ${theme.colors.characterInfoBar.text};
	font-size: ${theme.calcHeightUnits(fontSize)};
`;

export const NameText = styled.div`
	${({ theme }) => textBox(theme, CIB_bigFontSize)}
`;

export const LevelText = styled.div`
	${({ theme }) => textBox(theme, CIB_fontSize)}
`;

export const Image = styled.img`
	width: ${({ theme }) => theme.calcHeightUnits(CIB_imageSize)};
	height: ${({ theme }) => theme.calcHeightUnits(CIB_imageSize)};
	position: absolute;
	left: ${({ theme }) => theme.calcHeightUnits(CIB_height * 0.11)};
	padding: ${({ theme }) => theme.calcHeightUnits((CIB_height - CIB_imageSize) / 2)};
	border-radius: 50%;
	${({ theme }) => theme.customStyles.clickable}
	${({ theme }) => theme.customStyles.nonSelectable};
`;

const onCharcterImageClick = () => {
	//this is a on click triger for the Character Info window please change when creating the window
	console.log('this trigger exist on characterInfoBar.js');
};

Image.defaultProps = {
	src: getImageFromLib(characterInfo.characterImage, lib),
	onClick: onCharcterImageClick,
	alt: 'character face',
};

const xpBars = (theme, width) => `
	position: absolute;
	height: ${theme.calcHeightUnits(xpBarHeight)};
	top: ${theme.calcHeightUnits(CIB_rightSideHeight)};
	left: ${theme.calcHeightUnits(CIB_width * 0.45)};
  clip-path: polygon(
		0                                      0,
		${theme.calcHeightUnits(width)}        0,
		${theme.calcHeightUnits(width * 0.92)} ${theme.calcHeightUnits(xpBarHeight)},
		0                                      ${theme.calcHeightUnits(xpBarHeight)}
  );
`;

export const XPCapacity = styled.div`
	${({ theme }) => xpBars(theme, xpCapacity_width)}
	background-color: ${({ theme }) => theme.colors.characterInfoBar.xpbg};
	width: ${({ theme }) => theme.calcHeightUnits(xpCapacity_width)};
`;

export const XPQuantity = styled.div`
	${({ theme }) => xpBars(theme, xpQuantity_width)}
	background-color: ${({ theme }) => theme.colors.characterInfoBar.xp};
	width: ${({ theme }) => theme.calcHeightUnits(xpQuantity_width)};
`;
