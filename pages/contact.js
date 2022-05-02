import Link from 'next/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layouts/Layout';

const Contact = () => {
	return (
		<Layout>
			<PageBanner pageName={'Contact Us '} />
			<section className='contact-information-area contact-information-style-one pt-130 pb-80'>
				<div className='container'>
					<div className='row no-gutters'>
						<div className='col-lg-8'>
							<div className='information-wrapper mb-50 wow fadeInLeft'>
								<div className='row'>
									<div className='col-lg-6'>
										<div className='information-item mb-60'>
											<div className='icon'>
												<i className='flaticon-map' />
											</div>
											<div className='text'>
												<h5>Address</h5>
												<p>2080 N Trekell Rd, Casa Grande, AZ 85122</p>
											</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='information-item mb-60'>
											<div className='icon'>
												<i className='flaticon-phone' />
											</div>
											<div className='text'>
												<h5>Online</h5>
												<p>
													<span>Phone :</span>
													<a href='tel:(520) 836-0613'>(520) 836-0613</a>
												</p>
												<p>
													<span>Fax :</span>
													<a href='tel:(520) 836-0613'>(520) 836-0613</a>
												</p>
											</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='information-item mb-60'>
											<div className='icon'>
												<i className='flaticon-map' />
											</div>
											<div className='text'>
												<h5>San Francisco</h5>
												<p>720 Main Street, B - Block, Floor, San Francisco</p>
											</div>
										</div>
									</div>
									<div className='col-lg-6'>
										<div className='information-item mb-60'>
											<div className='icon'>
												<i className='flaticon-email' />
											</div>
											<div className='text'>
												<h5>Email</h5>
												<p>
													<a href='mailto:Info@powerhousefitnessaz.com'>
														Info@powerhousefitnessaz.com
													</a>
												</p>
												<p>
													<a href='www.infor.net'>www.infor.net</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div className='information-cta mb-50 wow fadeInRight'>
								<div className='information-box mb-25'>
									<h3>Working Hour</h3>
									<h5>Mon - Fri : 5am - 9pm</h5>
									<h5 className='st-close'>Sat & Sun: 7am - 9pm</h5>
								</div>
								<div className='information-box mb-25'>
									<h3>Any Other questions ?</h3>
									<p>
										Shoot us an email and we will get back to you as soon as
										possible.
									</p>
									<Link href='/contact'>
										<a className='main-btn main-btn-blue'>Contact Us</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*====== End Contact Information Section ======*/}
			{/*====== Start Map section ======*/}
			<section className='contact-page-map wow fadeInUp'>
				<div className='map-box'>
					<iframe src='https://maps.google.com/maps?q=2080%20N%20Trekell%20Rd,%20Casa%20Grande,%20AZ%2085122&t=&z=13&ie=UTF8&iwloc=&output=embed' />
				</div>
			</section>
			{/*====== End Map section ======*/}
			{/*====== Start Contact Section ======*/}
			<section className='contact-area contact-style-two'>
				<div className='contact-wrapper'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-6'>
								<div className='section-title text-center mb-55 wow fadeInUp'>
									<h2>Send Us Message</h2>
									<h5>Don’t Hesitate To Get in Contact With Us!</h5>
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
														placeholder='Full Name'
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
														placeholder='Phone Number'
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
											<div className='col-lg-3 col-md-6 col-sm-12'>
												<div className='form_group'>
													<input
														type='url'
														className='form_control'
														placeholder='Website'
														name='url'
														required=''
													/>
												</div>
											</div>
											<div className='col-lg-12 col-md-12 col-sm-12'>
												<div className='form_group'>
													<textarea
														name='messsage'
														placeholder='Your Message'
														className='form_control'
														defaultValue={''}
													/>
												</div>
											</div>
											<div className='col-lg-5'>
												<div className='form_group text-center'>
													<button className='main-btn btn-red w-100'>
														send message
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
			</section>
		</Layout>
	);
};
export default Contact;
