import anvilImg from './anvil.png';
import apple_juiceImg from './apple_juice.png';
import appleImg from './apple.png';
import arrowImg from './arrow.png';
import axeImg from './axe.png';
import bagImg from './bag.png';
import basketImg from './basket.png';
import bear_trapImg from './bear_trap.png';
import beltImg from './belt.png';
import bombImg from './bomb.png';
import bonesImg from './bones.png';
import bookImg from './book.png';
import bowImg from './bow.png';
import breadImg from './bread.png';
import campfireImg from './campfire.png';
import candleImg from './candle.png';
import caneImg from './cane.png';
import cattleImg from './cattle.png';
import cooked_chickenImg from './cooked_chicken.png';
import cooked_fishImg from './cooked_fish.png';
import cooked_meatImg from './cooked_meat.png';
import cottonImg from './cotton.png';
import couldrenImg from './couldren.png';
import crossbowImg from './crossbow.png';
import diamondImg from './diamond.png';
import dirtImg from './dirt.png';
import dry_leavesImg from './dry_leaves.png';
import eggImg from './egg.png';
import fabricImg from './fabric.png';
import fangImg from './fang.png';
import featherImg from './feather.png';
import fishing_rodImg from './fishing_rod.png';
import fishImg from './fish.png';
import flourImg from './flour.png';
import flower_budImg from './flower_bud.png';
import focileImg from './focile.png';
import glassImg from './glass.png';
import gloveImg from './glove.png';
import goldImg from './gold.png';
import grape_juiceImg from './grape_juice.png';
import grapesImg from './grapes.png';
import gunpowderImg from './gunpowder.png';
import hammerImg from './hammer.png';
import hatImg from './hat.png';
import herbImg from './herb.png';
import hookImg from './hook.png';
import hourglassImg from './hourglass.png';
import ironImg from './iron.png';
import knifeImg from './knife.png';
import lanternImg from './lantern.png';
import leatherImg from './leather.png';
import leavesImg from './leaves.png';
import lyeImg from './lye.png';
import magnifying_glassImg from './magnifying_glass.png';
import mapImg from './map.png';
import medicineImg from './medicine.png';
import metal_swordImg from './metal_sword.png';
import mirrorImg from './mirror.png';
import mortar_and_pestleImg from './mortar_and_pestle.png';
import mushroomsImg from './mushrooms.png';
import pantsImg from './pants.png';
import pickaxeImg from './pickaxe.png';
import raw_chickenImg from './raw_chicken.png';
import raw_meatImg from './raw_meat.png';
import rootsImg from './roots.png';
import ropeImg from './rope.png';
import saltImg from './salt.png';
import sandImg from './sand.png';
import scrollImg from './scroll.png';
import shieldImg from './shield.png';
import shirtImg from './shirt.png';
import shoesImg from './shoes.png';
import shovelImg from './shovel.png';
import slingshotImg from './slingshot.png';
import spyglassImg from './spyglass.png';
import stringImg from './string.png';
import sugarImg from './sugar.png';
import tentImg from './tent.png';
import torchImg from './torch.png';
import treasureImg from './treasure.png';
import tropical_fishImg from './tropical_fish.png';
import water_bottleImg from './water_bottle.png';
import waterImg from './water.png';
import wineImg from './wine.png';
import wood_boardImg from './wood_board.png';
import wooden_swordImg from './wooden_sword.png';
import wood_logImg from './wood_log.png';
import wormImg from './worm.png';

import { getImageFromLib } from 'Utils/styleUtils';

