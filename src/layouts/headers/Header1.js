import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import SearchModal from '../../components/SearchModal';
import MobileHeader from '../MobileHeader';
import MainMenu from './MainMenu';

const Header1 = () => {
	const [showSearchModal, setShowSearchModal] = useState(false);

	return (
		<Fragment>
			<SearchModal
				show={showSearchModal}
				setShow={() => setShowSearchModal(false)}
			/>
			<header className='theme-header d-xl-block d-none'>
				{/* header top */}
				<div className='header-top-bar header-top-bar-one'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='top-left'>
									<ul>
										<li>
											<span>
												<i className='far fa-map-marker-alt' />
												2080 N Trekell Rd
											</span>
										</li>
										<li>
											<span>
												<i className='far fa-envelope' />
												<a href='mailto:info@powerhousefitnessaz.com'>
													info@powerhousefitnessaz.com
												</a>
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='top-right d-flex align-items-center'>
									<span className='phone'>
										<i className='far fa-phone' />
										<a href='tel:5208360613'>(520) 836-0613</a>
									</span>
									<ul className='social-link'>
										<li>
											<span className='title'>Follow Us</span>
										</li>
										<li>
											<a
												target='_blank'
												href='https://www.facebook.com/247fitnesscasagrande/'
											>
												<i className='fab fa-facebook-f' />
											</a>
										</li>
										<li>
											<a
												target='_blank'
												href='https://twitter.com/PowerHouseFitn4'
											>
												<i className='fab fa-twitter' />
											</a>
										</li>
										<li>
											<a
												target='_blank'
												href='https://www.instagram.com/powerhousefitnessaz/'
											>
												<i className='fab fa-instagram' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* header Navigation */}
				<div className='header-navigation'>
					<div className='container'>
						<div className='primary-menu'>
							<div className='site-branding'>
								<Link href='/' className='brand-logo'>
									<Image
										width='100%'
										height='50px'
										src='/assets/images/ph_logos/power-house-fitness-logo.svg'
										alt='Site Logo'
									/>
								</Link>
							</div>
							<div className='nav-menu ml-auto'>
								{/* Navbar Close */}
								<div className='navbar-close'>
									<i className='far fa-times' />
								</div>
								{/* Nav Search */}
								<div className='nav-search'>
									<form onSubmit={(e) => e.preventDefault()}>
										<div className='form_group'>
											<input
												type='email'
												className='form_control'
												placeholder='Search Here'
												name='email'
												required=''
											/>
											<button className='search-btn'>
												<i className='fas fa-search' />
											</button>
										</div>
									</form>
								</div>
								{/* Main Menu */}
								<MainMenu
									show={showSearchModal}
									setShow={() => setShowSearchModal(true)}
								/>
							</div>
							<div className='header-right-nav'>
								<ul>
									<li className='user-icon'>
										<a href='/account/login'>
											<i className='fas fa-user' />
											{/* <span className='icon'>
												<span>Login/ Sign up</span>
											</span> */}
										</a>
									</li>
									{/* <li className='lang-dropdown'>
										<select className='wide'>
											<option value={1}>English</option>
											<option value={2}>Spanish</option>
										</select>
									</li> */}
									<li className='nav-button'>
										<Link href='/trial'>
											<a className='main-btn'>Get Free Trial</a>
										</Link>
									</li>
									<li className='navbar-toggle-btn'>
										<div className='navbar-toggler'>
											<span />
											<span />
											<span />
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
			<MobileHeader logo={1} />
		</Fragment>
	);
};
export default Header1;
