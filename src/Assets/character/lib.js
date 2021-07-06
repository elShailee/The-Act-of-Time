import char1Img from './char1.png';
import { getImageFromLib } from 'Utils/styleUtils';

const lib = {
	char1: char1Img,
};

export const getCharacterImage = name => getImageFromLib(name, lib);