const lib = {
	1: { name: 'anvil', image: anvilImg },
	2: { name: 'apple juice', image: apple_juiceImg },
	3: { name: 'apple', image: appleImg },
	4: { name: 'arrow', image: arrowImg },
	5: { name: 'axe', image: axeImg },
	6: { name: 'bag', image: bagImg },
	7: { name: 'basket', image: basketImg },
	8: { name: 'bear trap', image: bear_trapImg },
	9: { name: 'belt', image: beltImg },
	10: { name: 'bomb', image: bombImg },
	11: { name: 'bones', image: bonesImg },
	12: { name: 'book', image: bookImg },
	13: { name: 'bow', image: bowImg },
	14: { name: 'bread', image: breadImg },
	15: { name: 'campfire', image: campfireImg },
	16: { name: 'candle', image: candleImg },
	17: { name: 'cane', image: caneImg },
	18: { name: 'cattle', image: cattleImg },
	19: { name: 'cooked chicken', image: cooked_chickenImg },
	20: { name: 'cooked fish', image: cooked_fishImg },
	21: { name: 'cooked meat', image: cooked_meatImg },
	22: { name: 'cotton', image: cottonImg },
	23: { name: 'couldren', image: couldrenImg },
	24: { name: 'crossbow', image: crossbowImg },
	25: { name: 'diamond', image: diamondImg },
	26: { name: 'dirt', image: dirtImg },
	27: { name: 'dry leaves', image: dry_leavesImg },
	28: { name: 'egg', image: eggImg },
	29: { name: 'fabric', image: fabricImg },
	30: { name: 'fang', image: fangImg },
	31: { name: 'feather', image: featherImg },
	32: { name: 'fishing rod', image: fishing_rodImg },
	33: { name: 'fish', image: fishImg },
	34: { name: 'flour', image: flourImg },
	35: { name: 'flower bud', image: flower_budImg },
	36: { name: 'focile', image: focileImg },
	37: { name: 'glass', image: glassImg },
	38: { name: 'glove', image: gloveImg },
	39: { name: 'gold', image: goldImg },
	40: { name: 'grape juice', image: grape_juiceImg },
	41: { name: 'grapes', image: grapesImg },
	42: { name: 'gunpowder', image: gunpowderImg },
	43: { name: 'hammer', image: hammerImg },
	44: { name: 'hat', image: hatImg },
	45: { name: 'herb', image: herbImg },
	46: { name: 'hook', image: hookImg },
	47: { name: 'hourglass', image: hourglassImg },
	48: { name: 'iron', image: ironImg },
	49: { name: 'knife', image: knifeImg },
	50: { name: 'lantern', image: lanternImg },
	51: { name: 'leather', image: leatherImg },
	52: { name: 'leaves', image: leavesImg },
	53: { name: 'lye', image: lyeImg },
	54: { name: 'magnifying glass', image: magnifying_glassImg },
	55: { name: 'map', image: mapImg },
	56: { name: 'medicine', image: medicineImg },
	57: { name: 'metal sword', image: metal_swordImg },
	58: { name: 'mirror', image: mirrorImg },
	59: { name: 'mortar and pestle', image: mortar_and_pestleImg },
	60: { name: 'mushrooms', image: mushroomsImg },
	61: { name: 'pants', image: pantsImg },
	62: { name: 'pickaxe', image: pickaxeImg },
	63: { name: 'raw chicken', image: raw_chickenImg },
	64: { name: 'raw meat', image: raw_meatImg },
	65: { name: 'roots', image: rootsImg },
	66: { name: 'rope', image: ropeImg },
	67: { name: 'salt', image: saltImg },
	68: { name: 'sand', image: sandImg },
	69: { name: 'scroll', image: scrollImg },
	70: { name: 'shield', image: shieldImg },
	71: { name: 'shirt', image: shirtImg },
	72: { name: 'shoes', image: shoesImg },
	73: { name: 'shovel', image: shovelImg },
	74: { name: 'slingshot', image: slingshotImg },
	75: { name: 'spyglass', image: spyglassImg },
	76: { name: 'string', image: stringImg },
	77: { name: 'sugar', image: sugarImg },
	78: { name: 'tent', image: tentImg },
	79: { name: 'torch', image: torchImg },
	80: { name: 'treasure', image: treasureImg },
	81: { name: 'tropical fish', image: tropical_fishImg },
	82: { name: 'water bottle', image: water_bottleImg },
	83: { name: 'water', image: waterImg },
	84: { name: 'wine', image: wineImg },
	85: { name: 'wood board', image: wood_boardImg },
	86: { name: 'wooden sword', image: wooden_swordImg },
	87: { name: 'wood log', image: wood_logImg },
	88: { name: 'worm', image: wormImg },
};

export const getDiscoveryImage = nameOrIndex => getImageFromLib(nameOrIndex, lib);
