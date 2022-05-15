import { data } from '../data/leaderboard-weight-lost';
import Layout from '../src/layouts/Layout';
const ScoreBoard = () => {
	const sortedData = data.sort((a, b) => {
		return b.lost - a.lost;
	});

	const weightSum = data.reduce((n, { lost }) => n + lost, 0);
	const average =
		data.reduce((total, next) => total + next.lost, 0) / data.length;

	return (
		<div className='leaderboard-wrapper'>
			<section class='container'>
				<div className='scoreboard mx-auto'>
					<h2 className='mx-auto text-center py-3 text-light'>Lbs Lost</h2>
					<div className='class-details  mb-4'>
						<p className='text-center'>Total Weight Lost: {weightSum} lbs</p>
						<p className='text-center'>Average Weight Lost: {average} lbs</p>
					</div>
					<div class='leaderboard-list'>
						{sortedData.map((person, idx) => {
							return (
								<div class={`leaderboard-item`} key={idx}>
									<div
										className={idx < 3 ? `shimmer-overlay shimmer-${idx}` : ''}
									></div>
									<div className='idx'>{idx + 1}.</div>
									<div className='leaderboard-item-data justify-content-between'>
										<div className='name'>{`${person.first_name} ${person.last_name}`}</div>
										<div className='value'>
											<p>{person.lost}</p>
											<p>lbs</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ScoreBoard;
