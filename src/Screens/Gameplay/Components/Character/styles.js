import styled from 'styled-components';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { getCharacterImage } from 'Assets/character/lib';

// CIB = CharacterInfoBar
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
	left: calc(50% - ${({ theme }) => theme.calcSizeUnits(CIB_halfOfWidth)});
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
	width: ${({ theme }) => theme.calcSizeUnits(CIB_width)};
	height: ${({ theme }) => theme.calcSizeUnits(CIB_height)};
	background-color: ${({ theme }) => theme.colors.characterInfoBar.bg};
	${({ theme }) => bgPolygon(theme.calcSizeUnits)}
`;

export const TextCointainer = styled.div`
	width: ${({ theme }) => theme.calcSizeUnits(CIB_halfOfWidth)};
	position: absolute;
	top: ${({ theme }) => theme.calcSizeUnits(CIB_height * 0.11)};
	right: ${({ theme }) => theme.calcSizeUnits(CIB_height * 0.11)};
	${({ theme }) => theme.customStyles.centerItems}
	flex-direction: column;
`;

const textBox = (theme, fontSize) => `
	width: ${theme.calcSizeUnits(CIB_textBoxWidth)};
  color: ${theme.colors.characterInfoBar.text};
	font-size: ${theme.calcSizeUnits(fontSize)};
`;

export const NameText = styled.div`
	${({ theme }) => textBox(theme, CIB_bigFontSize)}
`;

export const LevelText = styled.div`
	${({ theme }) => textBox(theme, CIB_fontSize)}
`;

export const Image = styled.img`
	width: ${({ theme }) => theme.calcSizeUnits(CIB_imageSize)};
	height: ${({ theme }) => theme.calcSizeUnits(CIB_imageSize)};
	position: absolute;
	left: ${({ theme }) => theme.calcSizeUnits(CIB_height * 0.11)};
	padding: ${({ theme }) => theme.calcSizeUnits((CIB_height - CIB_imageSize) / 2)};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.Max};
	${({ theme }) => theme.customStyles.clickable}
	${({ theme }) => theme.customStyles.nonSelectable}
`;

const onCharcterImageClick = () => {
	//this is a on click triger for the Character Info window please change when creating the window
	console.log('this trigger exist on characterInfoBar.js');
};

Image.defaultProps = {
	src: getCharacterImage(characterInfo.characterImage),
	onClick: onCharcterImageClick,
	alt: 'character face',
};

const xpBars = (theme, width) => `
	position: absolute;
	height: ${theme.calcSizeUnits(xpBarHeight)};
	top: ${theme.calcSizeUnits(CIB_rightSideHeight)};
	left: ${theme.calcSizeUnits(CIB_width * 0.45)};
  clip-path: polygon(
		0                                      0,
		${theme.calcSizeUnits(width)}        0,
		${theme.calcSizeUnits(width * 0.92)} ${theme.calcSizeUnits(xpBarHeight)},
		0                                      ${theme.calcSizeUnits(xpBarHeight)}
  );
`;

export const XPCapacity = styled.div`
	${({ theme }) => xpBars(theme, xpCapacity_width)}
	background-color: ${({ theme }) => theme.colors.characterInfoBar.xpbg};
	width: ${({ theme }) => theme.calcSizeUnits(xpCapacity_width)};
`;

export const XPQuantity = styled.div`
	${({ theme }) => xpBars(theme, xpQuantity_width)}
	background-color: ${({ theme }) => theme.colors.characterInfoBar.xp};
	width: ${({ theme }) => theme.calcSizeUnits(xpQuantity_width)};
`;
