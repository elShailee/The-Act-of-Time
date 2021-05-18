import './Tile.css';
import focusedAssets from './focusedMapAssetLib';

export default function Tile({ tileData }) {
	if (tileData.type === 'border') {
		return <div className={'fm-tile fm-' + tileData.value} />;
	} else return <div className='fm-tile' style={{ backgroundImage: `url(${focusedAssets[tileData]})` }} />;
}
// }
