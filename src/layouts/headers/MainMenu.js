import Link from 'next/link';
import React from 'react';
import { About, Blog, Cases, Home, Pages, Classes } from './Menus';

const MainMenu = ({ search, setShow }) => {
	return (
		<nav className='main-menu'>
			<ul>
				<li className='menu-item'>
					<Link href='/'>Home</Link>
				</li>
				{/* <li className='menu-item has-children'>
					<Link href='#'>About</Link>
					<ul className='sub-menu'>
						<About />
					</ul>
				</li> */}
				<li className='menu-item has-children'>
					<a href='#'>Classes</a>
					<ul className='sub-menu'>
						<Classes />
					</ul>
				</li>
				<li className='menu-item'>
					<Link href='/pricing'>Memberships</Link>
				</li>
				{/* <li className='menu-item has-children'>
					<a href='#'>Blog</a>
					<ul className='sub-menu'>
						<Blog />
					</ul>
				</li> */}
				<li className='menu-item'>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
				{!search && (
					<li className='search-item'>
						<a
							href='#'
							data-toggle='modal'
							data-target='#search-modal'
							onClick={() => setShow()}
						>
							<i className='fas fa-search' />
						</a>
					</li>
				)}
			</ul>
		</nav>
	);
};
export default MainMenu;
