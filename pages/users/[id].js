import { useState, useEffect } from 'react';

import { Layout, AddEdit } from '../../src/components/users';
import { userService, alertService } from '../../services';

export default User;

function User({ id }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		console.log(localStorage.getItem('user'));
	}, []);
	useEffect(() => {
		// fetch user and set default form values if in edit mode
		userService
			.getById(id)
			.then((x) => setUser(x))
			.catch(alertService.error);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout>
			<h1>Edit User</h1>
			{user ? <div>{user?.firstName}</div> : 'Loading'}
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	return {
		props: { id: params.id },
	};
}
