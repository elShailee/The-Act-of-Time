import './Tile.css';
import focusedAssets from './focusedMapAssetLib';

export default function Tile({ tileData }) {
	//blocker tiles
	if (tileData === 'blocker-right') {
		return <div className='blocker-right fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'blocker-left') {
		return <div className='blocker-left fm-tile' tiledata={tileData}></div>;
		//hidden tiles
	} else if (tileData === 'upperBorderTile') {
		return <div className='hidden fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'bottomBorderTile') {
		return <div className='hidden fm-tile' tiledata={tileData}></div>;
		//teleporter tiles
	} else if (tileData === 'upperRight') {
		return <div className='tele-upperRight fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'upperLeft') {
		return <div className='tele-upperLeft fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'lowerRight') {
		return <div className='tele-lowerRight fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'lowerLeft') {
		return <div className='tele-lowerLeft fm-tile' tiledata={tileData}></div>;
	} else {
		//map content
		return <div className='fm-tile' style={{ backgroundImage: `url(${focusedAssets[tileData]})` }} />;
	}
}
