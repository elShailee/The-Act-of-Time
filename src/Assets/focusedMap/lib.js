import grass1 from 'Assets/focusedMap/grass1.png';
import grass2 from 'Assets/focusedMap/grass2.png';
import grass3 from 'Assets/focusedMap/grass3.png';
import path1 from 'Assets/focusedMap/path1.png';
import path2 from 'Assets/focusedMap/path2.png';
import path3 from 'Assets/focusedMap/path3.png';
import sea from 'Assets/focusedMap/sea.gif';
import deepsea from 'Assets/focusedMap/deepsea.gif';
import sand from 'Assets/focusedMap/sand.png';
import sandRight from 'Assets/focusedMap/sand-right.png';
import sandCornerTopLeft from 'Assets/focusedMap/sandcorner-tl.png';
import sandCornerBotLeft from 'Assets/focusedMap/sandcorner-bl.png';
import grassPathTop from 'Assets/focusedMap/grasspathtop.png';
import grassPathBot from 'Assets/focusedMap/grasspathbot.png';
import grassPathLeft from 'Assets/focusedMap/grasspathleft.png';
import grassPathCornerBotLeft from 'Assets/focusedMap/grasspathcorner-bl.png';
import grassPathCornerTopLeft from 'Assets/focusedMap/grasspathcorner-tl.png';
import seaCornerBotRight from 'Assets/focusedMap/seacorner-br.png';
import seaCornerTopRight from 'Assets/focusedMap/seacorner-tr.png';
import grassRight from 'Assets/focusedMap/grass-right.png';
import sandGrassRight from 'Assets/focusedMap/sandgrassright.png';
import sandGrassCornerTopLeft from 'Assets/focusedMap/sandgrasscorner-tl.png';
import sandGrassCornerBotLeft from 'Assets/focusedMap/sandgrasscorner-bl.png';
import { getImageFromLib } from 'Utils/utilFuncs';

const lib = {
	grass1,
	grass2,
	grass3,
	path1,
	path2,
	path3,
	sea,
	deepsea,
	sand,
	sandRight,
	sandCornerTopLeft,
	sandCornerBotLeft,
	grassPathTop,
	grassPathBot,
	grassPathLeft,
	grassPathCornerBotLeft,
	grassPathCornerTopLeft,
	seaCornerBotRight,
	seaCornerTopRight,
	grassRight,
	sandGrassRight,
	sandGrassCornerTopLeft,
	sandGrassCornerBotLeft,
};

export const getTileImg = name => getImageFromLib(name, lib);
