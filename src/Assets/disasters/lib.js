import wolvesImg from './wolves.png';
import { getImageFromLib } from 'Utils/utilFuncs';

const lib = {
	wolves: wolvesImg,
};

export const getDisasterImage = name => getImageFromLib(name, lib);
