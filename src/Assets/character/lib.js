import char1Img from './char1.png';
import { getImageFromLib } from 'Utils/utilFuncs';

const lib = {
	char1: char1Img,
};

export const getCharacterImage = name => getImageFromLib(name, lib);
