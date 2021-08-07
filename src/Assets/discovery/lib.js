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
	apple_juice: apple_juiceImg,
	apple: appleImg,
	arrow: arrowImg,
	axe: axeImg,
	bag: bagImg,
	basket: basketImg,
	bear_trap: bear_trapImg,
	belt: beltImg,
	bomb: bombImg,
	bones: bonesImg,
	book: bookImg,
	bow: bowImg,
	bread: breadImg,
	campfire: campfireImg,
	candle: candleImg,
	cane: caneImg,
	cattle: cattleImg,
	cooked_chicken: cooked_chickenImg,
	cooked_fish: cooked_fishImg,
	cooked_meat: cooked_meatImg,
	cotton: cottonImg,
	couldren: couldrenImg,
	crossbow: crossbowImg,
	diamond: diamondImg,
	dirt: dirtImg,
	dry_leaves: dry_leavesImg,
	egg: eggImg,
	fabric: fabricImg,
	fang: fangImg,
	feather: featherImg,
	fishing_rod: fishing_rodImg,
	fish: fishImg,
	flour: flourImg,
	flower_bud: flower_budImg,
	focile: focileImg,
	glass: glassImg,
	glove: gloveImg,
	gold: goldImg,
	grape_juice: grape_juiceImg,
	grapes: grapesImg,
	gunpowder: gunpowderImg,
	hammer: hammerImg,
	hat: hatImg,
	herb: herbImg,
	hook: hookImg,
	hourglass: hourglassImg,
	iron: ironImg,
	knife: knifeImg,
	lantern: lanternImg,
	leather: leatherImg,
	leaves: leavesImg,
	lye: lyeImg,
	magnifying_glass: magnifying_glassImg,
	map: mapImg,
	medicine: medicineImg,
	metal_sword: metal_swordImg,
	mirror: mirrorImg,
	mortar_and_pestle: mortar_and_pestleImg,
	mushrooms: mushroomsImg,
	pants: pantsImg,
	pickaxe: pickaxeImg,
	raw_chicken: raw_chickenImg,
	raw_meat: raw_meatImg,
	roots: rootsImg,
	rope: ropeImg,
	salt: saltImg,
	sand: sandImg,
	scroll: scrollImg,
	shield: shieldImg,
	shirt: shirtImg,
	shoes: shoesImg,
	shovel: shovelImg,
	slingshot: slingshotImg,
	spyglass: spyglassImg,
	string: stringImg,
	sugar: sugarImg,
	tent: tentImg,
	torch: torchImg,
	treasure: treasureImg,
	tropical_fish: tropical_fishImg,
	water_bottle: water_bottleImg,
	water: waterImg,
	wine: wineImg,
	wood_board: wood_boardImg,
	wooden_sword: wooden_swordImg,
	wood_log: wood_logImg,
	worm: wormImg,
};

export const getDiscoveryImage = name => getImageFromLib(name, lib);
