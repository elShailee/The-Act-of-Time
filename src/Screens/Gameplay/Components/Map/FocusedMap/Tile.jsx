import './Tile.css';

export default function Tile(props) {
	if (props.tileData === 'blocker') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'upperBorderTile') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'bottomBorderTile') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'upperRight') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'upperLeft') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'lowerRight') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else if (props.tileData === 'lowerLeft') {
		return <div className='fm-hidden' tileData={props.tileData}></div>;
	} else {
		return <div className='fm-tile' tileData={props.tileData}></div>;
	}
}
