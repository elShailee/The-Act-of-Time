import wolvesImg from './wolves.png';
import { getImageFromLib } from 'Utils/styleUtils';

const lib = {
	wolves: wolvesImg,
};

export const getDisasterImage = name => getImageFromLib(name, lib);
