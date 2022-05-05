import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
import { getPagination, pagination } from '../src/utils';

const RangeSlider = dynamic(() => import('../src/components/RangeSlider'), {
	ssr: false,
});

const Shop = () => {
	let sort = 6;
	const [active, setActive] = useState(1);
	const [state, setstate] = useState([]);
	useEffect(() => {
		pagination('.product-item__', sort, active);
		let list = document.querySelectorAll('.product-item__');
		setstate(getPagination(list.length, sort));
	}, [active]);
	return (
		<Layout>
			<PageBanner pageName={'Our Shop'} />
			<section className='products-area pt-130 pb-100'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-3 col-lg-4'>
							<div className='product-sidebar-widget'>
								<div className='widget search-widget mb-30 wow fadeInUp'>
									<form onSubmit={(e) => e.preventDefault()}>
										<div className='form_group'>
											<input
												type='email'
												className='form_control'
												placeholder='Search Items'
												name='email'
												required=''
											/>
											<button className='search-btn'>
												<i className='far fa-search' />
											</button>
										</div>
									</form>
								</div>
								<div className='widget category-widget mb-30 wow fadeInUp'>
									<h4 className='widget-title'>Category</h4>
									<ul className='category-nav'>
										<li>
											<a href='#'>
												<i className='fas fa-plus' />
												Canvas Basket
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-plus' />
												Womens Shirts
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-plus' />
												Mens Shirts
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-plus' />
												Tanning Supplies
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fas fa-plus' />
												Towels
											</a>
										</li>
									</ul>
								</div>
								<div className='widget recent-product-widget mb-30 wow fadeInUp'>
									<h4 className='widget-title'>Sale Products</h4>
									<ul className='recent-product-list'>
										<li className='product-item'>
											<div className='product-thumb'>
												<img
													src='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
													// src='assets/images/products/sm-thumb-3.jpg'
													alt='product image'
												/>
											</div>
											<div className='product-info'>
												<h3 className='title'>
													<Link href='/products/womens-phf-razorback'>
														<a>Product</a>
													</Link>
												</h3>
												<Link href='/products'>
													<a className='category'>Category</a>
												</Link>
											</div>
										</li>
										<li className='product-item'>
											<div className='product-thumb'>
												<img
													src='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p4_i1_w3024.jpeg?width=640'
													// src='assets/images/products/sm-thumb-3.jpg'
													alt='product image'
												/>
											</div>
											<div className='product-info'>
												<h3 className='title'>
													<Link href='/products/womens-phf-razorback'>
														<a>Product</a>
													</Link>
												</h3>
												<Link href='/products'>
													<a className='category'>Category</a>
												</Link>
											</div>
										</li>
										<li className='product-item'>
											<div className='product-thumb'>
												<img
													src='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
													// src='assets/images/products/sm-thumb-3.jpg'
													alt='product image'
												/>
											</div>
											<div className='product-info'>
												<h3 className='title'>
													<Link href='/products/womens-phf-razorback'>
														<a>Product</a>
													</Link>
												</h3>
												<Link href='/products'>
													<a className='category'>Category</a>
												</Link>
											</div>
										</li>
									</ul>
								</div>
								<div className='widget price-range-widget mb-30 wow fadeInUp'>
									<h4 className='widget-title'>Filter By Price</h4>
									<div id='slider-range' className='mb-20' />
									<div className='price-number'>
										<RangeSlider />
									</div>
								</div>
								<div className='widget tag-cloud-widget mb-30 wow fadeInUp'>
									<h4 className='widget-title'>Popular Tags</h4>
									<a href='#'>Shirts</a>
									<a href='#'>Shorts</a>
									<a href='#'>Womens</a>
									<a href='#'>Mens</a>
								</div>
							</div>
						</div>
						<div className='col-xl-9 col-lg-8'>
							<div className='products-style-one'>
								<div className='row'>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={4}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p1_i2_w1200.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										originalCost='24.99'
										rating={5}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p2_i2_w1200.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={5}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={4}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p4_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										originalCost='25.00'
										rating={3}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={4}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p1_i2_w1200.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={5}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={4}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p4_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										originalCost='25.00'
										rating={3}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p3_i1_w3024.jpeg?width=640'
									/>
									<ShopProduct
										name='Mens PowerHouse Fitness Crew Neck'
										cost='20.00'
										rating={4}
										img='https://www.powerhousefitnessaz.com/uploads/1/2/9/6/129669423/s252311997741826771_p1_i2_w1200.jpeg?width=640'
									/>
								</div>
								<div className='page-pagination text-center mt-30 mb-30 wow fadeInUp'>
									<ul>
										<li>
											<a
												href='#'
												onClick={(e) => {
													e.preventDefault();
													setActive(active === 1 ? 1 : active - 1);
												}}
											>
												<i className='far fa-angle-left' />
											</a>
										</li>
										{state &&
											state.map((s, i) => (
												<li
													key={i}
													className={` ${active === s ? 'active' : ''}`}
												>
													<a
														href='#'
														onClick={(e) => {
															e.preventDefault();
															setActive(s);
														}}
													>
														{s}
													</a>
												</li>
											))}
										<li>
											<a
												href='#'
												onClick={(e) => {
													e.preventDefault();
													setActive(
														active === state.length ? state.length : active + 1
													);
												}}
											>
												<i className='far fa-angle-right' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Shop;

const ShopProduct = ({ name, cost, rating, img, originalCost }) => {
	return (
		<div className='col-lg-4 col-md-6 col-sm-12 product-item__'>
			<div className='product-item mb-30 wow fadeInUp'>
				<div className='product-thumb'>
					<img
						src={img}
						// src='assets/images/products/product-1.jpg'
						alt='product image'
					/>
					<div className='product-overlay d-flex align-items-end justify-content-center'>
						<div className='product-meta'>
							<a href='#' className='icon cart-btn'>
								<i className='far fa-shopping-cart' />
							</a>
							<a href='#' className='icon wishlist-btn'>
								<i className='far fa-heart' />
							</a>
							<a
								href='assets/images/products/product-1.jpg'
								className='icon img-popup'
							>
								<i className='far fa-expand' />
							</a>
						</div>
					</div>
				</div>
				<div className='product-info text-center'>
					<ul className={`ratings ratings-${rating}`}>
						<li className='star'>
							<i className='fas fa-star' />
						</li>
						<li className='star'>
							<i className='fas fa-star' />
						</li>
						<li className='star'>
							<i className='fas fa-star' />
						</li>
						<li className='star'>
							<i className='fas fa-star' />
						</li>
						<li className='star'>
							<i className='fas fa-star' />
						</li>
					</ul>
					<h3 className='title'>
						<Link href='/products/womens-phf-razorback'>
							<a>{name}</a>
						</Link>
					</h3>
					<span className='price'>
						${cost}{' '}
						{originalCost && <span className='pre-price'>${originalCost}</span>}
					</span>
				</div>
			</div>
		</div>
	);
};
