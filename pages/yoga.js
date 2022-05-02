import { useEffect } from 'react';
import moment from 'moment';

import Link from 'next/link';
import Slider from 'react-slick';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
import { projectSlider } from '../src/sliderProps';
import Footer1 from '../src/layouts/footers/Footer1';

const ProjectDetails = () => {
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const getNextDate = () => {
		var days = [6, 5, 4, 3, 2, 1, 7];
		var d = new Date();
		d.setDate(d.getDate() + days[d.getDay()]);
		return moment(d).format('DD-MMM-YYYY');
	};

	useEffect(() => {
		getNextDate();
	}, []);

	return (
		<Layout>
			<PageBanner pageName={'Yoga Class'} />
			<section className='portfolio-details-area pt-130 pb-80'>
				<div className='container'>
					<div className='portfolio-details-wrapper wow fadeInUp'>
						<div className='portfolio-img'>
							<div className='row'>
								<div className='col-lg-7'>
									<img
										src='assets/images/team/img_02.jpg'
										className='mb-30'
										alt=''
									/>
								</div>
								<div className='col-lg-5'>
									<img
										src='assets/images/team/img_03.jpg'
										className='mb-30'
										alt=''
									/>
									<img
										src='assets/images/team/img_03.jpg'
										className='mb-30'
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='portfolio-content mt-30'>
							<div className='row'>
								<div className='col-lg-8'>
									<div className='content'>
										<h3 className='title'>About the Class</h3>
										<div className='text-box'>
											{/* <div className='big-text'>M</div> */}
											<div className='box-text'>
												<p>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Ratione pariatur assumenda accusamus sit
													architecto dignissimos repellendus illum velit nam.
													Rerum quam itaque qui aliquid, nobis vel a.
													Dignissimos nostrum voluptatum repellat suscipit
													ratione optio praesentium. Vero repellendus minima
													perferendis voluptates?
												</p>
											</div>
										</div>
									</div>
									<div className='content'>
										<h4 className='title'>{`About Melodee`}</h4>
										<p>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatu aut
											odit aut fugit, sed quia consequuntur magni dolores eos
											qui ratione voluptatem sequines ciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet Quis
											autem vel eum iure reprehenderit qui in ea voluptate
										</p>
										{/* <ul className='list'>
											<li>
												Choosing A New Serverless Database Technology At An
												Agency (Case Study)
											</li>
											<li>
												Growing UX Maturity: Knowledge Sharing And Mentorship
												(Part 2)
											</li>
											<li>How To Boost Media Performance On A Budget</li>
										</ul> */}
									</div>
								</div>
								<div className='col-lg-4'>
									<div className='project-info'>
										<h3>Class Details</h3>
										<ul className='list'>
											<li>
												<span className='title'>Instructor</span>
												<span className='text'>Melodee</span>
											</li>
											<li>
												<span className='title'>Category</span>
												<span className='text'>Yoga</span>
											</li>
											<li>
												<span className='title'>Next Class</span>
												<span className='text'>{getNextDate()}</span>
											</li>
											<li>
												<span className='title'>Class Time</span>
												<span className='text'>7:45 Am</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className='content'>
								<h4 className='title'>Working Process</h4>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									quae abillo inventore veritatis et quasi architecto beatae
									vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
									voluptas sit aspernatur aut odit aut fugit, sed quia
									consequuntur magni dolores eos qui ratione voluptatem sequi
									nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
									dolor sit amet
								</p>
								<div className='row'>
									<div className='col-lg-3 col-md-6 col-sm-12'>
										<div className='single-step-box'>
											<div className='icon'>
												<i className='flaticon-creative' />
												<span className='step-count'>01</span>
											</div>
											<div className='text'>
												<h3>Select Category</h3>
												<p>
													Sed perspiciatis omnis tenatus voluptate accusa
													dolorem laudantiue
												</p>
											</div>
										</div>
									</div>
									<div className='col-lg-3 col-md-6 col-sm-12'>
										<div className='single-step-box'>
											<div className='icon'>
												<i className='flaticon-growth' />
												<span className='step-count'>02</span>
											</div>
											<div className='text'>
												<h3>Project Research</h3>
												<p>
													Sed perspiciatis omnis tenatus voluptate accusa
													dolorem laudantiue
												</p>
											</div>
										</div>
									</div>
									<div className='col-lg-3 col-md-6 col-sm-12'>
										<div className='single-step-box'>
											<div className='icon'>
												<i className='flaticon-analysis' />
												<span className='step-count'>03</span>
											</div>
											<div className='text'>
												<h3>Project Analysis</h3>
												<p>
													Sed perspiciatis omnis tenatus voluptate accusa
													dolorem laudantiue
												</p>
											</div>
										</div>
									</div>
									<div className='col-lg-3 col-md-6 col-sm-12'>
										<div className='single-step-box'>
											<div className='icon'>
												<i className='flaticon-solution-3' />
												<span className='step-count'>04</span>
											</div>
											<div className='text'>
												<h3>Got Final Results</h3>
												<p>
													Sed perspiciatis omnis tenatus voluptate accusa
													dolorem laudantiue
												</p>
											</div>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className='content'>
								<div className='row'>
									<div className='col-lg-6'>
										<h4 className='title'>Results</h4>
										<p>
											But I must explain to you how all this mistaken idea of
											denouncing pleasure and praising pain was born and I will
											give you a complete account of the system, and expound the
											actual teachings of the great explorer of the truth, the
											master-builder of human happiness.{' '}
										</p>
										<h6 className='roboto-italic'>
											No one rejects, dislikes, or avoids pleasure itself,
											because it is pleasure, but because those who do not know
											how to pursue pleasure rationally encounter consequences
											that are extremely painful.
										</h6>
									</div>
									<div className='col-lg-6'>
										<div className='img-box text-lg-right'>
											<img
												src='assets/images/projects/project-single-3.jpg'
												alt=''
											/>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
			{/*====== End Project-Details  Section ======*/}
			{/*====== Start Recent Portfolio Section ======*/}
			<section className='recent-portfolio light-gray-bg pt-130 pb-130'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='section-title mb-45 text-center wow fadeInUp'>
								<span className='sub-title sub-title-bg red-dark-bg'>
									Other Classes
								</span>
								<h2 className='text-underline'>
									{` We have classes everyday, Pick one that works for you!`}
								</h2>
							</div>
						</div>
					</div>
					<Slider
						{...projectSlider}
						className='recent-portfolio-slider slider_margin'
					>
						<div
							className='portfolio-block-seven wow fadeInUp'
							data-wow-delay='.2s'
						>
							<div className='portfolio-img'>
								<img src='assets/images/team/img_03.jpg' alt='Image' />
							</div>
							<div className='portfolio-content'>
								<h3 className='title'>
									<Link href='/project-details'>
										<a className='text-underline'>Crossfit</a>
									</Link>
								</h3>
								<Link href='/project-details'>
									<a className='cat-btn'>Crossfit</a>
								</Link>
							</div>
						</div>
						<div
							className='portfolio-block-seven wow fadeInUp'
							data-wow-delay='.3s'
						>
							<div className='portfolio-img'>
								<img src='assets/images/team/img_04.jpg' alt='Image' />
							</div>
							<div className='portfolio-content'>
								<h3 className='title'>
									<Link href='/project-details'>
										<a className='text-underline'>Spin</a>
									</Link>
								</h3>
								<Link href='/project-details'>
									<a className='cat-btn'>Spin</a>
								</Link>
							</div>
						</div>
						<div
							className='portfolio-block-seven wow fadeInUp'
							data-wow-delay='.4s'
						>
							<div className='portfolio-img'>
								<img src='assets/images/team/img_02.jpg' alt='Image' />
							</div>
							<div className='portfolio-content'>
								<h3 className='title'>
									<Link href='/project-details'>
										<a className='text-underline'>Yoga</a>
									</Link>
								</h3>
								<Link href='/project-details'>
									<a className='cat-btn'>Yoga</a>
								</Link>
							</div>
						</div>
						<div
							className='portfolio-block-seven wow fadeInUp'
							data-wow-delay='.5s'
						>
							<div className='portfolio-img'>
								<img src='assets/images/team/img_00.jpg' alt='Image' />
							</div>
							<div className='portfolio-content'>
								<h3 className='title'>
									<Link href='/project-details'>
										<a className='text-underline'>PowerFit</a>
									</Link>
								</h3>
								<Link href='/project-details'>
									<a className='cat-btn'>Crossfit</a>
								</Link>
							</div>
						</div>
					</Slider>
				</div>
			</section>
		</Layout>
	);
};
export default ProjectDetails;
