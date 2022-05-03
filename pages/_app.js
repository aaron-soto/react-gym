import Head from 'next/head';
import { Fragment } from 'react';
import PreLoader from '../src/components/PreLoader';
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from '../services/';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [user, setUser] = useState(null);
	const [authorized, setAuthorized] = useState(false);

	useEffect(() => {
		// on initial load - run auth check
		authCheck(router.asPath);

		// on route change start - hide page content by setting authorized to false
		const hideContent = () => setAuthorized(false);
		router.events.on('routeChangeStart', hideContent);

		// on route change complete - run auth check
		router.events.on('routeChangeComplete', authCheck);

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off('routeChangeStart', hideContent);
			router.events.off('routeChangeComplete', authCheck);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function authCheck(url) {
		// redirect to login page if accessing a private page and not logged in
		setUser(userService.userValue);
		// Paths to be blocked by login
		const publicPaths = ['/shop'];
		const path = url.split('?')[0];
		if (!userService.userValue && publicPaths.includes(path)) {
			setAuthorized(false);
			router.push({
				pathname: '/account/login',
				query: { returnUrl: router.asPath },
			});
		} else {
			setAuthorized(true);
		}
	}

	return (
		<Fragment>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='shortcut icon'
					href='assets/images/favicon.ico'
					type='image/png'
				/>
				<title>PowerHouse Fitness | Casa Grande</title>
			</Head>
			<PreLoader />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
