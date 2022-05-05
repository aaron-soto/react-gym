import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Nav, Tab } from 'react-bootstrap';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
const DonutChart = dynamic(() => import('../src/components/DonutChart'), {
	ssr: false,
});

const Pricing = () => {
	return (
		<Layout>
			<PageBanner pageName={'Pricing Plan'} />
			{/*====== Start Pricing Section ======*/}
			<section
				className='pricing-area pricing-style-one bg_cover mt-100 pt-110 pb-105'
				style={{
					backgroundImage: 'url(assets/images/bg/dumbbells.jpg)',
					boxShadow:
						'0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.75)',
				}}
			>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='section-title section-title-white text-center mb-65 wow fadeInUp'>
								<span className='sub-title sub-title-bg red-dark-bg'>
									Choose your plan
								</span>
								<h2 className='text-underline'>
									We have plans for all lifestyles
								</h2>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div
								className='pricing-item mb-40 wow fadeInUp'
								data-wow-delay='.2s'
							>
								<div className='pricing-title-price'>
									<div className='pricing-title'>
										<h3 className='title'>Basic Plan</h3>
										<span className='discount'>25% Save Package</span>
									</div>
									<div className='pricing-price'>
										<h3 className='price'>
											<span className='currency'>$</span>19.99
											<span className='sm-text'>for Monthly</span>
										</h3>
									</div>
								</div>
								<div className='pricing-body'>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Voluptatem dignissimos sequi saepe aliquid.
									</p>
									<ul className='list'>
										<li className='check'>Lorem ipsum dolor sit.</li>
										<li className='check'>Lorem ipsum dolor sit amet.</li>
										<li className='check'>Lorem, ipsum dolor.</li>
										<li className='uncheck'>Lorem ipsum dolor sit.</li>
										<li className='uncheck'>Lorem, ipsum dolor.</li>
										<li className='uncheck'>Lorem, ipsum.</li>
									</ul>
									<Link href='/pricing'>
										<a className='main-btn'>Choose this pricing</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div
								className='pricing-item mb-40 wow fadeInUp'
								data-wow-delay='.3s'
							>
								<div className='pricing-title-price'>
									<div className='pricing-title'>
										<h3 className='title'>Regular Plan</h3>
										<span className='discount'>25% Save Package</span>
									</div>
									<div className='pricing-price'>
										<h3 className='price'>
											<span className='currency'>$</span>39.99
											<span className='sm-text'>for Monthly</span>
										</h3>
									</div>
								</div>
								<div className='pricing-body'>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Voluptatem dignissimos sequi saepe aliquid.
									</p>
									<ul className='list'>
										<li className='check'>Lorem ipsum dolor sit.</li>
										<li className='check'>Lorem ipsum dolor sit amet.</li>
										<li className='check'>Lorem, ipsum dolor.</li>
										<li className='check'>Lorem ipsum dolor sit.</li>
										<li className='check'>Lorem, ipsum dolor.</li>
										<li className='check'>Lorem, ipsum.</li>
									</ul>
									<Link href='/pricing'>
										<a className='main-btn'>Choose this pricing</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-12'>
							<div
								className='pricing-item mb-40 wow fadeInUp'
								data-wow-delay='.4s'
							>
								<div className='pricing-title-price'>
									<div className='pricing-title'>
										<h3 className='title'>Silver Plan</h3>
										<span className='discount'>25% Save Package</span>
									</div>
									<div className='pricing-price'>
										<h3 className='price'>
											<span className='currency'>$</span>99.99
											<span className='sm-text'>for Monthly</span>
										</h3>
									</div>
								</div>
								<div className='pricing-body'>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Voluptatem dignissimos sequi saepe aliquid.
									</p>
									<ul className='list'>
										<li className='check'>Lorem ipsum dolor sit.</li>
										<li className='check'>Lorem ipsum dolor sit amet.</li>
										<li className='check'>Lorem, ipsum dolor.</li>
										<li className='check'>Lorem ipsum dolor sit.</li>
										<li className='check'>Lorem, ipsum dolor.</li>
										<li className='check'>Lorem, ipsum.</li>
									</ul>
									<Link href='/pricing'>
										<a className='main-btn'>Choose this pricing</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== End Pricing Section ======*/}
			{/*====== Start Skill Section ======*/}
			{/* <section className='skill-area skill-style-one pt-130 pb-70'>
				<div className='objects'>
					<img
						src='assets/images/objects/object-5.png'
						className='img-1'
						alt='object image'
					/>
					<img
						src='assets/images/objects/object-6.png'
						className='img-2'
						alt='object image'
					/>
				</div>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-7'>
							<div className='skill-img-box mb-60'>
								<div className='shape'>
									<img
										src='assets/images/objects/object-7.png'
										className='img-1'
										alt='object image'
									/>
								</div>
								<div className='row'>
									<div className='col-md-5'>
										<div className='skill-img wow fadeInUp'>
											<img src='assets/images/skill/img-1.jpg' alt='' />
										</div>
									</div>
									<div className='col-md-7'>
										<div className='skill-img mt-60 wow fadeInDown'>
											<img src='assets/images/skill/img-2.jpg' alt='' />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='skill-content-box mb-60'>
								<div className='section-title section-title-two mb-35 wow fadeInUp'>
									<span className='sub-title sub-title-bg blue-light-bg'>
										latest skills
									</span>
									<h2 className='text-underline'>
										We’re Very Professional &amp; Experience Agency{' '}
									</h2>
								</div>
								<p>
									Sed perspiciatis unde omnis natus voluptate accusantie
									doloremque laudantium totam rem aperiam eaque quaea vtore
									eritatis quasi architecto beatae vitae
								</p>
								<div className='row'>
									<div className='col-md-6'>
										<div className='skill-item wow fadeInUp'>
											<div className='skill-bar'>
												<DonutChart
													value={89}
													color={'#43baff'}
													background={'rgba(67, 186, 255, 0.1)'}
												/>
												<h2 className='number'>
													89<span className='sign'>%</span>
												</h2>
											</div>
											<div className='text'>
												<h3>IT Consulting</h3>
												<p>Sed perspic unde omnise voluptate accusantie</p>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='skill-item wow fadeInUp'>
											<div className='skill-bar'>
												<DonutChart
													value={67}
													color={'#7141B1'}
													background={'rgba(113, 65, 177, 0.1)'}
												/>
												<h2 className='number'>
													67<span className='sign'>%</span>
												</h2>
											</div>
											<div className='text'>
												<h3>Management</h3>
												<p>Sed perspic unde omnise voluptate accusantie</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</Layout>
	);
};
export default Pricing;
