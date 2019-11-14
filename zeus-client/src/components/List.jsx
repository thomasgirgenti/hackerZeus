import React from 'react';
import ListItem from './ListItem';


const LoadRingSm = () => {
	return (
		<div className='loadRingSm'></div>
	)
}

const LoadRingLg = () => {
	return (
		<div className='List Loading'>
			<div className="loadRing"></div>
		</div>
	)
}

const LoadArrow = () => {
	return (
		<>
			<svg viewBox="64 64 896 896" className="loadArrow" width="32px" height="32px" aria-hidden="true">
				<path d="M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"></path>
				<path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
			</svg>
		</>
	)
}


const Loaded = (props) => {
	return (
		<div className='List'>

			<ul className='articleList'>
				{props.items.map(i => <ListItem key={i.id} data={i} setReader={props.setReader} />)}
			</ul>

			<div className='loadMoreCont'>
				<button className='loadMoreBtn' onClick={() => props.load()}>
					{props.loadingMore === true ? <LoadRingSm /> : <LoadArrow />}
				</button>
			</div>

		</div>
	)
}

export default function List(props) {

	return (
		props.loading
			? <LoadRingLg />
			: <Loaded
				items={props.items}
				setReader={props.setReader}
				load={props.load}
				loadingMore={props.loadingMore} />
	);

}