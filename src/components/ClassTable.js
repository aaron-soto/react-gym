const ClassTable = ({}) => {
	return (
		<table className='table table-bordered bg-light class-table'>
			<thead>
				<tr>
					<TableHeaderCol />
					<TableHeaderCol day='Monday' />
					<TableHeaderCol day='Tuesday' />
					<TableHeaderCol day='Wednesday' />
					<TableHeaderCol day='Thursday' />
					<TableHeaderCol day='Friday' />
					<TableHeaderCol day='Saturday' />
				</tr>
			</thead>
			<tbody>
				<tr>
					<TableHeaderRow time='5:00 AM' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell />
				</tr>
				<tr>
					<TableHeaderRow time='7:00 AM' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell />
				</tr>
				<tr>
					<TableHeaderRow time='7:45 AM' />
					<TableCell />
					<TableCell />
					<TableCell />
					<TableCell />
					<TableCell />
					<TableCell name='Yoga' instructor='Melodee' />
				</tr>
				<tr>
					<TableHeaderRow time='5:00 PM' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell name='PowerFit' instructor='Nicole' />
					<TableCell />
				</tr>
			</tbody>
		</table>
	);
};

const TableCell = ({ name = '-', instructor = '-' }) => {
	return (
		<td
			className={`text-center align-middle class-cell ${
				name.length < 2 ? 'empty' : ''
			}`}
		>
			<p className='font-weight-bold'>{name}</p>
			<p className='text-muted'>{instructor}</p>
		</td>
	);
};

const TableHeaderRow = ({ time }) => {
	return (
		<th className='text-center align-middle' scope='row'>
			{time}
		</th>
	);
};
const TableHeaderCol = ({ day = '' }) => {
	return (
		<th
			className={`text-center align-middle ${day.length < 1 ? 'col-1' : ''}`}
			style={{ width: '14%' }}
			scope='col'
		>
			{day}
		</th>
	);
};

export default ClassTable;
