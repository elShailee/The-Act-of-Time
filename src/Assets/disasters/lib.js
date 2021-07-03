import wolvesImg from './wolves.png';
import { getImageFromLib } from 'Utils/styleFuncs';

const lib = {
	wolves: wolvesImg,
};

export const getDisasterImage = name => getImageFromLib(name, lib);
