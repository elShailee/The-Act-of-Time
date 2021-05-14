import './Tile.css';
import focusedAssets from './focusedMapAssetLib';

export default function Tile({ tileData }) {
	if (tileData === 'blocker') {
		//border tiles
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'upperBorderTile') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'bottomBorderTile') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'upperRight') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'upperLeft') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'lowerRight') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'lowerLeft') {
		return <div className='fm-border fm-tile' tiledata={tileData}></div>;
		// half-box border tiles
	} else if (tileData === 'halfbox-upperRight') {
		return <div className='halfbox-upperRight fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'halfbox-upperLeft') {
		return <div className='halfbox-upperLeft fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'halfbox-lowerRight') {
		return <div className='halfbox-lowerRight fm-tile' tiledata={tileData}></div>;
	} else if (tileData === 'halfbox-lowerLeft') {
		return <div className='halfbox-lowerLeft fm-tile' tiledata={tileData}></div>;
	} else {
		//content map
		console.log(tileData);
		console.log(focusedAssets);
		console.log(focusedAssets[tileData]);
		return <div className='fm-tile' style={{ backgroundImage: `url(${focusedAssets[tileData]})` }} />;
	}
}
