import Link from 'next/link';
import Slider from 'react-slick';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
import { projectSlider } from '../src/sliderProps';

const ProjectDetails = () => {
	return (
		<Layout>
			<PageBanner pageName={'Tanning'} />

			{/*====== Start Project-Details Section ======*/}
			<section className='portfolio-details-area pt-130 pb-80'>
				<div className='container'>
					<div className='portfolio-details-wrapper wow fadeInUp'>
						<div className='portfolio-content mt-30'>
							<div className='row'>
								<div className='col-lg-7'>
									<div className='content'>
										<h3 className='title'>Professional Tanning Service</h3>
										<div className='text-box'>
											{/* <div className='big-text'>M</div> */}
											<div className='box-text'>
												<p>
													Sed ut perspiciatis unde omnis iste natus error sit
													voluptatem accusantium doloremque lau dantium, totam
													rem aperiam, eaque ipsa quae ab illo inventore
													veritatis et quasi architecto beatae vitae dicta sunt
													explicabo. Nemo enim ipsam voluptatem quia voluptas
													sit aspernatu aut odit aut fugit, sed quia
													consequuntur magni dolores eos qui ratione voluptatem
													sequines ciunt. Neque porro quisquam est, qui dolorem
													ipsum quia dolor sit amet
												</p>
											</div>
										</div>
									</div>
									<div className='content'>
										<h4 className='title'>{`Lorem, ipsum dolor.`}</h4>
										<p>
											Nemo enim ipsam voluptatem quia voluptas sit aspernatu aut
											odit aut fugit, sed quia consequuntur magni dolores eos
											qui ratione voluptatem sequines ciunt. Neque porro
											quisquam est, qui dolorem ipsum quia dolor sit amet Quis
											autem vel eum iure reprehenderit qui in ea voluptate
										</p>
										<ul className='list'>
											<li>
												Choosing A New Serverless Database Technology At An
												Agency (Case Study)
											</li>
											<li>
												Growing UX Maturity: Knowledge Sharing And Mentorship
												(Part 2)
											</li>
											<li>How To Boost Media Performance On A Budget</li>
										</ul>
									</div>
								</div>
								<div className='col-lg-5'>
									<div className='project-info'>
										<h3>Tanning Details</h3>
										<ul className='list'>
											<li>
												<span className='title'>Session Length</span>
												<span className='text'>Up to 60 mins</span>
											</li>
											<li>
												<span className='title'>Cost</span>
												<span className='text'>Included in membership?</span>
											</li>
											<li>
												<span className='title'>Availability</span>
												<span className='text'>Mon - Fri</span>
											</li>
											<button className='main-btn mt-3 mb-3 py-2'>
												Book Now
											</button>
										</ul>
									</div>
								</div>
							</div>
							<div className='content'>
								<h4 className='title'>Our tanning process.</h4>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam.
								</p>
								<div className='row'>
									<div className='col-lg-3 col-md-6 col-sm-12'>
										<div className='single-step-box'>
											<div className='icon'>
												<i className='flaticon-creative' />
												<span className='step-count'>01</span>
											</div>
											<div className='text'>
												<h3>Schedule Appointment</h3>
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
												<h3>Step 2</h3>
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
												<h3>Step 3</h3>
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
												<h3>Final Step</h3>
												<p>
													Sed perspiciatis omnis tenatus voluptate accusa
													dolorem laudantiue
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='content'>
								<div className='row'>
									<div className='col-lg-6'>
										<h4 className='title'>Results</h4>
										<p>
											You will leave this process with a tan that looks natural
											and feeling great
										</p>
										<h6 className='roboto-italic'>
											Be sure to show up early to get ready for your appointment
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
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== End Project-Details  Section ======*/}
		</Layout>
	);
};
export default ProjectDetails;
