import Link from 'next/link';
import Slider from 'react-slick';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';
import { clientsSliderTwo, testimonialSliderTwo } from '../src/sliderProps';

const Trial = () => {
	return (
		<Layout>
			<section className='contact-information-area contact-information-style-one pt-130 pb-80 mb-100'>
				<div className='contact-area contact-style-two'>
					<div className='contact-wrapper'>
						<div className='container'>
							<div className='row justify-content-center'>
								<div className='col-lg-6'>
									<div className='section-title text-center mb-45 wow fadeInUp'>
										<span className='sub-title red-dark text-underline'>
											Free Trial
										</span>
										<h2 className='text-uppercase'>
											Sign up to get a free X Day Trial
										</h2>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='contact-form wow fadeInUp'>
										<form onSubmit={(e) => e.preventDefault()}>
											<div className='row justify-content-center'>
												<div className='col-lg-3 col-md-6 col-sm-12'>
													<div className='form_group'>
														<input
															type='text'
															className='form_control'
															placeholder='First Name'
															name='name'
															required=''
														/>
													</div>
												</div>
												<div className='col-lg-3 col-md-6 col-sm-12'>
													<div className='form_group'>
														<input
															type='text'
															className='form_control'
															placeholder='Last Name'
															name='phone'
															required=''
														/>
													</div>
												</div>
												<div className='col-lg-3 col-md-6 col-sm-12'>
													<div className='form_group'>
														<input
															type='email'
															className='form_control'
															placeholder='Email Address'
															name='email'
															required=''
														/>
													</div>
												</div>
												<div className='col-lg-5'>
													<div className='form_group text-center'>
														<button className='main-btn btn-red w-100'>
															Get Free Trial
														</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== End Hero Section ======*/}
		</Layout>
	);
};
export default Trial;
