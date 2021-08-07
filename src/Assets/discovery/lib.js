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
	anvil: anvilImg,
	1: anvilImg,
	apple_juice: apple_juiceImg,
	2: apple_juiceImg,
	apple: appleImg,
	3: appleImg,
	arrow: arrowImg,
	4: arrowImg,
	axe: axeImg,
	5: axeImg,
	bag: bagImg,
	6: bagImg,
	basket: basketImg,
	7: basketImg,
	bear_trap: bear_trapImg,
	8: bear_trapImg,
	belt: beltImg,
	9: beltImg,
	bomb: bombImg,
	10: bombImg,
	bones: bonesImg,
	11: bonesImg,
	book: bookImg,
	12: bookImg,
	bow: bowImg,
	13: bowImg,
	bread: breadImg,
	14: breadImg,
	campfire: campfireImg,
	15: campfireImg,
	candle: candleImg,
	16: candleImg,
	cane: caneImg,
	17: caneImg,
	cattle: cattleImg,
	18: cattleImg,
	cooked_chicken: cooked_chickenImg,
	19: cooked_chickenImg,
	cooked_fish: cooked_fishImg,
	20: cooked_fishImg,
	cooked_meat: cooked_meatImg,
	21: cooked_meatImg,
	cotton: cottonImg,
	22: cottonImg,
	couldren: couldrenImg,
	23: couldrenImg,
	crossbow: crossbowImg,
	24: crossbowImg,
	diamond: diamondImg,
	25: diamondImg,
	dirt: dirtImg,
	26: dirtImg,
	dry_leaves: dry_leavesImg,
	27: dry_leavesImg,
	egg: eggImg,
	28: eggImg,
	fabric: fabricImg,
	29: fabricImg,
	fang: fangImg,
	30: fangImg,
	feather: featherImg,
	31: featherImg,
	fishing_rod: fishing_rodImg,
	32: fishing_rodImg,
	fish: fishImg,
	33: fishImg,
	flour: flourImg,
	34: flourImg,
	flower_bud: flower_budImg,
	35: flower_budImg,
	focile: focileImg,
	36: focileImg,
	glass: glassImg,
	37: glassImg,
	glove: gloveImg,
	38: gloveImg,
	gold: goldImg,
	39: goldImg,
	grape_juice: grape_juiceImg,
	40: grape_juiceImg,
	grapes: grapesImg,
	41: grapesImg,
	gunpowder: gunpowderImg,
	42: gunpowderImg,
	hammer: hammerImg,
	43: hammerImg,
	hat: hatImg,
	44: hatImg,
	herb: herbImg,
	45: herbImg,
	hook: hookImg,
	46: hookImg,
	hourglass: hourglassImg,
	47: hourglassImg,
	iron: ironImg,
	48: ironImg,
	knife: knifeImg,
	49: knifeImg,
	lantern: lanternImg,
	50: lanternImg,
	leather: leatherImg,
	51: leatherImg,
	leaves: leavesImg,
	52: leavesImg,
	lye: lyeImg,
	53: lyeImg,
	magnifying_glass: magnifying_glassImg,
	54: magnifying_glassImg,
	map: mapImg,
	55: mapImg,
	medicine: medicineImg,
	56: medicineImg,
	metal_sword: metal_swordImg,
	57: metal_swordImg,
	mirror: mirrorImg,
	58: mirrorImg,
	mortar_and_pestle: mortar_and_pestleImg,
	59: mortar_and_pestleImg,
	mushrooms: mushroomsImg,
	60: mushroomsImg,
	pants: pantsImg,
	61: pantsImg,
	pickaxe: pickaxeImg,
	62: pickaxeImg,
	raw_chicken: raw_chickenImg,
	63: raw_chickenImg,
	raw_meat: raw_meatImg,
	64: raw_meatImg,
	roots: rootsImg,
	65: rootsImg,
	rope: ropeImg,
	66: ropeImg,
	salt: saltImg,
	67: saltImg,
	sand: sandImg,
	68: sandImg,
	scroll: scrollImg,
	69: scrollImg,
	shield: shieldImg,
	70: shieldImg,
	shirt: shirtImg,
	71: shirtImg,
	shoes: shoesImg,
	72: shoesImg,
	shovel: shovelImg,
	73: shovelImg,
	slingshot: slingshotImg,
	74: slingshotImg,
	spyglass: spyglassImg,
	75: spyglassImg,
	string: stringImg,
	76: stringImg,
	sugar: sugarImg,
	77: sugarImg,
	tent: tentImg,
	78: tentImg,
	torch: torchImg,
	79: torchImg,
	treasure: treasureImg,
	80: treasureImg,
	tropical_fish: tropical_fishImg,
	81: tropical_fishImg,
	water_bottle: water_bottleImg,
	82: water_bottleImg,
	water: waterImg,
	83: waterImg,
	wine: wineImg,
	84: wineImg,
	wood_board: wood_boardImg,
	85: wood_boardImg,
	wooden_sword: wooden_swordImg,
	86: wooden_swordImg,
	wood_log: wood_logImg,
	87: wood_logImg,
	worm: wormImg,
	88: wormImg,
};

export const getDiscoveryImage = nameOrIndex => getImageFromLib(nameOrIndex, lib);
