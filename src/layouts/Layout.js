import niceSelect from 'niceselectwithsabuj';
import React, { Fragment, useEffect } from 'react';
import BackToTop from '../components/BackToTop';
import { CookiesConsent } from '../components/CookiesConsent';
import ImageView from '../components/ImageView';
import Newsletter from '../components/Newsletter';
import VideoPopup from '../components/VideoPopup';
import { animation, stickyNav } from '../utils';
import Footer from './footers/Footer';
import Header1 from './headers/Header1';

const Layout = ({ children, noHeader, noFooter }) => {
	useEffect(() => {
		niceSelect();
		animation();

		window.addEventListener('scroll', stickyNav);
		if (window.location.href.includes('dark-e-wallet')) {
			document.querySelector('body').classList.add('dark-e-wallet');
		} else {
			document.querySelector('body').classList.remove('dark-e-wallet');
		}
	}, []);

	return (
		<Fragment>
			{/* <CookiesConsent /> */}
			<ImageView />
			<VideoPopup />
			{!noHeader && <Header1 />}
			{children}
			{!noFooter && (
				<Fragment>
					<Newsletter bgColor={'red-dark-bg'} noBg btnColor={'black'} />
					<Footer />
				</Fragment>
			)}
			<BackToTop />
		</Fragment>
	);
};
export default Layout;
