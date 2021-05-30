import styled from 'styled-components';
import characterInfo from 'ExampleData/characterInfoExampleData';
import { getImageFromLib } from 'Utils/utilFuncs';
import { lib } from 'Assets/character/lib';

const CIB_width = 7;
const CIB_height = CIB_width * 0.4;
const CIB_textPartHeight = CIB_height * 0.6;
const halfOf_CIB_width = CIB_width / 2;
const CIB_text_width = CIB_width * 0.4;
const CIB_Image_size = CIB_width * 0.32;
const CIB_bigFontSize = CIB_width * 0.08;
const CIB_fontSize = CIB_width * 0.06;
const CIB_font = `Helvetica`;
const XP_bar_height = CIB_height * 0.05;
const xpCapacity_width = CIB_width * 0.33;
const xpQuantity_width = CIB_width * 0.16;

export const BarContainer = styled.div`
	position: absolute;
	left: calc(50% - ${({ theme }) => theme.calcHeightUnits(halfOf_CIB_width)});
	top: ${({ theme }) => theme.calcHeightUnits(0.5)};
	${({ theme }) => theme.customStyles.nonSelectable}
`;

const bgPolygon = calcHU => {
	return `
    clip-path: polygon(
      /*left corner going down*/  0                         	${calcHU(CIB_width * 0.15)},
      /*top left corner*/         ${calcHU(CIB_width * 0.09)} 0,
      /*top right corner*/        ${calcHU(CIB_width * 0.92)} 0,
      /*right corner*/            ${calcHU(CIB_width)}        ${calcHU(CIB_width * 0.08)},
      /*bottom right corner*/     ${calcHU(CIB_width * 0.86)} ${calcHU(CIB_textPartHeight)},
      /*right middele corner*/    ${calcHU(CIB_width * 0.46)} ${calcHU(CIB_textPartHeight)},
      /*middele bottom corner*/   ${calcHU(CIB_width * 0.38)} ${calcHU(CIB_height)},
      /*left bottom corner*/      ${calcHU(CIB_width * 0.1)}  ${calcHU(CIB_height)}
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
	width: ${({ theme }) => theme.calcHeightUnits(halfOf_CIB_width)};
	top: ${({ theme }) => theme.calcHeightUnits(CIB_height * 0.11)};
`;

const textBoxes = (theme, fontSize) => `
	width: ${theme.calcHeightUnits(CIB_text_width)};
  font-family: ${CIB_font};
  color: ${theme.colors.characterInfoBar.text};
	font-size: ${theme.calcHeightUnits(fontSize)};
`;

export const NameText = styled.div`
	${({ theme }) => textBoxes(theme, CIB_bigFontSize)}
`;

export const LevelText = styled.div`
	${({ theme }) => textBoxes(theme, CIB_fontSize)}
`;

export const Image = styled.img`
	width: ${({ theme }) => theme.calcHeightUnits(CIB_Image_size)};
	height: ${({ theme }) => theme.calcHeightUnits(CIB_Image_size)};
	position: absolute;
	left: ${({ theme }) => theme.calcHeightUnits(CIB_height * 0.11)};
	padding: ${({ theme }) => theme.calcHeightUnits((CIB_height - CIB_Image_size) / 2)};
	border-radius: 50%;
	${({ theme }) => theme.customStyles.clickable}
	${({ theme }) => theme.customStyles.nonSelectable}
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
	height: ${theme.calcHeightUnits(XP_bar_height)};
	top: ${theme.calcHeightUnits(CIB_height * 0.6)};
	left: ${theme.calcHeightUnits(CIB_width * 0.45)};
  clip-path: polygon(
		0                                      0,
		${theme.calcHeightUnits(width)}        0,
		${theme.calcHeightUnits(width * 0.92)} ${theme.calcHeightUnits(XP_bar_height)},
		0                                      ${theme.calcHeightUnits(XP_bar_height)}
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
