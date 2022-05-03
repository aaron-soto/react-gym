const Leaderboard = ({}) => {
	return (
		<ol className='list-group list-group-numbered leaderboard-list'>
			<li className='list-group-item d-flex justify-content-between align-items-start'>
				<div className='d-flex' style={{ width: '15%' }}>
					<h3 className='border-right pr-3'>Place</h3>
				</div>
				<div className='ms mr-auto d-flex'>
					<h3>Name</h3>
				</div>
				<h3 className='border-left pl-3'>lbs Lost</h3>
			</li>
			<ListItem num='1' name='Johnny Bravo' pounds='86.6' />
			<ListItem num='2' name='Jane Doe' pounds='64.4' />
			<ListItem num='3' name='John Doe' pounds='35.8' />
			<ListItem num='4' name='Patrick Starr' pounds='14.4' />
			<ListItem num='5' name='Timmy Turner' pounds='10.2' />
			<li className='list-group-item d-flex justify-content-between align-items-start'>
				<a className='text-center mx-auto w-100 h-100 text-danger' href='#'>
					View full leaderboard
				</a>
			</li>
		</ol>
	);
};

const ListItem = ({ num, name, pounds }) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-start'>
			<div className='d-flex' style={{ width: '15%' }}>
				<h3>{num}.</h3>
			</div>
			<div className='ms mr-auto d-flex'>
				<p className='fw-bold'>{name}</p>
			</div>
			<div className=''>{pounds} lbs</div>
		</li>
	);
};

export default Leaderboard;
